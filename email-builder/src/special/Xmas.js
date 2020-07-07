import React, { Component } from 'react';

import {  EmailContainer,
          Footer } from '../globals';

class Xmas extends Component {
  render() {
    return (
      <div className="xmas">
        <EmailContainer>

          <img src="http://www.energeiaworks.com/email/2017-12/xmas-email-graphic-final.jpg" alt="Renewable Energy Christmas Scene" width="100%" border="0" style={{display: 'block', width: '100%'}} />

          <Footer />

        </EmailContainer>
      </div>
    )
  }
}

export default Xmas;
