
import React, { Component } from 'react';
import { Heading, Button, Box } from 'grommet';
import { Notification } from 'grommet-icons';

class Testing extends Component {

  render() {
    return(
      <Box fill>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
        app body
            <Button 
              icon={<Notification />}
            />
          </Box>
      
          {
            <Box
              width='medium'
              background='light-2'
              elevation='small'
              align='center'
              justify='center'
            >
            sidebar
            </Box> 
          }
        </Box>
      
      </Box>
    );
  }

}


export default Testing;


