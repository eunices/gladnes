import React, { Component } from 'react';

import { Box, Anchor } from 'grommet';

import Programme from '../Containers/Programme';
import Livestream from '../Containers/Livestream';
import Guestbook from '../Containers/Guestbook';

import separatorSections from '../Assets/separatorSections.png';
import separatorLongImg from '../Assets/separator-long.png';
import background from '../Assets/background.png';

class Home extends Component {

  render() {
    return(
      <Box flex={false} style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '80%',
        backgroundPosition: '120% -13%',
      }}>
        <div id= "programme" className='programme'></div>
        <Programme/>
        <img src={separatorLongImg} alt='separator' className='separator-long'
          style={{paddingTop: '20px', paddingBottom: '10px'}}/>
        
        <div id= "guestbook"></div>
        <Guestbook/>
        <img src={separatorSections} alt='separator' className='separator'
          style={{paddingTop: '20px', paddingBottom: '30px'}}/>

        <div id= "livestream"></div>
        <Livestream/>
      </Box>
    );
  }

}

export default Home;