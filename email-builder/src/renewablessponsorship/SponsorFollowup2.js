import React, { Component } from 'react';

import {  EmailContainer,
          ImageBlock,
          TitleBlock,
          TextBlock,
          FocusLarge,
          CtaButton,
          Padding,
          SponsorImageBlock,
          FooterRUW } from '../globals';


class SponsorFollowup2 extends Component {
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
            imgSrc="http://www.energeiaworks.com/email/2018-10/UnWindingThanks.jpg"
            imgAlt="Renewables UnWind sponsored by EnergeiaWorks"
            paddingTop={24}
            paddingBottom={2}
          />

          <TitleBlock
            text={["Many thanks for sponsoring", <br />, "Renewables UnWind Calgary"]}
            fontSize={32}
            paddingTop={16}
            paddingBottom={8}
          />


          <Padding size={12} />

          <TextBlock
            text={["The ", <strong>Renewables UnWind Calgary</strong>, " event was a great success, and we at EnergeiaWorks want to send a sincere thanks your way!"]}
            fontSize={18}
            fontWeight={300}
          />

          <TextBlock
            text="Your sponsorship and attendance supports our mission to deliver the premier renewable energy networking events across North America."
            fontSize={18}
            fontWeight={300}
          />

          <Padding size={12} />

          <TitleBlock
            text="Attendees List"
            fontSize={28}
            paddingTop={16}
            paddingBottom={8}
          />

          <TextBlock
            text={["The complete list of guests attending the UnWind is attached for reference as ", <strong>AttendeesList.xlsx</strong>, "."]}
            fontSize={18}
            fontWeight={300}
          />



          <Padding size={12} />

          <TitleBlock
            text="Event Photos"
            fontSize={28}
            paddingTop={16}
            paddingBottom={8}
          />

          <TextBlock
            text={["Selected images from the event have been formatted for social media and are available for download. Feel free to share across social media using the hashtag ", <strong>#renewablesunwind</strong>]}
            fontSize={18}
            fontWeight={300}
          />

          <CtaButton
            ctaLinkTo="http://www.energeiaworks.com/email/2018-10/Calgary-Socials.zip"
            ctaText="Download Images"
            ctaWidth={280}
            ctaHeight={55}
            ctaColor="rgb(0, 84, 182)"
          />

          <Padding size={12} />

          <TextBlock
            text={["You can also view our extended photo gallery on the official Renewables UnWind website."]}
            fontSize={18}
            fontWeight={300}
          />

          <CtaButton
            ctaLinkTo="https://renewablesunwind.com/event/renewables-unwind-calgary-2/"
            ctaText="View Full Gallery"
            ctaWidth={280}
            ctaHeight={55}
            ctaColor="rgb(0, 84, 182)"
          />





          <Padding size={18} />

          <TitleBlock
            text="Upcoming Sponsorship Opportunities"
            fontSize={28}
            paddingTop={16}
            paddingBottom={8}
          />

          <TextBlock
            text={["We have a upcoming opportunities that are available for exclusive or shared sponsorship:"]}
            fontSize={18}
            fontWeight={300}
          />

          <TextBlock
            fontSize={18}
            text="&nbsp; &nbsp; &bull; &nbsp; November 6: Jersey City, NJ"
          />
          <TextBlock
            fontSize={18}
            text="&nbsp; &nbsp; &bull; &nbsp; December 13: Brooklyn, NY"
          />

          <TextBlock
            text={["If you sign up for your next Renewables UnWind sponsorship within 30 days of this email, you'll receive ", <strong>10% discount</strong>, " on co-sponsorship or ", <strong>15% discount</strong>, " on exclusive sponsorship."]}
            fontSize={18}
            fontWeight={300}
          />










          <TextBlock
            text={["Contact us with any questions at ", <strong><a href="mailto:unwind@energeiaworks.com">unwind@energeiaworks.com</a></strong>, "."]}
            fontSize={18}
            fontWeight={300}
          />

          <Padding size={24} />

          <TextBlock
            text={["We look forward to collaborating again soon!"]}
            fontSize={18}
            fontWeight={300}
          />






          <Padding size={36} />

          <FooterRUW />

        </EmailContainer>

      </div>
    );
  }
}

export default SponsorFollowup2;
