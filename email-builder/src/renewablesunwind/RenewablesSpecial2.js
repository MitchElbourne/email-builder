import React, { Component } from 'react';

import {
  EmailContainer,
  ImageBlock,
  TitleBlock,
  TextBlock,
  FocusLarge,
  Padding,
  FooterRUW
} from '../globals';

class RenewablesSpecial2 extends Component {
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
      <div className="renewables-special">
        <EmailContainer>

          <ImageBlock
            imgSrc="http://www.energeiaworks.com/email/2018-09/UnWind-Anaheim-emailHeader-v0.4.jpg"
            imgAlt="Renewables UnWind banner graphic"
            paddingTop={24}
            paddingBottom={2}
          />























          <table className="recent-events" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{width: '100%', minWidth: '100%', maxWidth: '100%' }}>
            <tbody>

              <tr>
                <td align="center" valign="top">





                  <div className="event mob_btn" style={{display: 'inline-block', verticalAlign: 'top', width: 310, minWidth: 310, maxWidth: 310}}>
                    <table className="mob_card" cellPadding="0" cellSpacing="0" border="0" width={295} style={{width: 295, minWidth: 295, maxWidth: 295}}>
                      <tbody>
                        <tr>
                          <td align="left" valign="top">

                            <Padding size={18} />

                            <font face="'Work Sans', sans-serif" color="#2558AF" style={{fontSize: 22, lineHeight: 1.5, fontWeight: 500}}>
                              <span style={{fontFamily: "'Work Sans', sans-serif", color: "#2558AF", fontSize: 22, lineHeight: 1.5, fontWeight: 500}}>
                                ▸  Rooftop Party
                              </span>
                            </font>

                            <Padding size={6} />

                            <font face="'Work Sans', sans-serif" color="#2558AF" style={{fontSize: 22, lineHeight: 1.5, fontWeight: 500}}>
                              <span style={{fontFamily: "'Work Sans', sans-serif", color: "#2558AF", fontSize: 22, lineHeight: 1.5, fontWeight: 500}}>
                                ▸  Event Photographer
                              </span>
                            </font>

                            <Padding size={6} />

                            <font face="'Work Sans', sans-serif" color="#2558AF" style={{fontSize: 22, lineHeight: 1.5, fontWeight: 500}}>
                              <span style={{fontFamily: "'Work Sans', sans-serif", color: "#2558AF", fontSize: 22, lineHeight: 1.5, fontWeight: 500}}>
                                ▸  Hors d'oeuvres
                              </span>
                            </font>

                            <Padding size={16} />

                             <font face="'Work Sans', sans-serif" color="#2558AF" style={{fontSize: 16, lineHeight: 1.2, fontWeight: 300}}>
                              <span style={{fontFamily: "'Work Sans', sans-serif", color: "#2558AF", fontSize: 16, lineHeight: 1.2, fontWeight: 300}}>
                                Renewables UnWind is an afterwork networking event geared towards professionals in the sustainable energy and clean-tech industries.
                              </span>
                            </font>

                            <Padding size={8} />

                            <font face="'Work Sans', sans-serif" color="#4a4a4a" style={{fontSize: 17, lineHeight: 1.33, fontWeight: 600}}>
                              <span style={{fontFamily: "'Work Sans', sans-serif", color: "#4a4a4a", fontSize: 17, lineHeight: 1.33, fontWeight: 600}}>
                                <a href="https://www.renewablesunwind.com">www.renewablesunwind.com</a>
                              </span>
                            </font>

                            <Padding size={8} />

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>




                  <div className="event mob_btn" style={{display: 'inline-block', verticalAlign: 'top', width: 310, minWidth: 310, maxWidth: 310}}>
                    <table className="mob_card" cellPadding="0" cellSpacing="0" border="0" width={295} style={{width: 295, minWidth: 295, maxWidth: 295}}>
                      <tbody>
                        <tr>
                          <td align="left" valign="top">

                            <Padding size={18} />

                            <font face="'Work Sans', sans-serif" color="#2558AF" style={{fontSize: 22, lineHeight: 1.5, fontWeight: 500}}>
                              <span style={{fontFamily: "'Work Sans', sans-serif", color: "#2558AF", fontSize: 22, lineHeight: 1.5, fontWeight: 500}}>
                                ▸  Open Bar
                              </span>
                            </font>

                            <Padding size={6} />

                            <font face="'Work Sans', sans-serif" color="#2558AF" style={{fontSize: 22, lineHeight: 1.5, fontWeight: 500}}>
                              <span style={{fontFamily: "'Work Sans', sans-serif", color: "#2558AF", fontSize: 22, lineHeight: 1.5, fontWeight: 500}}>
                                ▸  Solar Backpack Raffle
                              </span>
                            </font>

                            <Padding size={6} />

                            <font face="'Work Sans', sans-serif" color="#2558AF" style={{fontSize: 22, lineHeight: 1.5, fontWeight: 500}}>
                              <span style={{fontFamily: "'Work Sans', sans-serif", color: "#2558AF", fontSize: 22, lineHeight: 1.5, fontWeight: 500}}>
                                ▸  Casual Atmosphere
                              </span>
                            </font>

                            <Padding size={16} />

                            <font face="'Work Sans', sans-serif" color="#2558AF" style={{fontSize: 16, lineHeight: 1.2, fontWeight: 300}}>
                             <span style={{fontFamily: "'Work Sans', sans-serif", color: "#2558AF", fontSize: 16, lineHeight: 1.2, fontWeight: 300}}>
                               Join EnergeiaWorks and a host of friends from across the clean-tech industry for this exclusive SPI After Party event!
                             </span> <br /><br />
                           </font>

                           <Padding size={8} />

                            <font face="'Work Sans', sans-serif" color="#4a4a4a" style={{fontSize: 17, lineHeight: 1.33, fontWeight: 600}}>
                              <span style={{fontFamily: "'Work Sans', sans-serif", color: "#4a4a4a", fontSize: 17, lineHeight: 1.33, fontWeight: 600}}>
                                <a href="http://www.energeiaworks.com">www.energeiaworks.com</a>
                              </span>
                            </font>

                            <Padding size={8} />

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>


                </td>
              </tr>
            </tbody>
          </table>


          <Padding size={16} />


          <FocusLarge
            eventLocation={["Fire + Ice", <br key={this.getKey()}/>, "400 Disney Way", <br key={this.getKey()}/>, "Anaheim, CA "]}
            eventDate={["Mon, September 24, 2018", <br key={this.getKey()}/>, "8-10pm"]}
            ctaText="RSVP Here"
            ctaLinkTo="https://www.eventbrite.com/e/renewables-unwind-anaheim-tickets-48388330800"
            ctaColor="#005ebc"

            color="#005ebc"
            ctaWidth={200}
            ctaHeight={55}
            readMoreText="Use password: SPI2018"
            readMoreLinkTo="https://www.eventbrite.com/e/renewables-unwind-anaheim-tickets-48388330800"
          />

          <Padding size={24} />

          <FooterRUW />

        </EmailContainer>
      </div>
    )
  }
}

export default RenewablesSpecial2;
