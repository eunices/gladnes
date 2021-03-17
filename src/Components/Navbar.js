import React from 'react';

import { Header, Heading, Box, Button, RoutedButton} from 'grommet';
import { Home } from 'grommet-icons';
import { HashLink  } from 'react-router-hash-link';

const Navbar = props => {

  return(
    <Header
      background='brand'
      direction='row'
      justify='between'
      pad={{ left: 'medium', right: 'medium', vertical: 'small' }}
      elevation='medium'
      flex={false} 
      {...props}
    >
      <Box direction='row' basis="auto">

        <RoutedButton path="/">
          <Home size="medium" className='navIcon'/>
        </RoutedButton>

        <HashLink to="/#guestbook">
          <Button 
            secondary 
            label="Guestbook" 
            margin={{'right': 'small'}}  
            className='navButton'
            size="small"
          />
        </HashLink>
      
        <HashLink to="/#livestream">
          <Button 
            secondary 
            label="Livestream"
            margin={{'right': 'small'}}  
            className='navButton'
            size="small"
          />
        </HashLink>
      </Box>

      <Box>
        <RoutedButton 
          path='/checkin'
          primary 
          label="Check In"
          margin={{'right': 'small'}} 
          className='navButton'
          size="small"
        />
      </Box>

    </Header>
  );
};

export default Navbar;