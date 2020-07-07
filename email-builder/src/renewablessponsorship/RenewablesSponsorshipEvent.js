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

      <EmailContainer>

        <ImageBlock
          imgSrc="https://www.energeiaworks.com/email/2019-04/20190507-UnWind-Calgary-Email.jpg"
          imgAlt="Renewables UnWind Calgary Banner"
          paddingTop={24}
          paddingBottom={2}
        />

        {/*<TitleBlock
          text="Thanks for UnWinding throughout 2018!"
          fontSize={42}
          paddingTop={16}
          paddingBottom={16}
        />

        <TextBlock
          text="Whew, what a year it's been!  With gatherings in New York City, New Jersey, Anaheim, Calgary, San Diego, San Francisco, Chicago, Boston, Brooklyn, and more... it's been a pleasure to meet and UnWind with so many of you."
          fontSize={16}
          fontWeight={300}
        />

        <TextBlock
          text="Of course, we're not done yet!  Looking ahead, we have recently confirmed our full schedule for 2019 (listed below).  We're planning to return to most of our familiar regions, as well introduce Renewables UnWind to new locations in Phoenix, Houston and Salt Lake City."
          fontSize={16}
          fontWeight={300}
        />

        <TextBlock
          text={["To accomodate our increased activity next year, we're very pleased to welcome ", <strong>Tauny Ventura</strong>, " in joining the Renewables UnWind team!  Her experience has seen her run global events for Goldman Sachs and serve clients as a wedding planner.  We welcome her support for upcoming event logistics and handling sponsor inquiries.  Connect with her on ", <a href='mailto:tauny@renewablesunwind.com'>tauny@renewablesunwind.com</a>, "."]}
          fontSize={16}
          fontWeight={300}
        />


        <TitleBlock
          text="Mission Statement"
          fontSize={32}
          paddingTop={8}
          paddingBottom={8}
        />

        <TextBlock
          text="Renewables UnWind is a monthly networking event bringing together sustainability professionals to socialize and strategize. Most new power projects within the United States are developed with clean energy, yet public support of renewable resources remains stagnant. In a convivial, after-work setting, Renewables UnWind gathers the brightest cleantech professionals in cities across North America to talk about policy, partnerships, and progress towards a clean energy future. Join us and keep the conversation moving forward."
          fontSize={16}
        />

        <ImageBlock
          imgSrc="http://www.energeiaworks.com/email/2018-12/2018-collage-01.jpg"
          imgAlt="Collage of recent Renewables UnWind events"
          paddingTop={6}
          paddingBottom={6}
        />*/}


        <TitleBlock
          text="Sponsorship Opportunity"
          fontSize={42}
          paddingTop={8}
          paddingBottom={8}
        />


        <TextBlock
          text="Since starting out as a monthly New York City meetup three years ago, Renewables UnWind has hosted 20,000 professionals in sustainable energy in 20 cities around North America. Now firmly established, the Unwind has become the premier national networking to connect those working across the various sectors of the cleantech industry."
          fontSize={16}
          fontWeight={300}
        />

        <ImageBlock
        imgSrc="http://www.energeiaworks.com/email/2018-05/sponsors-collage-01.jpg"
        imgAlt="Collage of recent Renewables UnWind events"
        paddingTop={6}
        paddingBottom={6}
        />

        <TitleBlock
          text={"Sponsor our Calgary UnWind!"}
          fontSize={32}
          paddingTop={16}
          paddingBottom={8}
        />

        <TextBlock
          text={["Join our current sponsors Greengate Power, EnergeiaWorks, Wrise, Solar Drinks and Scott Land and Lease and help split the bill at this Calgary UnWind."]}
          fontSize={16}
        />
        <TextBlock
          text={["Your sponsorship supports costs for venue hire, food, drinks and marketing.  In return, we offer prominently branded promotional materials, extensive email and social media marketing, access to attendee contact details, as well as complimentary tickets for your company's guests."]}
          fontSize={16}
        />
        <TextBlock
          text={["Our reach currently extends beyond 105,000+ industry professionals. Strengthen your company's influence and grow your professional network by sponsoring or co-sponsoring a Renewables UnWind event."]}
          fontSize={16}
        />

        <CtaButton
          ctaLinkTo="mailto:unwind@energeiaworks.com"
          ctaText="Sponsor This UnWind"
          ctaWidth={280}
          ctaHeight={55}
          ctaColor="rgb(0, 84, 182)"
        />


        <TitleBlock
          text="Upcoming Events"
          fontSize={32}
          paddingTop={32}
          paddingBottom={8}
        />

        <TextBlock
          text="Can't make this event? Sponsorship opportunities are available for Renewables UnWind events throughout the summer of 2019:"
          fontSize={16}
        />

        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; April 17: Phoenix, AZ"
        />
        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; April 24: San Diego, CA"
        />
        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; April 30: Minneapolis, MN"
        />
        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; May 7: Calgary, AB"
        />
        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; May 9: New York, NY"
        />
        <TextBlock
          text={[<a href="https://renewablesunwind.com/calendar/" target="_blank">View full calendar here</a>]}
        />
        {/*<TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; May 21: Houston, TX"
        />
        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; Jun 6: Austin, TX"
        />
        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; Jun 10: Boston, MA"
        />
        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; Jun 12: New York, NY"
        />
        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; Jul 12: San Francisco, CA"
        />
        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; Aug 1: New York, NY"
        />
        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; Sept 12: New York, NY"
        />
        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; Sept 24: Salt Lake City, UT"
        />
        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; Oct 9: Calgary, AB"
        />
        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; Oct 17: New York, NY"
        />
        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; Nov 6: San Diego, CA"
        />
        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; Nov 14: New York, NY"
        />
        <TextBlock
          text="&nbsp; &nbsp; &bull; &nbsp; Dec 12: New York, NY"
        />*/}

        <CtaButton
          ctaLinkTo="mailto:unwind@energeiaworks.com"
          ctaText="Sponsor an Event"
          ctaWidth={230}
          ctaHeight={55}
          ctaColor="rgb(0, 84, 182)"
        />




        {/*<ImageBlock
          imgSrc="http://www.energeiaworks.com/email/2018-12/2018-collage-02.jpg"
          imgAlt="Collage of recent Renewables UnWind events"
          paddingTop={6}
          paddingBottom={6}
        />*/}


        <TitleBlock
          text="Previous Sponsors"
          fontSize={32}
          paddingTop={38}
          paddingBottom={8}
        />

        <ImageBlock
          imgSrc="http://www.energeiaworks.com/email/2018-09/Sponsors-Logos-6cols.jpg"
          imgAlt="Collage of recent Renewables UnWind events"
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
          text={["For details on Renewables UnWind sponsorship opportunities, benefits and packages, please drop an email to ", <a href="mailto:unwind@energeiaworks.com">unwind@energeiaworks.com</a>, " or check out the Event Overview PDF:"]}
          fontSize={16}
        />

        <CtaButton
          ctaLinkTo="http://www.energeiaworks.com/email/unwind/RenewablesUnWind-EventOverview.pdf"
          ctaText="UnWind Overview"
          ctaWidth={230}
          ctaHeight={55}
          ctaColor="#337ab7"
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
