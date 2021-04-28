import React, { Component } from 'react';

import { 
  Box, Heading, 
  FormField, Form, TextInput,
  Button, Paragraph,
} from 'grommet';

import Spinner from  '../Components/Spinner';

const opts = {
  'Access-Control-Allow-Origin':'*' ,
  'Content-Type': 'text/plain;charset=utf-8',
};

class CheckInForm extends Component {

  state = {
    checkingIn: false,
    message: null,
  }

  submitFormHandler = (event) => {
    event.preventDefault();
    this.setState({checkingIn: true});

    const base = process.env.REACT_APP_GOOGLE_FORM_BASE_URL;
    const url = `${base}${process.env.REACT_APP_GOOGLE_FORM_KEY_CHECKIN}/exec`;
    const params = Object.entries(event.value)
      .map(([key, val]) => `${key}=${val}`).join('&');

    fetch(`${url}?${params}`, {method: 'POST'})
      .then(_response => {
        this.setState({checkingIn: false, message: 'Successfully submitted'});
      })
      .catch(error => {
        console.log('[Check in error]', error);
        this.setState({checkingIn: false, message: 'Failed to submit'});
      });
    
    setTimeout(() => {
      this.setState({message: null});
    }, 4000);
  } 

  render() {


    const form = this.state.checkingIn ? <Spinner/> : (
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
    );

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
              {this.state.message ? 
                (<Paragraph size="small">{this.state.message}</Paragraph>)
                : null
              }
              {form}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

}


export default CheckInForm;