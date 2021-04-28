import React from 'react';

import { Header, Heading, Box, Button} from 'grommet';
import { Link } from 'react-router-dom';
import { HashLink  } from 'react-router-hash-link';
import { Home } from 'grommet-icons';

const Navbar = props => {

  return(
    <Box
      style={{
        position: 'fixed',
        width: '100%',
      }}
      tag="header"
      background={{'color': 'brand'}}
      direction='row'
      justify='between'
      pad={{ left: 'medium', right: 'medium', vertical: 'small' }}
      elevation='medium'
      flex={false} 
      {...props}
    >
      <Box direction='row' basis="auto">
        <Link to='/'>
          <Home 
            size="medium"
            className='navIcon'
            margin={{horizontal: 'xxsmall'}}
          />
        </Link>

        <HashLink to="/#guestbook">
          <Button 
            secondary 
            className='navButton'
            label="Guestbook" 
            size="small"
            margin={{horizontal: 'xxsmall'}}
          />
        </HashLink>
      
        <HashLink to="/#livestream">
          <Button 
            secondary 
            className='navButton'
            label="Watch"
            size="small"
            margin={{horizontal: 'xxsmall'}}
          />
        </HashLink>
      </Box>

      <Box>
        <Link to='/checkin'>
          <Button 
            primary 
            label="Check In"
            margin={{horizontal: 'xxsmall'}}
            className='navButton'
            size="small"
          />
        </Link>
      </Box>

    </Box>
  );
};

export default Navbar;