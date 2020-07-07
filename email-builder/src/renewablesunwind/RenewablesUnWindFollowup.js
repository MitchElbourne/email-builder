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

import {SocialMedia} from './SocialMedia';

class RenewablesUnWindFollowup extends Component {
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

          <ImageBlock
            imgSrc="http://www.energeiaworks.com/email/2019-04/phoenix-header.jpg"
            imgAlt="Renewables UnWind header"
            paddingTop={8}
            paddingBottom={2}
          />

          {/* <TitleBlock
            text={["Thanks for UnWinding",<br />, "with us in Anaheim!"]}
            fontSize={42}
            paddingTop={8}
            paddingBottom={12}
          /> */}

          <Padding size={12} />

          <TitleBlock
            text={["Thanks for UnWinding with ", <br />, "us in Phoenix!"]}
            fontSize={42}
            paddingTop={0}
            paddingBottom={8}
          />


          <TextBlock
            text="The Renewables UnWind Phoenix event was a great success, and on behalf of our team we want to thank you for attending!"
            fontSize={18}
            fontWeight={300}
          />

          <TextBlock
            text="Renewables UnWind is a monthly networking event bringing together sustainability professionals to socialize and strategize. Most new power projects within the United States are developed with clean energy, yet public support of renewable resources remains stagnant."
            fontSize={18}
            fontWeight={300}
          />

          <ImageBlock
            imgSrc="https://www.energeiaworks.com/email/2019-04/20190423-phoenix-gallery.jpg"
            imgAlt="Renewables UnWind Collage"
            paddingTop={2}
            paddingBottom={16}
          />

          <CtaButton
            ctaLinkTo="https://renewablesunwind.com/event/renewables-unwind-phoenix/"
            ctaText="View full image gallery"
            ctaWidth={280}
            ctaHeight={55}
            ctaColor="rgb(0, 84, 182)"
          />

          <Padding size={20} />

          <TextBlock
            text="In a convivial, after-work setting, Renewables UnWind gathers the brightest cleantech professionals in cities across North America to talk about policy, partnerships, and progress towards a clean energy future. You are a key part in keeping the conversation moving forward."
            fontSize={18}
            fontWeight={300}
          />

          {/*<CtaButton
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
          />*/}

{/*
          <ImageBlock
            //imgSrc="http://www.energeiaworks.com/email/2018-01/RUW-email-header.jpg"
            imgSrc="http://www.energeiaworks.com/email/2018-09/20180924-UnWind-Anaheim-Thanks-Sponsors.jpg"
            imgAlt="Renewables UnWind header"
            paddingTop={8}
            paddingBottom={2}
          />
*/}
{/*
          <TextBlock
            text="A big thanks to our event sponsors, whose support made this event possible."
            fontSize={18}
            fontWeight={300}
          />
*/}

          <TextBlock
            text={["If you enjoyed the event, why not drop us some positive feedback on our social media channels?  Connect with us to and look out for our upcoming events.  Why not carry on the conversation by joining our exclusive ", <a href="https://www.linkedin.com/groups/8526429/">LinkedIn Group</a>,"?"]}
            fontSize={18}
            fontWeight={300}
          />

          <TitleBlock
            text="Upcoming Events"
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
            text="&nbsp; &nbsp; &bull; &nbsp; Apr 24: San Diego, CA"
          />
          <TextBlock
            fontSize={18}
            text="&nbsp; &nbsp; &bull; &nbsp; Apr 30: Minneapolis, MN"
          />
          <TextBlock
            fontSize={18}
            text="&nbsp; &nbsp; &bull; &nbsp; May 7: Calgary, AB"
          />
          <TextBlock
          fontSize={18}
          text="&nbsp; &nbsp; &bull; &nbsp; May 9: New York, NY"
          />
          <TextBlock
            fontSize={18}
            text="&nbsp; &nbsp; &bull; &nbsp; May 21: Houston, TX"
          />


          <TextBlock
            text="We look forward to seeing you again soon!"
            fontSize={18}
            fontWeight={300}
          />

          <Padding size={12} />


          <SocialMediaCTAs
            padding={8}
          />

          <FooterRUW />

        </EmailContainer>

      </div>
    );
  }
}

export default RenewablesUnWindFollowup;
