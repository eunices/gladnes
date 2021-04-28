import React, { Component } from 'react';

import { Box, Heading, Text, Paragraph } from 'grommet';
import { Link } from 'react-router-dom';

import Youtube from '../Components/Youtube';

class Livestream extends Component {
  
  render() {
    const VIDEO_ID = 'iHbdzRCnPC8';
    const url = `https://youtube.com/watch?v=${VIDEO_ID}`;
    
    return(
      <Box fill>

        <Youtube embedId={VIDEO_ID}/>
        <Box style={{margin: 'auto', textAlign: 'center'}}>
          <Paragraph size="small"> 
            If the embedded video does not work, use <a href={url}>{url}</a>
          </Paragraph>
        </Box>
      </Box>
        
    );
  }

}


export default Livestream;