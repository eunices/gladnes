import React, { Component } from 'react';

import CheckInForm from '../Containers/CheckInForm';
import separatorSections from '../Assets/separatorSections.png';
import separatorLongImg from '../Assets/separator-long.png';
class CheckIn extends Component {

  render() {
    return(
      <React.Fragment>
        <img style={{
          paddingTop: '80px',
        }} src={separatorLongImg} alt='separator' className='separator-long'/>
        <CheckInForm/>
      </React.Fragment>
    );
  }

}

export default CheckIn;