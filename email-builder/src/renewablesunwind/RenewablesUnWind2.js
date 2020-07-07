import React, { Component } from 'react';

import {  EmailContainer,
          ImageBlock,
          TitleBlock,
          TextBlock,
          FocusLarge,
          CtaButton,
          Padding,
          FooterRUW,
          SocialMediaCTAs } from '../globals';

import {RecentEvent, RecentEvents} from '../newsletter'


class RenewablesUnWind2 extends Component {
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
            imgSrc="http://www.energeiaworks.com/email/2019-02/20190204-UnWind-Calgary-v2-Email.jpg"
            imgAlt="MidWest Solar Expo Banner"
            paddingTop={24}
            paddingBottom={0}
          />

          <TitleBlock
            text={["Renewables UnWind is back",<br key={this.getKey()}/>,"in Phoenix this April!"]}
            fontSize={32}
            paddingTop={0}
            paddingBottom={12}
          />


      {/*}    <TextBlock
            text="Come and join your friends and QuickMount PV, Antenna, and EnergeiaWorks, for Renewables UnWind Jersey City.  We invite you to network with your sustainable energy colleagues at our exclusive event in New Jersey.  Come and have a drink in a casual environment with your industry peers."
            fontSize={18}
            fontWeight={600}
          />*/}

          <TextBlock
            text={["On April 17, join RenewablesUnwind and Antenna at this exclusive renewable energy networking event in Arizona."]}
            fontSize={18}
            fontWeight={600}
          />
          <TextBlock
            text={["Sign up for the event below to come have a drink and network in a casual atmosphere with some of the industry’s top professionals in clean energy."]}
            fontSize={18}
            fontWeight={300}
          />

          {/*<TextBlock
            text={["Did you reserve a spot but now can't make it?  No worries, we understand!  Kindly ", <a href="https://www.eventbrite.com/e/renewables-unwind-calgary-tickets-46762790766">release your reservation</a>," so we can invite another guest from our reserve list."]}
            fontSize={18}
          />*/}

          <FocusLarge
            eventLocation={["The Whining Pig Downtown", <br key={this.getKey()}/>, "201 E Washington Street",<br key={this.getKey()}/>,"Phoenix, AZ"]}
            eventDate={["Wednesday 17 April", <br key={this.getKey()}/>, "6:00 PM – 8:00 PM MST"]}
            ctaText="RSVP Here"
            ctaLinkTo="https://www.eventbrite.com/e/renewables-unwind-phoenix-tickets-59102913405"
            ctaColor="#005ebc"
            ctaWidth={200}
            ctaHeight={55}
            readMoreLinkTo="https://www.eventbrite.com/e/renewables-unwind-phoenix-tickets-59102913405"
            readMoreText="RSVP now on EventBrite with the code PH04"
          />

          <Padding size={8} />



          {/* <TitleBlock
            text="Sponsor Spotlight:"
            fontSize={24}
            paddingTop={18}
            paddingBottom={0}
          />

          <ImageBlock
            imgSrc="http://www.energeiaworks.com/email/2018-05/sive-paget-riesel-pc.jpg"
            imgAlt="Sive, Paget & Riesel logo"
            paddingTop={16}
            paddingBottom={22}
          />

          <TextBlock
            text="Sive, Paget & Riesel P.C. has been the preeminent environmental law and land use boutique since its founding over fifty years ago. Consistent with its commitment to environmental protection, the firm has expanded into renewable energy and project finance to better support its national and regional client base. SPR also has been closely involved with the planning for off-shore wind energy development along the East Coast of the United States."
            fontSize={16}
          /> */}

          {/* <TextBlock
            text={["As a result, the firm is particularly qualified to help sponsors of renewable energy projects navigate the myriad permitting and environmental issues associated with siting and developing solar, wind, and other renewable energy projects. Feel free to reach out to Jeff Gracer (", <a href='mailto:jgracer@sprlaw.com'>jgracer@sprlaw.com</a>, "), Dan Chorost ", <a href='mailto:dchorost@sprlaw.com'>dchorost@sprlaw.com</a>, ") or Alex Leff (", <a href='mailto:aleff@sprlaw.com'>aleff@sprlaw.com</a>, ") with any questions about SPR’s Renewable Energy practices."]}
            fontSize={16}
          />

          <CtaButton
            ctaLinkTo="http://www.sprlaw.com"
            ctaText="More Information"
            ctaWidth={230}
            ctaHeight={52}
            ctaColor="#005ebc"
          />*/}

          {/*<RecentEvents>

          <TextBlock
            text="In case you missed our October UnWind in Calgary, check out our "
            linkText="event gallery"
            link="https://renewablesunwind.com/gallery/"
            fontSize={16}
          />

            <RecentEvent
              imgSrc="http://www.energeiaworks.com/email/2019-01/calgary-event-img-1.jpg"
              imgAlt="Image from our events during the past month"
              eventCat=" |  UNWIND"
              eventDate="October 24"
              eventTitle={["Renewables UnWind", <br />, "Calgary"]}
            />
            <RecentEvent
              imgSrc="http://www.energeiaworks.com/email/2019-01/calgary-event-img-2.jpg"
              imgAlt="Image from our events during the past month"
              eventBlurb="Our last Calgary Unwind was hosted at the Cowboy's Dance Hall venue in Alberta."
            />

          </RecentEvents>*/}

          <TitleBlock
            text="Follow us on Social Media"
            fontSize={24}
            paddingTop={18}
            paddingBottom={16}
          />


          <SocialMediaCTAs
          padding="6px"

          />

          <TitleBlock
            text="Sponsorship Opportunities"
            fontSize={24}
            paddingTop={18}
            paddingBottom={16}
          />

          <TextBlock
            text="We've confirmed our event schedule for 2019. Renewables UnWind is open to partial and exclusive sponsorship at all our events around North America. Contact us today to learn about upcoming opportunities in your local region."
            fontSize={16}
          />

          <CtaButton
            ctaLinkTo="mailto:unwind@energeiaworks.com"
            ctaText="Request More Information"
            ctaWidth={290}
            ctaHeight={52}
            ctaColor="#005ebc"
          />



          <Padding size={36} />

          <FooterRUW />

        </EmailContainer>

      </div>
    );
  }
}

export default RenewablesUnWind2;
