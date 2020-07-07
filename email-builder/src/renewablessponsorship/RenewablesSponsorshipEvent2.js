import React, { Component } from 'react';

import {  EmailContainer,
          ImageBlock,
          TitleBlock,
          TextBlock,
          Focus,
          FocusLarge,
          CtaButton,
          Padding,
          FooterRUW } from '../globals';


class RenewablesSponsorship extends Component {
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

        <EmailContainer >

          <ImageBlock
            imgSrc="http://www.energeiaworks.com/email/unwind/ruw-banner-sponsorship.jpg"
            imgAlt="Renewables UnWind sponsored by EnergeiaWorks"
            paddingTop={24}
            paddingBottom={2}
          />

          <TitleBlock
            text="San Diego Sponsorship Opportunity"
            fontSize={48}
            paddingTop={16}
            paddingBottom={8}
          />

          <Padding size={12} />

          <TextBlock
            text="Over the last tnree years, Renewables UnWind has hosted 20,000 professionals in sustainable energy in 20 cities around North America.  It has established itself as the premier national networking event to connect those working across the various sectors of sustainable energy and the cleantech industry."
            fontSize={18}
            fontWeight={300}
          />

          <TextBlock
            text="Since our inception as a monthly New York City meetup three years ago, we have quickly extended our reach across North America, which has led to partnering with the largest trade shows and renewable energy focused conferences."
            fontSize={16}
          />

          <ImageBlock
            imgSrc="http://www.energeiaworks.com/email/2018-05/sponsors-collage-01.jpg"
            imgAlt="Collage of recent Renewables UnWind events"
            paddingTop={16}
            paddingBottom={6}
          />

          <TitleBlock
            text="Wednesday, August 15, 2018"
            fontSize={24}
            paddingTop={24}
            paddingBottom={4}
          />

          <TitleBlock
            text="Knotty Barrel, San Diego"
            fontSize={32}
            paddingTop={2}
            paddingBottom={22}
          />

          <TextBlock
            text={["Renewables UnWind is returning to San Diego on ", <strong>August 15, 2018</strong>, " and we're looking for sponsors to partner with us for the event."]}
            fontSize={16}
          />

          <TextBlock
            text="We offer prominently branded promotion materials, extensive email and social media marketing, a profile on our official website, access to attendee contact details, as well as complimentary tickets for your company's guests."
            fontSize={16}
          />

          <TextBlock
            text="Our reach currently extends beyond 105,000+ industry professionals. Increase your company's influence, outreach and professional network by sponsoring or co-sponsoring a Renewables UnWind event.  Drop us an email and we'll send you more information:"
            fontSize={16}
          />

          <CtaButton
            ctaLinkTo="mailto:unwind@energeiaworks.com"
            ctaText="Sponsor Event"
            ctaWidth={230}
            ctaHeight={55}
            ctaColor="rgb(0, 84, 182)"
          />

          <TitleBlock
            text="Previous Sponsors"
            fontSize={32}
            paddingTop={32}
            paddingBottom={0}
          />

          <ImageBlock
            imgSrc="http://www.energeiaworks.com/email/unwind/Sponsors-Logos-6cols.jpg"
            imgAlt="Collage of recent Renewables UnWind sponsors"
            paddingTop={16}
            paddingBottom={6}
          />

          <TitleBlock
            text="More Information"
            fontSize={32}
            paddingTop={32}
            paddingBottom={8}
          />

          <TextBlock
            text={["For a complete overview of Renewables UnWind sponsorship opportunities, benefits and packages, please drop an email to ", <a href="mailto:unwind@energeiaworks.com">unwind@energeiaworks.com</a>, ", or review our ",<a href='http://www.energeiaworks.com/email/unwind/RenewablesUnWind-OrganisationOverview-v1.2.pdf'>Event Overview</a>, " presentation."]}
            fontSize={16}
          />

          <TitleBlock
            text="Join Us"
            fontSize={32}
            paddingTop={2}
            paddingBottom={8}
          />

          <TextBlock
            text="If you can't sponsor our event this time, then feel free to join us at the event.  We'll be hosting San Diego's top renewable energy professionals in a casual and friendly environment from 6:00pm - 8:00pm."
            fontSize={16}
          />

          <CtaButton
            ctaLinkTo="https://www.eventbrite.com/e/renewables-unwind-san-diego-tickets-48219162814"
            ctaText="RSVP Here"
            ctaWidth={230}
            ctaHeight={55}
            ctaColor="rgb(0, 84, 182)"
          />

          <ImageBlock
            imgSrc="http://www.energeiaworks.com/email/unwind/ruw-sponsorship-collage-02.jpg"
            imgAlt="Collage of recent Renewables UnWind events"
            width={220}
            paddingTop={36}
            paddingBottom={6}
          />


          <Padding size={24} />

          <FooterRUW />

        </EmailContainer>

      </div>
    );
  }
}

export default RenewablesSponsorship;
