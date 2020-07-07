import React, { Component } from 'react';

import {  EmailContainer,
          ImageBlock,
          TitleBlock,
          TextBlock,
          FocusLarge,
          CtaButton,
          Padding,
          FooterRUW } from '../globals';


class RenewablesUnWindSummer extends Component {
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
      <div className="renewables-unwind">

        <EmailContainer>

          <ImageBlock
            imgSrc="http://www.energeiaworks.com/email/2018-06/header-RUW-summerSolstice2018.jpg"
            imgAlt="Renewables UnWind Summer Solstice banner graphic"
            paddingTop={24}
            paddingBottom={2}
          />

          <TitleBlock
            text="Join us for a summer solstice Renewables UnWind!"
            fontSize={36}
            paddingTop={22}
            paddingBottom={16}
            color="#7E0E32"
          />

          <TextBlock
            text="Antenna Group, CPS, CVE, EnergeiaWorks, Locus Energy, Solar Landscape, Soltage and WRISE bring you a special Summer Solstice Renewables UnWind!"
            fontSize={18}
            fontWeight={600}
          />

          <TextBlock
            text="You're invited to network with your sustainable energy colleagues in Jersey City and celebrate the longest day of the year. In honor of the longest day of the year, this UnWind will be extended by one hour for your networking pleasure!"
            fontSize={18}
            fontWeight={600}
          />

          <FocusLarge
            eventLocation={["Zeppelin Hall Beer Garden", <br key={this.getKey()}/>, "88 Liberty View Dr", <br key={this.getKey()}/>, "Jersey City, NJ"]}
            eventDate={["Thursday, June 21, 2018", <br key={this.getKey()}/>, "6-9pm"]}
            ctaText="RSVP Here"
            ctaLinkTo="https://www.eventbrite.com/e/renewables-unwind-summer-solstice-tickets-45293906293"
            ctaColor="#005ebc"
            ctaColor="#7E0E32"
            color="#7E0E32"
            ctaWidth={200}
            ctaHeight={55}
            readMoreText=""
            readMoreLinkTo="https://www.eventbrite.com/e/renewables-unwind-summer-solstice-tickets-45293906293"
          />

          <Padding size={24} />

          <FooterRUW />

        </EmailContainer>

      </div>
    );
  }
}

export default RenewablesUnWindSummer;
