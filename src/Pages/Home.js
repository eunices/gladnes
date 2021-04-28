import React, { Component } from 'react';

import { Box, Anchor } from 'grommet';

import Programme from '../Containers/Programme';
import Livestream from '../Containers/Livestream';
import Guestbook from '../Containers/Guestbook';

import bannerImg from '../Assets/banner.png';
import separatorImg from '../Assets/separator.png';
import separatorLongImg from '../Assets/separator-long.png';

class Home extends Component {

  render() {
    return(
      <Box>
      

        <div id= "programme"></div>
        <Programme/>

        <div id= "guestbook"></div>
        <Guestbook/>
        <img src={separatorImg} alt='separator' className='section-separator'/>

        <div id= "livestream"></div>
        <Livestream/>
        <img src={separatorLongImg} alt='separator' className='section-sep-long'/>

      </Box>
    );
  }

}

export default Home;