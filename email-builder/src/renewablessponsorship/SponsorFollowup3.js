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

class SponsorFollowup3 extends Component {
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
            imgSrc="http://www.energeiaworks.com/email/2018-10/Calgary-Thanks-Sponsors.jpg"
            imgAlt="Renewables UnWind sponsored by EnergeiaWorks"
            paddingTop={24}
            paddingBottom={2}
          />

          <Padding size={12} />

          <TextBlock
            text={["The ", <strong>Renewables UnWind Calgary</strong>, " event was a great success, and on behalf of our team and sponsors we want to thank you for attending!"]}
            fontSize={18}
            fontWeight={300}
          />

          <TextBlock
            text="Renewables UnWind is a monthly networking event bringing together sustainability professionals to socialize and strategize. Most new power projects within the North America are developed with clean energy, yet public support of renewable resources remains stagnant."
            fontSize={18}
            fontWeight={300}
          />

          <TextBlock
            text="In a convivial, after-work setting, Renewables UnWind gathers the brightest cleantech professionals in cities across North America to talk about policy, partnerships, and progress towards a clean energy future. Join us and keep the conversation moving forward."
            fontSize={18}
            fontWeight={300}
          />

          <Padding size={12} />

          <TitleBlock
            text="Backpack Raffle Winner"
            fontSize={28}
            paddingTop={16}
            paddingBottom={8}
          />

          <TextBlock
            text={["We want to extend our congratulations to ", <strong>Ashley Rieseberg</strong>, " of ", <strong>Environmental & Permitting Canada</strong>, ".  She's the lucky recipient of our exclusive BirkSun solar backpack."]}
            fontSize={18}
            fontWeight={300}
          />

          <ImageBlock
            imgSrc="http://www.energeiaworks.com/email/2018-10/201810-backpackwinner.jpg"
            imgAlt="Renewables UnWind sponsored by EnergeiaWorks"
            paddingTop={12}
            paddingBottom={2}
          />



          <Padding size={12} />

          <TitleBlock
            text="Event Photo Gallery"
            fontSize={28}
            paddingTop={16}
            paddingBottom={8}
          />

          <TextBlock
            text={["You can view our extended photo gallery from the Calgary event on the official Renewables UnWind website."]}
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

          <Padding size={12} />


          <TitleBlock
            text="Connect With Us"
            fontSize={28}
            paddingTop={16}
            paddingBottom={8}
          />




          <TextBlock
            text={["If you enjoyed the event, why not drop us some positive feedback on our social media channels?  Connect with us to and look out for our upcoming events.  Why not carry on the conversation by joining our exclusive ", <a href="https://www.linkedin.com/groups/8526429/">LinkedIn Group</a>,"?"]}
            fontSize={18}
            fontWeight={300}
          />

          <CtaButton
            ctaLinkTo="https://www.linkedin.com/company/renewables-unwind/"
            ctaText="LinkedIn"
            ctaWidth={280}
            ctaHeight={42}
            ctaColor="#337ab7"
          />

          <Padding size={8} />

          <CtaButton
            ctaLinkTo="https://www.facebook.com/energeiaworks/"
            ctaText="Facebook"
            ctaWidth={280}
            ctaHeight={42}
            ctaColor="#337ab7"
          />

          <Padding size={8} />

          <CtaButton
            ctaLinkTo="https://www.instagram.com/renewables_unwind/"
            ctaText="Instagram"
            ctaWidth={280}
            ctaHeight={42}
            ctaColor="#337ab7"
          />

          <Padding size={8} />

          <CtaButton
            ctaLinkTo="https://twitter.com/RenewUnWind"
            ctaText="Twitter"
            ctaWidth={280}
            ctaHeight={42}
            ctaColor="#337ab7"
          />



































          <Padding size={18} />

          <TitleBlock
            text="Upcoming Sponsorship Opportunities"
            fontSize={28}
            paddingTop={16}
            paddingBottom={8}
          />

          <TextBlock
            text="We have a number of upcoming opportunities that are available for exclusive or shared sponsorship.  Does your company want to sponsor a Renewables UnWind event?"
            fontSize={18}
            fontWeight={300}
          />

          <TextBlock
            text={["Contact us to start the conversation at ", <strong><a href="mailto:unwind@energeiaworks.com">unwind@energeiaworks.com</a></strong>, "."]}
            fontSize={18}
            fontWeight={300}
          />



          <TitleBlock
            text="Upcoming Events"
            fontSize={28}
            paddingTop={16}
            paddingBottom={8}
          />

          <Padding size={8} />

          <TextBlock
            fontSize={18}
            text="&nbsp; &nbsp; &bull; November 6: Jersey City, NJ"
          />
          <TextBlock
            fontSize={18}
            text="&nbsp; &nbsp; &bull; December 13: Brooklyn, NY"
          />

          <ImageBlock
            imgSrc="http://www.energeiaworks.com/email/unwind/ruw-sponsorship-collage-02.jpg"
            imgAlt="Collage of recent Renewables UnWind events"
            width={220}
            paddingTop={12}
            paddingBottom={6}
          />

          <Padding size={36} />

          <FooterRUW />

        </EmailContainer>

      </div>
    );
  }
}

export default SponsorFollowup3;
