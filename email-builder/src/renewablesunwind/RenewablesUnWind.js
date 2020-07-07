import React, { Component } from 'react';

import {  EmailContainer,
          ImageBlock,
          TitleBlock,
          TextBlock,
          FocusLarge,
          CtaButton,
          Padding,
          FooterRUW,
          SocialMediaCTAs
          } from '../globals';

import {
  RecentEvent, RecentEvents
} from '../newsletter';


class RenewablesUnWind extends Component {
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
            imgSrc="https://www.energeiaworks.com/email/2019-04/20190424-UnWind-SanDiego-Email.jpg"
            imgAlt="Renewables UnWind San Diego Banner"
            paddingTop={24}
            paddingBottom={2}
          />

          <TitleBlock
            text={["Renewables UnWind San Diego"]}
            fontSize={36}
            paddingTop={16}
            paddingBottom={16}
          />

          <TextBlock
            text={["On April 24, Renewables UnWind returns to California. You’re invited to network with your sustainable energy colleagues at our exclusive event in San Diego."]}
            fontSize={18}
            fontWeight={600}
          />
          <TextBlock
            text={["There are still tickets available for our San Diego UnWind, so come have a drink and network in a casual atmosphere with some of the industry’s top professionals in clean energy."]}
            fontSize={18}
            fontWeight={100}
          />

          <FocusLarge
            eventLocation={["Striders", <br key={this.getKey()}/>, "100 J Street",<br key={this.getKey()}/>,"San Diego, CA"]}
            eventDate={["Wednesday, April 24, 2019", <br key={this.getKey()}/>, "6:00 PM – 8:00 PM PDT"]}
            ctaText="RSVP Here"
            ctaLinkTo="https://www.eventbrite.com/e/renewables-unwind-san-diego-tickets-59102181215?aff=webew"
            ctaColor="#005ebc"
            ctaWidth={250}
            ctaHeight={55}
            readMoreText="Reserve your place now with the code SD04"
            readMoreLinkTo="https://www.eventbrite.com/e/renewables-unwind-san-diego-tickets-59102181215?aff=webew"
          />




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
          />

          <Padding size={24} /> */}
          {/*<RecentEvents>

          <TextBlock
            text="In case you missed our January UnWind in NYC, check out our "
            linkText="event gallery"
            link="https://renewablesunwind.com/gallery/"
            fontSize={16}
          />

            <RecentEvent
              imgSrc="https://renewablesunwind.com/wp-content/uploads/2018/11/IMG_9689.jpg"
              imgAlt="Image from our events during the past month"
              eventCat=" |  UNWIND"
              eventDate="February 12"
              eventTitle={["Renewables UnWind", <br />, "New York"]}
            />
            <RecentEvent
              imgSrc="https://renewablesunwind.com/wp-content/uploads/2018/11/IMG_9696.jpg"
              imgAlt="Image from our events during the past month"
              eventBlurb="We hosted a NYC Renewables UnWind event at the Stitch Bar & Lounge in New York."
            />

          </RecentEvents>*/}

          {/*<TitleBlock
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
          />*/}
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

export default RenewablesUnWind;
