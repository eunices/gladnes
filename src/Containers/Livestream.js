import React, { Component } from 'react';

import { Box, Heading, Text } from 'grommet';
import { Link } from 'react-router-dom';

import Youtube from '../Components/Youtube';

class Livestream extends Component {
  
  render() {
    const VIDEO_ID = 'iHbdzRCnPC8';

    return(
      <Box fill>
        <Youtube embedId={VIDEO_ID}/>
      </Box>
        
    );
  }

}


export default Livestream;