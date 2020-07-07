import React, { Component } from 'react';

import { EmailContainer, GlobalHeader, Focus, CtaLarge, FocusLarge, ImageBlock, AboutEnergeiaWorks, ShoutOut, Footer, Padding, TextBlock } from '../globals';
import { AnnouncementHeader, AnnouncementBackpack, RenewablesUnWind } from '.';

class Announcement extends Component {
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
      <div className="general-announcement">

        <EmailContainer>

          <GlobalHeader
            imgSrc="http://www.energeiaworks.com/email/img/logo-energeiaworks@2x.png"
            linkTo="http://www.energeiaworks.com"
            imgWidth={323}
            imgAlt="EnergeiaWorks logo"
          />

          <AnnouncementHeader
            imgSrc="http://www.energeiaworks.com/email/img/illus-top-charging@2x.png"
            title={["EnergeiaWorks at ESNA"]}
            imgWidth={144}
            imgAlt="Header graphic"
            color="#005ebc"
            color="#d7ecff"
            backgroundColor="#d7ecff"
            backgroundColor="#005ebc"
            fontSize={30}
          />

          <ShoutOut
            text={["EnergeiaWorks will be at", <br />, "Energy Storage North America", <br />, "Conference and Exhibition 2018"]}
            fontSize={32}
          />

          <TextBlock
            text={["As recruitment leaders in energy storage, EnergeiaWorks will be attending Energy Storage North America Conference and Exhibition 2018 in Pasadena, CA from November 6-8."]}
            fontSize={16}
            fontWeight={300}
          />

          <TextBlock
            text={["We have built relationships with some of the largest component manufacturers, construction companies, electric utilities, engineering firms, project financiers, forecasters, O&M providers, resource assessment firms, and developers in the industry.  Meet us at ESNA and learn why!"]}
            fontSize={16}
            fontWeight={300}
          />

          <TextBlock
            text={["Don't miss this opportunity to convene with our team during the industry's largest energy storage conference."]}
            fontSize={16}
            fontWeight={300}
          />









          <Focus
            imgSrc="http://www.energeiaworks.com/email/2018-11/esna-logo.png"
            imgAlt="Intersolar logo"
            imgWidth={410}
            eventLocation={["Pasadena Convention Center", <br/>, "300 E. Green Street", <br />, "Pasadena, CA"]}
            eventDate="November 6-8, 2018"
            ctaText="Ticket Information"
            ctaLinkTo="https://esnaexpo.com/attend/registration-2018"
            ctaColor="#005ebc"
            ctaWidth={260}
            ctaHeight={55}
            readMoreText="More Information"
            readMoreLinkTo="https://esnaexpo.com/"
          />







          <CtaLarge
            imgSrc="http://www.energeiaworks.com/email/img/icon-search@2x.png"
            imgAlt="Maginifying glass icon"
            leadText={["Are you hiring wind or storage talent?", <br />, "Are you seeking a change in your energy storage career?"]}
            subText={["Schedule a meeting with our",<br />, "California Account Manager & Recruiter"]}
            ctaText="Email Andrea Now"
            ctaLinkTo="mailto:az@energeiaworks.com"
          />

          {/*}<CtaLarge
            imgSrc="http://www.energeiaworks.com/email/img/icon-briefcase@2x.png"
            imgAlt="Briefcase icon"
            leadText="Are you seeking a change in your energy career?"
            subText="Meet with EnergeiaWorks recruiters to discuss opportunities that fit your skill set"
            ctaText="Email Andrea Now"
            ctaLinkTo="mailto:az@energeiaworks.com"
          />*/}

{/*
          <Padding size={24} />

          <img src="http://www.energeiaworks.com/email/img/logo-renewable-unwind%402x.png" alt="UnWind header" width={310} border="0" style={{display: 'block', width: 310, maxWidth: '100%'}} />

          <Padding size={24} />

          <TextBlock
            text="EnergeiaWorks invites you to network with your sustainable energy colleagues at our exclusive event in Anaheim. Come have a drink and network in a casual atmosphere with some of the top professionals in the renewable industry."
            fontSize={16}
            fontWeight={300}
          />

          <TextBlock
            text="Renewables Unwind is a networking event geared towards professionals in the sustainable energy and clean-tech industries. In 2018, you can find us in Anaheim, Austin, Boston, Calgary, Chicago, Jersey City, Orlando, Minneapolis, New York, San Antonio, San Diego, San Francisco, Toronto, and Vancouver."
            fontSize={16}
            fontWeight={300}
          />

          <FocusLarge
            eventLocation={["Southside Spirit House", <br key={this.getKey()}/>, "575 Howard St",<br key={this.getKey()}/>, "San Francisco, CA"]}
            //eventDate="Monday, March 19, 2018"
            eventDate={["Monday, July 9, 2018", <br key={this.getKey()}/>, "6:30-8:30pm"]}
            ctaText="RSVP"
            ctaLinkTo="https://www.eventbrite.com/e/renewables-unwind-san-francisco-tickets-46335916975?aff=eac2"
            ctaColor="#005ebc"
            ctaWidth={280}
            ctaHeight={55}
            readMoreLinkTo="https://www.eventbrite.com/e/renewables-unwind-san-francisco-tickets-46335916975?aff=eac2"
            readMoreText={["More information"]}
          /> */}







          <Padding size={12} />
          {/* <RenewablesUnWind /> */}

          <Footer />

        </EmailContainer>

      </div>
    );
  }
}

export default Announcement;
