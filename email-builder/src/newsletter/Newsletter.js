import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { EmailContainer, GlobalHeader, Footer, SectionText } from '../globals';

import {  NewsletterHeader,
          Introduction,
          RecruitersOutlook,
          RecentEvents, RecentEvent,
          UpcomingEvents, UpcomingEvent, UpcomingEventUnWind,
          HotJobs, HotJob,
          RenewablesUnWind, FeaturedPlacement } from '.';

import { TitleBlock, TextBlock, ImageBlock, CtaButton, Padding, SectionHeader } from '../globals';

const currentMonth = "February";

class Newsletter extends Component {
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
      <div className="newsletter">

        <EmailContainer>

          <GlobalHeader
            imgSrc="http://www.energeiaworks.com/email/2017-10/img/logo-energeiaworks@2x.png"
            linkTo="http://www.energeiaworks.com"
            imgWidth={323}
            imgAlt="EnergeiaWorks logo"
          />

          <RecruitersOutlook
          imgSrc="http://www.energeiaworks.com/email/unwind/recruiter-outlook-standard.jpg"
          imgAlt="Recruiter's Outlook showcase graphic">

          <SectionText
          text={["For our regular readers, I do apologize for not putting together a March newsletter.  In a short four-month window, we're taking part in 15 events, so I simply ran out of time! "]}
          />

          <SectionText
          text={["In February, I reported that EnergeiaWorks broke a quarterly revenue record for Q1.  That trend is continuing into the second quarter and we're treading water just to keep up with demand.  All of the verticals we support (solar PV, onshore wind, offshore wind, energy storage, electric vehicles, and energy efficiency) are predicting year-to-year growth for jobs creation. 2019 is poised to be an aggressive year in the US clean energy market.  Employment records will be broken!  EnergeiaWorks is here to help you with talent acquisition in R&D, manufacturing, development, engineering, construction, and O&M."]}
          />

          <SectionText
          text={["Based on this demand, we've made a few internal changes that I'm happy to announce. ",<strong>We're officially launching EW Construction!</strong>, " You're hearing here first as a formal press release will follow.  EW Construction by EnergeiaWorks will be led by our Senior Recruiter, Danny Cueto.  Danny has been with EnergeiaWorks for six years and has  excelled at developing relationships and understanding the needs within construction talent.  This division will support both full-time, project-based, temporary, and contractual labor on construction sites in wind and solar throughout North America. We work with the top wind and solar construction and O&M talent and highly leverage our proprietary database of 110,000 renewable energy professionals.  Are you hiring in construction or O&M?  ", <a href="mailto:dc@energeiaworks.com">Reach out to Danny today</a>, "."]}
          />
          
          <SectionText
          text={[<strong>EnergeiaWorks is also pleased to announce its recent hire of Evan Lanoil! </strong>, "Based in EnergeiaWorks’ headquarters in Jersey City, Evan will develop and manage Eastern US Coast-based solar business.  Evan comes to EnergeiaWorks with three years of experience in talent acquisition in the niche recruiter-to-recruiter industry. His passion for recruiting is fueled by his dedication and ability to cultivate relationships. He graduated from the University of Colorado with a degree in History and holds a Masters Degree in Middle Eastern Studies from Tel Aviv University (Israel). Are you going to Midwest Solar Expo? ", <a href="mailto:el@energeiaworks.com">Schedule a meeting with Evan</a>, "."]}
          />
          
          <SectionText
          text={[<strong>Do you have the right talent on your team to meet demand?</strong>, " If your company needs assistance with hiring strategy, please reach out to us to schedule a virtual meeting, or see more details below on where to meet us around North America."]}
          />
          
          <SectionText
          text={[<strong>Where can you find EnergeiaWorks? </strong> , "Meet us at our Renewables UnWind networking event series. Upcoming UnWind events are being held Minneapolis, Houston, New York and Calgary. Reserve your free ticket through ", <a href="https://renewablesunwind.com/calendar" target="_blank">renewablesunwind.com</a>, ". You can also find news on our upcoming events, and photo galleries of our previous events."]}
          />
          
          <SectionText
          text={["In May, meet us in Minneapolis at the Midwest Solar Expo, in Calgary for Solar Canada, and in Houston for WindPower. We’ve partnered with Midwest Solar Expo so use MWSE-EW15 to register and save 15% off full conference ticket.  I hope to see many of you at some of these events."]}
          />

          </RecruitersOutlook>

          <RenewablesUnWind
            imgSrc="http://www.energeiaworks.com/email/2017-10/img/logo-renewable-un-wind@2x.png"
            linkTo="http://www.energeiaworks.com"
            imgWidth={288}
            imgAlt="RenewablesUnWind logo"
            text={["Renewables UnWind is a national networking event initiated by EnergeiaWorks to connect those working across the various sectors of sustainable energy and the clean-tech industry. Our monthly event is hosted in New York City, with our next event taking place on May 9. Renewables UnWind will also be announcing events throughout the year at various conferences and trade shows.", ]}
            socialText={["Follow our ", <a target="_blank" href="https://www.facebook.com/energeiaworks/">Facebook</a>, " and ", <a target="_blank" href="https://www.instagram.com/explore/tags/energeiaworks/">Instagram</a>, " pages to RSVP and for additional information about upcoming events."]}
            sponsorText={["Sponsorship opportunities are available for upcoming Renewables UnWind events. ", <a target="_blank" href="mailto:info@energeiaworks.com">Contact us</a>, " to discuss directly with a member of our team." ]}
            ctaLinkTo="https://www.renewablesunwind.com/calendar"
            ctaText="View our Calendar for 2019"
            ctaWidth={300}
            ctaHeight={66}
            ctaColor="#005ebc"
          />

          {/*<NewsletterHeader
            imgSrc="http://www.energeiaworks.com/email/img/illus-transbg-solar-panel@2x.png"
            imgWidth={150}
            imgAlt="Header graphic"
            backgroundColor="#005ebc"
            //backgroundColor="#D7ECFF"
            title="EnergeiaWorks News"
            color="#ffffff"
            //color="#005ebc"
            fontSize={36}
            subTitle={currentMonth + " 2019"}
            subColor="#6ca1d7"
            //subColor="#4a4a4a"
            subFontSize={24}
          />

          <TitleBlock
            text="A global leader in sustainable energy recruitment"
            fontSize={36}
            paddingTop={12}
            paddingBottom={16}
          />

          <TextBlock
            text="We recruit throughout North America, Asia, Europe, and Latin America, and work with the top players and most exciting start-ups in this market. Over 100 clean energy companies trust EnergeiaWorks with their recruiting strategy and talent acquisition."
          />

          <TextBlock
            text="Featured in Renewable Energy World, Solar Today, Alternate Energy, Wind Systems, PV Magazine, Solar Power World, and Politico, EnergeiaWorks is North America's foremost executive search firm dedicated to the renewable energy industry."
          />

          <TextBlock
            text="EnergeiaWorks is a recognized thought leader in hiring trends, and our team has presented at Solar Power International, Solar Business Festival, Wall Street Green Summit, Midwest Solar Expo, New York Energy Week, Columbia University School of International and Public Affairs, Young Professionals of Energy, CanWEA Operations & Maintenance, Iron & Earth, Canadian German Wind & Solar Conference, Global Petroleum Show, SEEDS Symposium, and the Australian Solar Counsil."
          />

          <CtaButton
            ctaLinkTo="http://www.energeiaworks.com"
            ctaText="Learn More"
            ctaWidth={200}
            ctaHeight={55}
            ctaColor="#005EBC"
          />*/}


















          <RecentEvents>


          <RecentEvent
              imgSrc="https://www.energeiaworks.com/email/2019-04/20190315-phoenix-group.jpg"
              imgAlt="Image from our events during the past month"
              eventCat=" |  UNWIND"
              eventDate="April 17"
              eventTitle={["Renewables UnWind", <br />, "Phoenix"]}
              // eventBlurb="Make sure to have a look at the full event photography on our website."
            />

            <RecentEvent
              imgSrc="https://www.energeiaworks.com/email/2019-04/20190315-phoenix-crowdshot.jpg"
              imgAlt="Image from our events during the past month"
              eventBlurb="Thanks to everyone for joining us for another great event and evening."
            />

            
            <RecentEvent
              imgSrc="https://www.energeiaworks.com/email/2019-04/2019034-new-york-groupshot.jpg"
              imgAlt="Image from our events during the past month"
              eventCat=" |  UNWIND"
              eventDate="April 4"
              eventTitle={["Renewables UnWind", <br />, "New York"]}
            />

            <RecentEvent
              imgSrc="https://www.energeiaworks.com/email/2019-04/20190304-neyyork-colleagues.jpg"
              imgAlt="Image from our events during the past month"
              eventBlurb="Make sure to have a look at the full event photography on our website."
            />


          
            <RecentEvent
              imgSrc="http://www.energeiaworks.com/email/2019-04/event-img-1.jpg"
              imgAlt="Image from our events during the past month"
              eventCat=" |  UNWIND"
              eventDate="March 7"
              eventTitle={["Renewables UnWind", <br />, "New York"]}
            />

            <RecentEvent
              imgSrc="http://www.energeiaworks.com/email/2019-04/event-img-2.jpg"
              imgAlt="Image from our events during the past month"
              eventBlurb="We celebrated the end of the first quarter of 2019 with our event sponsor, Soltage."
            />



            

            {/*<RecentEvent
              imgSrc="http://www.energeiaworks.com/email/2019-01/20190110-NYC-3.jpg"
              imgAlt="Image from our events during the past month"
              eventBlurb="Thanks to everyone for joining us for another great event and evening."
            />
            <RecentEvent
              imgSrc="http://www.energeiaworks.com/email/2019-01/20190110-NYC-4.jpg"
              imgAlt="Image from our events during the past month"
              eventBlurb="We always enjoy the opportunity to discuss our industry in a open and relaxed environment."
            />
            <RecentEvent
              imgSrc="http://www.energeiaworks.com/email/2019-01/20190110-NYC-5.jpg"
              imgAlt="Image from our events during the past month"
              eventBlurb="We look forward for what this year has to offer, and what we have planned for RenewablesUnwind in 2019."
            />
            <RecentEvent
              imgSrc="http://www.energeiaworks.com/email/2019-01/20190110-NYC-6.jpg"
              imgAlt="Image from our events during the past month"
              eventBlurb="Keep an eye on your inbox for announcements of our 2019 events nationwide."
            />*/}

          </RecentEvents>





          <UpcomingEvents>

          {/*  <UpcomingEvent
              eventTitle="New York Solar Energy Society Conference: Energy Efficiency & Renewables"
              eventLinkTo="http://nyses.org/Events/20181130-SolarConferenceAndEXPO"
              eventDate="November 30"
              eventLocation="Hilton Garden Inn, Troy, NY"
              eventBlurb={["EnergeiaWorks is pleased to announce our partnership with NYSES to host the NY Summit: Energy Efficiency & Renewables.  Join us for a full day of talks and panels from the solar industry's leading professionals.  Special pricing is available to EnergeiaWorks subscribers - view the ", <a href="http://nyses.org/Conference/2018-ConferenceRegistration">discounted rates here</a>, "."]}
            />*/}


            <UpcomingEventUnWind
              eventTitle={["Renewables UnWind Minneapolis"]}
              eventLinkTo="https://www.eventbrite.com/e/renewables-unwind-minneapolis-tickets-59403701069"
              eventDate="April 30"
              eventLocation="Minneapolis, MN"
              eventBlurb={["Antenna Group, EnergeiaWorks and MWSE invite you to network with your sustainable energy colleagues after the expo in Minneapolis. Use code MWSE-EW15 to register and save 15% off full conference ticket. ", <a href="https://www.eventbrite.com/e/renewables-unwind-minneapolis-tickets-59403701069">RSVP here with password MN04</a>, "."]}
            />

            <UpcomingEvent
              eventTitle={["Midwest Solar Expo"]}
              eventLinkTo="https://www.midwestsolarexpo.com/"
              eventDate="May 1 - 2"
              eventLocation="Minneapolis, MN"
              eventBlurb={["Come join EnergeiaWorks and clean energy leaders from across the country at the Midwest’s flagship solar business event. The 2019 Midwest Solar Expo, taking place May 1-2, 2019 in the heart of Downtown Minneapolis. ", <a href="https://www.midwestsolarexpo.com/page/1382183/registration">Get your tickets at the events website here.</a>, "."]}
            />
            
            <UpcomingEventUnWind
              eventTitle={["Renewables UnWind Calgary"]}
              eventLinkTo="https://www.eventbrite.com/e/renewables-unwind-calgary-tickets-54555475897"
              eventDate="May 7"
              eventLocation="Calgary, AB"
              eventBlurb={["We’re back in Calgary for Renewables UnWind!  Join us for Canada’s premier clean-tech networking event. Join Greengate Power, Scott Land & Lease, Energeiaworks, Wrise, Solar Drinks and Green Cat at Cowboys Dance Hall and network in a casual atmosphere. ", <a href="https://www.eventbrite.com/e/renewables-unwind-calgary-tickets-54555475897">RSVP here with password CAN2</a>, "."]}
            />

            <UpcomingEvent
              eventTitle={["Solar Canada"]}
              eventLinkTo="https://solarcanadaconference.ca/"
              eventDate="May 8"
              eventLocation="Calgary, AB"
              eventBlurb={["Network with Energeiaworks and an estimated 2200 attendees and up to 100 exhibitors representing the entire supply chain: solar integration, development, engineering and EPC, equipment manufacturers, utilities, consultants, federal, provincial and municipal governments, communities, and students at Solar Canada. ", <a href="https://solarcanadaconference.ca/registration/">Get your tickets at the events website here.</a>, "."]}
            />
            
            <UpcomingEventUnWind
              eventTitle={["Renewables UnWind New York"]}
              eventLinkTo="https://www.eventbrite.com/e/renewables-unwind-nyc-tickets-59338622417"
              eventDate="May 9"
              eventLocation="New York, NY"
              eventBlurb={["EnergeiaWorks invites you to network with your sustainable energy colleagues in NYC’s leading clean-tech event. Come have a drink and network in a casual atmosphere with some of the industry’s top professionals in clean energy. ", <a href="https://www.eventbrite.com/e/renewables-unwind-nyc-tickets-59338622417">RSVP here with password RUW5</a>, "."]}
            />

            <UpcomingEvent
              eventTitle={["AWEA WindPower"]}
              eventLinkTo="https://www.windpowerexpo.org/"
              eventDate="May 20"
              eventLocation="Houston, TX"
              eventBlurb={["Hear from policy leader, industry experts and visionaries in 60+ hours in education content. Connect with all the major players in the US wind energy industry in one place during one week. ", <a href="https://www.windpowerexpo.org/register/register-now">Register at the events website.</a>, "."]}
            />

            

          </UpcomingEvents>



          <FeaturedPlacement
            imgSrc="https://www.energeiaworks.com/email/2019-04/williammartinez.jpg"
            imgWidth="150"
            jobEmployee="William Martinez"
            jobCompany="Project Manager"
            jobBlurb={["BNRG Renewables has developed, financed and constructed over 115 MW of ground mounted and rooftop projects in the UK, Northern Ireland, Bulgaria and Greece (plus 260 MW under development in northern Ireland). Shortly after winning their first US portfolios (110 MW in Maine and 35 MW in Oregon), BNRG came to EnergeiaWorks to search for an engineering Project Manager (based in the US) who would push the development process throughout construction and manage EPC contractors through to completion.", <br />, <br />, "Within three weeks of beginning the search, EnergeiaWorks source 8 qualified candidates for this role, including Will Martinez. Will project engineered dozens of utility-scale solar projects all over the east coast for one of largest solar EPCs, and was involved in development through to construction.  Will is entering his third month at BNRG. If you’re interested in learning more about BNRG, please visit their website here: ", <a href="http://www.bnrg.ie">www.bnrg.ie/</a>]}
          />

          <HotJobs>

            <HotJob
              jobTitle="Account Manager"
              jobLinkTo="http://energeiaworks.catsone.com/careers/index.php?m=portal&a=details&jobOrderID=12068308"
              jobLocation="New York, NY"
              jobBlurb="Manage customer relationships, CRM management, customer training and contract management."
            />
            <HotJob
              jobTitle="Senior Electrical Engineer"
              jobLinkTo="http://energeiaworks.catsone.com/careers/index.php?m=portal&a=details&jobOrderID=12000052"
              jobLocation="Jersey City, NJ"
              jobBlurb="Design and generate construction documents for commercial and utility-scale solar PV systems."
            />
            <HotJob
              jobTitle="Wind Asset Manager"
              jobLinkTo="http://energeiaworks.catsone.com/careers/index.php?m=portal&a=details&jobOrderID=11953345"
              jobLocation="San Diego, CA"
              jobBlurb="Daily Operation and Maintenance of utility-scale wind farms around the western half of the United States"
            />
            <HotJob
              jobTitle="Senior Applications Engineer"
              jobLinkTo="http://energeiaworks.catsone.com/careers/index.php?m=portal&a=details&jobOrderID=11453609"
              jobLocation="New York, NY"
              jobBlurb="Provide technical product support for high-power inverter systems for utility scale solar projects in North America."
            />
            <HotJob
              jobTitle="Power Marketing Manager"
              jobLinkTo="http://energeiaworks.catsone.com/careers/index.php?m=portal&a=details&jobOrderID=12137126"
              jobLocation="New York, NY"
              jobBlurb="Lead the commercial power origination efforts for the U.S. solar market."
            />

          </HotJobs>


          <Footer />

        </EmailContainer>

      </div>
    );
  }
}

export default Newsletter;
