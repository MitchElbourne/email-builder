import React, { Component } from 'react';

import {  EmailContainer,
          ImageBlock,
          TitleBlock,
          TextBlock,
          FocusLarge,
          Focus,
          CtaButton,
          CtaLarge,
          Padding,
          SponsorImageBlock,
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

        <EmailContainer>
          <SponsorImageBlock
            imgSrc="http://www.energeiaworks.com/email/img/logo-renewable-unwind%402x.png"
            imgAlt="Solar Wakeup Live Boston"
            paddingTop={24}
            paddingBottom={24}
            imgWidth="340"
          />

          <TitleBlock
            text="Sponsor Spotlight"
            fontSize={40}
            paddingTop={0}
            paddingBottom={24}
          />


          <TextBlock
            text="Renewables UnWind New York is fast approaching so please allow us to introduce our sponsor for the event."
            fontWeight="bold" />


          {/* <ImageBlock
            imgSrc="http://www.energeiaworks.com/email/2018-10/UnWindCalgary-Eventbrite-v3.jpg"
            imgAlt="Renewables UnWind Calgary"
            paddingTop={24}
            paddingBottom={24}
          /> */}


          <SponsorImageBlock
            imgSrc="https://renewablesunwind.com/wp-content/uploads/2018/07/sponsor-soltage.jpg"
            linkTo="https://www.soltage.com/"
            paddingTop="0"
            paddingBottom="0"
            imgWidth="225"
            border="1px solid #cccccc"
          />

          <TextBlock
            text={["Soltage develops, owns and operates solar assets using proven technology. Founded in 2006 and based in Jersey City, NJ, Soltage has over 300 MW of assets deployed across the US. Their development expertise and robust capital resources fully support best-in-class project development.", <br />, <br />, " Soltage pursues co-development and acquisition opportunities. A long track record of successful partnerships across the US combined with ​their comprehensive financing capabilities make Soltage a quality partner for developers, ​​EPCs, ​energy managers and other entities developing solar projects."]}
          />

          <CtaButton
          ctaLinkTo="https://www.soltage.com/"
          ctaColor="#005ebc"
          ctaWidth={300}
          ctaHeight={55}
          ctaText="Learn More about Soltage"
          />

          {/*<SponsorImageBlock
          imgSrc="http://www.energeiaworks.com/email/2018-10/sponsor-greengate.jpg"
          linkTo="https://greengatepower.com/"
          paddingTop="0"
          paddingBottom="0"
          imgWidth="225"
          />
          <TextBlock
          text="Our mission is simple, we want to forge a future powered by renewable and clean energy sources.  Our plan is simple, through the development and acquisition of renewable energy projects we will continue to grow as an independent renewable energy producer.  Our team is agile, we believe an agile, focused and determined team is the most effective way to achieve our mandate.  And our experience is deep. To date we have developed 450 MW or about one third of all wind energy produced in Alberta. This represents about $1 billion of investment and provides clean power for 200,000 homes." />

          <SponsorImageBlock
            imgSrc="http://www.energeiaworks.com/email/2018-10/sponsor-energeiaworks.jpg"
            linkTo="http://www.energeiaworks.com"
            paddingTop="0"
            paddingBottom="0"
            imgWidth="225"
          />
          <TextBlock
            text="EnergeiaWorks is a Leader is Sustainable Energy Recruitment. We recruit throughout North America, Asia, Europe, and Latin America, and work with the top players in this market and the most exciting start-ups. Over 100 clean energy companies trust EnergeiaWorks with their recruiting strategy and talent acquisition.  We’re proud members and sponsors of AWEA, ASES, CALSSA, Iron & Earth, The Solar Foundation, and WiRE." />*/}



          <Padding size={24} />

          <FocusLarge
            eventLocation={["The Chelsea Bell", <br key={this.getKey()}/>, "316 8th Ave", <br key={this.getKey()}/>, "New York, NY "]}
            eventDate={["Thursday, March 7, 2019", <br key={this.getKey()}/>, "6:00 PM – 8:00 PM EST"]}
            ctaText="RSVP Here"
            ctaLinkTo="https://www.eventbrite.com/e/renewables-unwind-nyc-tickets-54186524353?aff="
            ctaColor="#005ebc"

            color="#005ebc"
            ctaWidth={200}
            ctaHeight={55}
            readMoreText="Use password: RUW3"
            readMoreLinkTo="https://www.eventbrite.com/e/renewables-unwind-nyc-tickets-54186524353?aff="
          />

          <Padding
          size={20}
          />

          <FooterRUW />

        </EmailContainer>

      </div>
    );
  }
}

export default RenewablesSponsorship;
