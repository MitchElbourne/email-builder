import React from 'react';

import { Padding, SectionHeader, CtaButton } from '../globals';


export const SolarSavesLives = () => {
  return (
    <table className="solar-saves-lives" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%' }}>
      <tbody>
        <tr>
          <td align="center" valign="top">

            <SectionHeader
              titleText="Solar Saves Lives"
              color="#337ab7"
            />
            
            <Padding size={4} />
            
            <font face="'Work Sans', sans-serif" color="#4a4a4a" style={{fontSize: 22, lineHeight: '1.5', fontWeight: 600, color: '#4a4a4a'}}>
              <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 22, lineHeight: '1.5', fontWeight: 600, color: '#4a4a4a'}}>
                A Special Appeal from EnergeiaWorks
               </span>
            </font>
            
            <Padding size={12} />

            <img src="http://www.energeiaworks.com/email/2017-12/solarsaveslives.jpg" alt="Scene of hurricane devastation" width="100%" border="0" style={{display: 'block', width: '100%'}} />

            <Padding size={16} />

          </td>
        </tr>

        <tr>
          <td align="left" valign="top">

            <font face="'Work Sans', sans-serif" color="#4a4a4a" style={{fontSize: 16, lineHeight: '1.5', fontWeight: 300, color: '#4a4a4a'}}>
              <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 16, lineHeight: '1.5', fontWeight: 300, color: '#4a4a4a'}}>

                <p>In September 2017, Hurricanes Maria and Irma swept across Puerto Rico and the U.S. Virgin Islands, devastating the lives of 3.5 million American citizens. Several weeks after the storms, the islands remain in urgent need of reliable electricity, clean water, and food. Full restoration of the power grid is expected to take months. Remote and rural locations have been hit especially hard.</p>
                <p>Solar and solar &amp; storage technologies can help communities restore electricity and provide essential services like lighting, refrigeration, and fresh water. This will help address immediate, short-term needs while building a more resilient electricity grid for the future.</p>
                <p><a href="https://www.thesolarfoundation.org/solar-saves-lives">Solar Saves Lives</a> is an initiative led by <a href="https://www.thesolarfoundation.org/">The Solar Foundation</a> to coordinate the delivery and installation of donated solar equipment to areas in need. We are seeking product donations and monetary donations from solar companies, other businesses, nonprofit organizations, and the general public.</p>
               </span>
            </font>
            
            <CtaButton
              ctaLinkTo="https://www.thesolarfoundation.org/solar-saves-lives/?mc_cid=1dca88cb9a&mc_eid=0ce1725347"
              ctaText="Make A Donation Now"
              ctaWidth={280}
              ctaHeight={55}
              ctaColor="#3B95E7"
            />
            
            <Padding size={16} underline={true} />

          </td>
        </tr>

  
      </tbody>
    </table>
  )
}
