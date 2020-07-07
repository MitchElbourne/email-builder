import React from 'react';

import { Padding, SectionHeader } from '../globals';


export const RecruitersOutlook = (props) => {
  return (
    <table className="recruiters-outlook" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%' }}>
      <tbody>
        <tr>
          <td align="center" valign="top">

            <SectionHeader
              titleText="April Newsletter"
              color="#0054B6"
            />

            <Padding size={16} />

            <img src={props.imgSrc} alt={props.imgAlt} width="100%" border="0" style={{display: 'block', width: '100%'}} />

            <Padding size={16} />

          </td>
        </tr>

        <tr>
          <td align="left" valign="top">

            {props.children}

          </td>
        </tr>

        <tr>
           <td align="center" valign="top">
              <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 26, lineHeight: '1.5', fontWeight: 600,  color: '#0054B6'}}>
                 William V. Liuzza
              </span>
           </td>
        </tr>

        <tr>
           <td align="center" valign="top">
              <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 16, lineHeight: '1.5', fontWeight: 300}}>
                 CEO of EnergeiaWorks & Founder of Renewables UnWind
              </span>

              <Padding size={36} underline={true} />

           </td>
        </tr>
      </tbody>
    </table>
  )
}
