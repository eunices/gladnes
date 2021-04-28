import React, { Component } from 'react';

import { 
  Box, Heading, 
  FormField, Form, TextInput, TextArea,
  Button, Paragraph,
} from 'grommet';

import Spinner from '../Components/Spinner';
class Guestbook extends Component {

  state = {
    submitting: false,
    message: null,
  }

  submitFormHandler = (event) => {
    event.preventDefault();
    this.setState({submitting: true});

    const base = process.env.REACT_APP_GOOGLE_FORM_BASE_URL;
    const url = `${base}${process.env.REACT_APP_GOOGLE_FORM_KEY_GUESTBOOK}/exec`;
    const params = Object.entries(event.value)
      .map(([key, val]) => `${key}=${val}`).join('&');

    fetch(`${url}?${params}`, {method: 'POST'})
      .then(_response => {
        this.setState({submitting: false, message: 'Thanks for your message!'});
      })
      .catch(error => {
        console.log('[Guestbook error]', error);
        this.setState({submitting: false, message: 'Failed to submit the message'});
      });
    
    setTimeout(() => {
      this.setState({message: null});
    }, 4000);
  }

  render() {


    const form = this.state.submitting ? <Spinner/> : 
      (          <Form onSubmit={this.submitFormHandler}>
        <FormField name="name" htmlFor="text-input-id" label="Name(s)">
          <TextInput id="text-input-id" name="names" />
        </FormField>

        <FormField name="message" htmlFor="text-input-id" label="Message">
          <TextArea id="text-input-id" name="message" style={{
            height: '150px',
          }}/>
        </FormField>

        <Box direction="row" gap="medium" pad="medium">
          <Button type="submit" primary label="Send your well wishes"/>
        </Box>
      
      </Form>); 

    return(
      <Box flex={false} direction='row' justify='center'  pad={{top: '30px'}}>
        <Box 
          basis='xlarge'
          overflow='auto'
          flex 
          align='center'
          justify='center'
          alignSelf='center'
        >
          <Heading level="1">
            Guestbook 留言簿 
          </Heading>
          {this.state.message ? 
            (<Paragraph size="small">{this.state.message}</Paragraph>)
            : null}
          {form}
        </Box>
      </Box>
    );
  }

}


export default Guestbook;