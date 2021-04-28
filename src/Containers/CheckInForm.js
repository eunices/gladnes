import React, { Component } from 'react';
import axios from 'axios';
import { Home } from 'grommet-icons';

import { 
  Box, Heading, 
  FormField, Form, TextInput,
  Button,
} from 'grommet';

const optsAxios = {
  headers: {
    'Access-Control-Allow-Origin':'*' ,
  },
};

class CheckInForm extends Component {

  state = {
    checkingIn: false,
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_GOOGLE_FORM_KEY);
  }

  submitFormHandler = (event) => {
    event.preventDefault();

    console.log('[submitFormHandler]');
    console.log(process.env.REACT_APP_GOOGLE_FORM_KEY);
    console.log(event.value);

    const base = 'https://script.google.com/macros/s/';
    const url = `${base}${process.env.REACT_APP_GOOGLE_FORM_KEY}/exec`;
    const params = Object.entries(event.value)
      .map(([key, val]) => `${key}=${val}`).join('&');

    axios.post(`${url}?${params}`, optsAxios)
      .then(response => {
        console.log('[response.data]', response.data);
      })
      .catch(error => {
        console.log('[error]', error);
      });
  } 

  render() {
    return(
      <Box flex={false} >
        <Box direction='row' justify='center'>
          <Box basis='large' overflow={{horizontal: 'auto'}}>
            <Box 
              flex 
              align='center'
              justify='center'
              width='medium'
              alignSelf='center'
            >
              <Heading level="1" style={{padding: '0px'}}>
              Check In
              </Heading>
              <Form
                onSubmit={this.submitFormHandler}
              >
                <Box direction="column">
                  <FormField name="first_name" label="First name" required>
                    <TextInput id="first_name" name="first_name" />
                  </FormField>

                  <FormField name="last_name" label="Last name" required>
                    <TextInput id="last_name" name="last_name" />
                  </FormField>
                </Box>

                <FormField name="contact_number" label="Contact number" required
                  validate={{ 
                    regexp: new RegExp(/^\d{8}$/), 
                    message: 'Your phone number should be 8 digits long', 
                  }}>
                  <TextInput id="contact_number" name="contact_number"/>
                </FormField>

                <Box alignContent="center" pad="medium">
                  <Button type="submit" primary label="Submit"/>
                </Box>
            
              </Form>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

}


export default CheckInForm;