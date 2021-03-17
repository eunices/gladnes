import React, { Component } from 'react';

import { 
  Box, Heading, 
  FormField, Form, TextInput, TextArea,
  Button,
} from 'grommet';

import { Aed } from 'grommet-icons';




class Guestbook extends Component {

  render() {
    return(
      <Box pad='medium'>
        <Box direction='row' justify='center'>
          <Box basis='xlarge' pad='large' overflow={{horizontal: 'auto'}}>
            <Box 
              flex 
              align='center'
              justify='center'
              alignSelf='center'
            >
              <Heading level="1">
                Guestbook 留言簿 <Aed size="large"/>
              </Heading>

              <Form
                // value={value}
                // onChange={nextValue => setValue(nextValue)}
                // onReset={() => setValue({})}
                // onSubmit={({ value }) => {}}
              >
                <FormField name="name" htmlFor="text-input-id" label="Name">
                  <TextInput id="text-input-id" name="name" />
                </FormField>

                <FormField name="message" htmlFor="text-input-id" label="Message">
                  <TextArea id="text-input-id" name="message" />
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


export default Guestbook;