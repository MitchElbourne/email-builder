import React, { Component } from 'react';

import {  EmailContainer,
          SponsorImageBlock,
          ImageBlock,
          TitleBlock,
          TextBlock,
          FocusLarge,
          CtaButton,
          Padding,
          FooterRUW } from '../globals';


class RenewablesUnWindWithEvent extends Component {
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
      <div className="renewables-unwind-with-event">

        <EmailContainer>

          <TitleBlock
            text="I N V I T A T I O N"
            fontSize={16}
            paddingTop={16}
            paddingBottom={2}
          />

          <SponsorImageBlock
            imgSrc="http://www.energeiaworks.com/email/2018-11/nyses-logo.png"
            imgAlt="Event logo"
            imgWidth={300}
            paddingTop={24}
            paddingBottom={24}
            linkTo="http://nyses.org/Events/20181130-SolarConferenceAndEXPO"
          />

          <TitleBlock
            text="Join New York Solar Energy Society and EnergeiaWorks for the NY State Summit"
            fontSize={42}
            paddingTop={8}
            paddingBottom={24}
          />

          <TextBlock
            text={["You are cordially invited to attend ", <strong>Energy Efficiency & Renewables: NY State Summit</strong>, " brought to you by New York Solar Energy Society in partnership with EnergeiaWorks and Solaria."]}
            fontSize={18}
            fontWeight={300}
          />

          <TextBlock
            text={["We are pleased to announce our partnership for the upcoming event on ", <strong>Friday, November 30, 2018</strong>, ", to be hosted at Osborn Amphitheater in Troy, NY.  Join us in the Capital District for a full day of presentations and panel events featuring solar and tech leaders."]}
            fontSize={18}
            fontWeight={300}
          />

          <TextBlock
            text={["We have a full schedule lined up, which can be ", <a href="http://nyses.org/Events/20181130-SolarConferenceAndEXPO" target="_blank">viewed here</a>, ". Guest speakers will be addressing numerous key topics affecting the solar sector, including turbine technologies, blockchain application and research trends in clean tech.  The headline event is a panel moderated by Tom Thompson featuring Kevin Bailey of High Peaks Solar and Dennis Phayre of Enter Solar."]}
            fontSize={18}
            fontWeight={300}
          />



          <TextBlock
            text={["We're offering a special discounted price of ", <strong>$100</strong>, " to EnergeiaWorks subscribers. Follow the link below and use the ", <strong>EnergeiaWorks checkout</strong>, " option to pay."]}
            fontSize={18}
            fontWeight={300}
          />

          <FocusLarge
            eventLocation={["Osborn Amphitheater", <br key={this.getKey()}/>, "Hilton Garden Inn Troy", <br key={this.getKey()}/>, "235 Hoosick St", <br key={this.getKey()}/>, "Troy, NY"]}
            eventDate={["Friday, November 30, 2018", <br key={this.getKey()}/>, "7:45am - 6:00pm"]}
            ctaText="Register Here"
            ctaLinkTo="http://nyses.org/Conference/2018-ConferenceRegistration"
            ctaColor="rgb(0, 84, 182)"
            ctaWidth={280}
            ctaHeight={55}
            readMoreLinkTo="http://nyses.org/Events/20181130-SolarConferenceAndEXPO"
            readMoreText="View event schedule"
          />

          <Padding size={24} />





          <img src="http://www.energeiaworks.com/email/img/logo-renewable-unwind@2x.png" alt="Renewables UnWind logo" width="33%" border="0" style={{display: 'block', width: '40%', maxWidth: '40%', paddingTop: '22px', paddingBottom: '22px'}} />

          <TextBlock
            text={["We are excited to follow the Energy Efficiency & Renewables event with a special Renewables UnWind afterparty networking event. Join your friends at NYSES and EnergeiaWorks to meet and network with your sustainable energy colleagues at our exclusive event. Come have a drink and socialize in a casual atmosphere with some of the industry's top professionals."]}
            fontSize={16}
            paddingTop={16}
          />

          <TextBlock
            text={["Keep an eye on your inbox and ", <a href='https://www.renewablesunwind.com'>renewablesunwind.com</a>, " for more event information to be announced soon!"]}
            fontSize={16}
            paddingTop={16}
          />





          {/* <FocusLarge
            eventLocation={["The Brazen Tavern", <br key={this.getKey()}/>, "356 West 44th Street",<br key={this.getKey()}/>, "2nd Floor Lounge",<br key={this.getKey()}/>, "New York, NY 10036"]}
            eventDate={["Monday, March 19, 2018", <br key={this.getKey()}/>, "6-8pm"]}
            ctaText="Register Here"
            ctaLinkTo="https://www.eventbrite.com/e/renewables-unwind-tickets-43852977436"
            ctaColor="#337ab7"
            ctaWidth={280}
            ctaHeight={55}
          /> */}


          {/* <CtaButton
            ctaLinkTo="https://www.eventbrite.com/e/renewables-unwind-brooklyn-edition-tickets-43161769013?aff=ehomecard"
            ctaText="Register Here"
            ctaWidth={280}
            ctaHeight={42}
            ctaColor="#337ab7"
          /> */}

          <Padding size={24} />

          <FooterRUW />

        </EmailContainer>

      </div>
    );
  }
}

export default RenewablesUnWindWithEvent;
