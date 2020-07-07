import React, { Component } from 'react';

import {
  EmailContainer,
  ImageBlock,
  TitleBlock,
  TextBlock,
  FocusLarge,
  Padding,
  FooterRUW
} from '../globals';

class RenewablesSpecial extends Component {
  constructor( props ) {
    super( props );

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  getKey(){
    return this.keyCount++;
  }


  render() {
    return (
      <div className="renewables-special">
        <EmailContainer>

          <ImageBlock
            imgSrc="http://www.energeiaworks.com/email/2018-09/UnWind-Anaheim-emailHeader-v0.4.jpg"
            imgAlt="Renewables UnWind banner graphic"
            paddingTop={24}
            paddingBottom={2}
          />

          <TitleBlock
            text={["Join us for a special UnWind",<br key={this.getKey()} /> ,"event in Anaheim!"]}
            fontSize={36}
            paddingTop={22}
            paddingBottom={16}
            color="#0D57B8"
          />

          <TextBlock
            text="Antenna Group, EnergeiaWorks, HWI, Locus Energy, PurePower Engineering and Soltage bring you a special Renewables UnWind event in Anaheim this September!"
            fontSize={18}
            fontWeight={600}
          />

          <TextBlock
            text="You're invited to join us for a drink and to network with your sustainable energy colleagues in advance of the largest solar conference in the calender.  Be sure to RSVP now, as spaces will be limited."
            fontSize={18}
            fontWeight={600}
          />

          <FocusLarge
            eventLocation={["Fire + Ice", <br key={this.getKey()}/>, "400 Disney Way", <br key={this.getKey()}/>, "Anaheim, CA "]}
            eventDate={["Mon, September 24, 2018", <br key={this.getKey()}/>, "8-10pm"]}
            ctaText="RSVP Here"
            ctaLinkTo="https://www.eventbrite.com/e/renewables-unwind-anaheim-tickets-48388330800"
            ctaColor="#005ebc"

            color="#005ebc"
            ctaWidth={200}
            ctaHeight={55}
            readMoreText="Use password: SPI2018"
            readMoreLinkTo="https://www.eventbrite.com/e/renewables-unwind-anaheim-tickets-48388330800"
          />

          <Padding size={24} />

          <FooterRUW />

        </EmailContainer>
      </div>
    )
  }
}

export default RenewablesSpecial;
