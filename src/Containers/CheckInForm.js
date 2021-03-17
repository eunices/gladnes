import React, { Component } from 'react';

import { 
  Box, Heading, 
  FormField, Form, TextInput, TextArea,
  Button,
} from 'grommet';

import { Location } from 'grommet-icons';

class CheckInForm extends Component {

  render() {
    return(
      <Box pad='medium'>
        <Box direction='row' justify='center'>
          <Box basis='large' pad='large' overflow={{horizontal: 'auto'}}>
            <Box 
              flex 
              align='center'
              justify='center'
              width='medium'
              alignSelf='center'
            >
              <Heading level="1">
              Check-In <Location size="large"/>
              </Heading>

              
              <Form
                // value={value}
                // onChange={nextValue => setValue(nextValue)}
                // onReset={() => setValue({})}
                // onSubmit={({ value }) => {}}
              >
                <FormField name="firstname" htmlFor="text-input-id" label="First Name">
                  <TextInput id="text-input-id" name="firstname" />
                </FormField>

                <FormField name="lastname" htmlFor="text-input-id" label="Last Name">
                  <TextInput id="text-input-id" name="lastname" />
                </FormField>

                <FormField name="contact" htmlFor="text-input-id" label="Contact number">
                  <TextInput id="text-input-id" name="contact" />
                </FormField>

              </Form>

              <Box direction="row" gap="medium">
                <Button type="submit" primary label="Submit" />
              </Box>


            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

}


export default CheckInForm;