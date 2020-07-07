import React, { Component } from 'react';

import { EmailContainer, GlobalHeaderMini, AboutEnergeiaWorks, TextBlock, CtaButton, Padding, SocialMedia, Footer } from '../globals';


class Activation extends Component {

  render() {
    return (
      <div className="activation">

        <EmailContainer>

          <GlobalHeaderMini
            imgSrc="http://www.energeiaworks.com/email/img/logo-energeiaworks@2x.png"
            linkTo="http://www.energeiaworks.com"
            imgWidth={323}
            imgAlt="EnergeiaWorks logo"
            socialMedia={<SocialMedia padding={16}/>}
          /> 
          
          
          
          <TextBlock />
          
          <CtaButton
            ctaLinkTo="mailto: info@energeiaworks.com"
            ctaText="Contact Us Today"
            ctaWidth={230}
            ctaHeight={55}
            ctaColor="#0054B6"
          />
          
          <Padding size={32} />

          <Footer />

        </EmailContainer>

      </div>
    );
  }
}

export default Activation;
