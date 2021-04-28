import React, { Component } from 'react';

import { 
  Box, Heading, 
  FormField, Form, TextInput, TextArea,
  Button,
} from 'grommet';

class Guestbook extends Component {

  render() {
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
              <TextArea id="text-input-id" name="message" style={{
                height: '150px',
              }}/>
            </FormField>

          </Form>

          <Box direction="row" gap="medium" pad="medium">
            <Button type="submit" primary label="Submit" />
          </Box>

        </Box>
      </Box>
    );
  }

}


export default Guestbook;