import React, { Component } from 'react';

import { Box, Heading, Text } from 'grommet';
import { StatusGoodSmall} from 'grommet-icons';

class Programme extends Component {

  render() {
    return(
      <Box flex={false} pad={{top: '200px'}}>
        <Box 
          pad={{horizontal: 'xsmall'}}
          direction='column'
          align='center'
          justify='center'
          width='large'
          alignSelf='center'
          flex 
        >
          <Heading level="1" size="large" margin="small">
            Welcome
          </Heading>
          <Heading level="1" size="small" margin="small">
            to the wedding of Daniel x Eunice
          </Heading>
          <Heading level="1" size="small" margin="small">
          家俊 x 佳钰
          </Heading>
        </Box>
        <Box direction='row' justify='center'>
          <Box basis='medium' pad='small' overflow={{horizontal: 'auto'}}>
            <Box 
              flex 
              align='center'
              justify='center'
              width='medium'
              alignSelf='center'
            >
              <Heading level='2'> 
          Programme
              </Heading>

              <Text size="small"  className='centered'>
          Welcome<br/>
          Praise and worship<br/>
          Exhortation<br/>
          Exchange of vows and rings<br/>
          Solemnisation<br/>
          Lunch reception<br/>

              </Text>

              <Heading level="2">
                Bible verse
              </Heading>

              <Text size="small"  className='centered'>
          Be completely humble and gentle; 
          be patient, bearing with one another in love. 
                <StatusGoodSmall size='small' className='separator-icon'/>
                Ephesians 4:2
              </Text>
            </Box>
          </Box>

          <Box basis='medium' pad='medium' overflow={{horizontal: 'auto'}}>
            <Box 
              flex 
              align='center'
              justify='center'
              width='medium'
              alignSelf='center'
            >

              <Heading level="2">程序</Heading>

              <Text size="medium"  className='centered'>
          欢迎<br/>
          诗歌<br/>
          藉神圣言勉励<br/>
          交换誓言和戒指<br/>
          签署结婚证书<br/>
          午餐<br/>
              </Text>

              <Heading level="2">圣经经文</Heading>

              <Text size="medium"  className='centered'>
          凡事要谦虚、温柔、忍耐，
          用爱心互相宽容
                <StatusGoodSmall size='small' className='separator-icon '/> 
          以弗所书 4:2
              </Text>


            </Box>
          </Box>

        </Box>
      </Box>
    );
  }

}


export default Programme;