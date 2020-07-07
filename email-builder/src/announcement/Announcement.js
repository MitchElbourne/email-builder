import React, { Component } from 'react';

import { EmailContainer, GlobalHeader, Focus, CtaLarge, FocusLarge, ImageBlock, AboutEnergeiaWorks, ShoutOut, Footer, Padding, TextBlock, SponsorImageBlock } from '../globals';
import { AnnouncementHeader, AnnouncementBackpack } from '.';
import { RenewablesUnWind } from '../newsletter';

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
            imgAlt="EnergeiaWorks ESA"
          />

          <AnnouncementHeader
            imgSrc="http://www.energeiaworks.com/email/img/illus-top-solar-panel@2x.png"
            title={["EnergeiaWorks at MWSE 2019: ", <br></br>, "Solar Business and Networking Event"]}
            imgWidth={"144px"}
            imgAlt="Header graphic"
            color="#005ebc"
            backgroundColor="#D6ECFF"
            fontSize={38}
          />

          {/*<ShoutOut
            text={["We’re sponsoring the Renewables Unwind after conference event at ESA Energy Storage"]}
            fontSize={36}
          />*/}

          {<TextBlock
            text={["EnergeiaWorks will be in attendance at MWSE 2019! Our CEO William Liuzza will be attending the two day event, and available to discuss hiring talent within the solar sector."]}
            fontSize={16}
            fontWeight={300}
          />}

          {<TextBlock
            text={["EnergeiaWorks has built relationships with some of the largest component manufacturers, construction companies, electric utilities, engineering firms, project financiers, forecasters, O&M providers, resource assessment firms, and developers in the industry. Meet us at IPF: 2019 and learn why!"]}
            fontSize={16}
            fontWeight={300}
          />}
          <Padding size={20} />


          {/*<TextBlock
            text={["Don't miss this opportunity to convene with our team during and after the east coast's largest solar business conference."]}
            fontSize={16}
            fontWeight={300}
          />*/}


          {/*<ShoutOut
            text={["Special offer for friends of", <br />, "EnergeiaWorks"]}
            fontSize={32}
          />

          <TextBlock
            text={["Use the link below and apply the code ", <strong>P1519EW</strong>, " for ", <strong>15% off</strong>, " of full conference passes to this event.  Use the link below and then apply the code at checkout for your discount."]}
            fontSize={16}
            fontWeight={300}
          />*/}






          <Focus
            imgSrc="http://www.energeiaworks.com/email/2019-04/sponsor-midwest-solar-expo.jpg"
            imgAlt="MWSE Event logo"
            imgWidth={410}
            eventLocation={["Radisson Blu Minneapolis Downtown", <br />, "Minneapolis, MN"]}
            eventDate="May 1 - 2, 2019"
            ctaText="Register At the Event Site"
            ctaLinkTo="https://www.midwestsolarexpo.com/page/1382183/registration"
            ctaColor="#005ebc"
            ctaWidth={300}
            ctaHeight={55}
            readMoreText="More information on the conference"
            readMoreLinkTo="https://www.midwestsolarexpo.com/home"
          />


          <CtaLarge
            imgSrc="http://www.energeiaworks.com/email/img/icon-search@2x.png"
            imgAlt="Maginifying glass icon"
            leadText={["Are you hiring solar talent?"]}
            subText={["Schedule a meeting with our",<br />, "CEO William Liuzza"]}
            ctaText="Email William Now"
            ctaLinkTo="mailto:wl@energeiaworks.com"
          />

          <CtaLarge
            imgSrc="http://www.energeiaworks.com/email/img/icon-briefcase@2x.png"
            imgAlt="Briefcase icon"
            leadText="Are you seeking a change in your solar career?"
            subText="Meet with our specialist solar recruiters."
            ctaText="Schedule a meeting"
            ctaLinkTo="mailto:am@energeiaworks.com"

          />

          {/*<AnnouncementBackpack />*/}

          <AboutEnergeiaWorks/>


          <Padding size={24} />
{/*
          <img src="http://www.energeiaworks.com/email/img/logo-renewable-unwind%402x.png" alt="UnWind header" width={310} border="0" style={{display: 'block', width: 310, maxWidth: '100%'}} />

          <Padding size={24} />

          <TextBlock
            text="EnergeiaWorks invites you to network with your sustainable energy colleagues at our exclusive event in Boston. Come have a drink and network in a casual atmosphere with some of the top professionals in the renewable industry."
            fontSize={16}
            fontWeight={300}
          />

          <TextBlock
            text="Renewables UnWind is a monthly networking event bringing together sustainability professionals to socialize and strategize. Most new power projects within the United States are developed with clean energy, yet public support of renewable resources remains stagnant. In a convivial, after-work setting, Renewables UnWind gathers the brightest cleantech professionals in cities across North America to talk about policy, partnerships, and progress towards a clean energy future. Join us and keep the conversation moving forward."
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
          />


*/}

          {/*<RenewablesUnWind
            imgSrc="http://www.energeiaworks.com/email/2017-10/img/logo-renewable-un-wind@2x.png"
            linkTo="http://www.energeiaworks.com"
            imgWidth={288}
            imgAlt="RenewablesUnWind logo"
            text={["Interested in discussing Renewables UnWind networking event series? Meet Event Manager ", <a href="mailto:tauny@renewablesunwind.com">Tauny Ventura</a>," at The Whining Pig Downtown. We've finalised our full nationwide schedule for 2019, and are happy to discuss sponsorship opportunities.",<br/>, <br/>, "Renewables UnWind is a national networking event initiated by EnergeiaWorks to connect those working across the various sectors of sustainable energy and the clean-tech industry. Our monthly event is hosted in New York City, with our next event taking place on April 17th. Renewables UnWind will also be announcing events throughout the year at various conferences and trade shows.", <br />, <br />, "Follow our ", <a target="_blank" href="https://www.facebook.com/energeiaworks/">Facebook</a>, " and ", <a target="_blank" href="https://www.instagram.com/explore/tags/energeiaworks/">Instagram</a>, " pages to RSVP and for additional information about upcoming events."]}
            ctaLinkTo="https://www.renewablesunwind.com/"
            ctaText="View upcoming events"
            ctaWidth={280}
            ctaHeight={66}
            ctaColor="#005ebc"
          />*/}


          <Padding size={12} />



          <Footer />

        </EmailContainer>

      </div>
    );
  }
}

export default Announcement;
