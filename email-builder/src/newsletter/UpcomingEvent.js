import React from 'react';

import { Padding } from '../globals';


export const UpcomingEvent = (props) => {
  return (
    <div>
      <table cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%', background: '#d7ecff'}}>
        <tbody>
          <tr>

            <td width="12" style={{width: 12, maxWidth: 12, minWidth: 12}}>&nbsp;</td>

            <td align="left" valign="top">

              <a href={props.eventLinkTo} style={{display: 'block', width: '100%', textDecoration: 'none'}}>

                <Padding size={8} />

                <font face="'Work Sans', sans-serif" color="#337ab7" style={{fontSize: 24, lineHeight: 1.2, fontWeight: 600, textDecoration: 'none'}}>
                  <span style={{fontFamily: "'Work Sans', sans-serif", color: "#337ab7", fontSize: 24, lineHeight: 1.2, fontWeight: 600, textDecoration: 'none'}}>
                    {props.eventTitle}
                  </span>
                </font>

                <Padding size={4} />

                <font face="'Work Sans', sans-serif" color="#337ab7" style={{fontSize: 16, lineHeight: 1.2, fontWeight: 600, textDecoration: 'none'}}>
                  <span style={{fontFamily: "'Work Sans', sans-serif", color: "#337ab7", fontSize: 16, lineHeight: 1.2, fontWeight: 600, textDecoration: 'none'}}>
                    {props.eventDate}, {props.eventLocation}
                  </span>
                </font>

                <Padding size={8} />
              </a>

            </td>

            <td width="36" style={{width: 36, maxWidth: 36, minWidth: 36}}>&nbsp;</td>
          </tr>
        </tbody>
      </table>

      <table cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%', borderWidth: 1, borderStyle: 'solid', borderColor: '#d7ecff', borderTop: 'none'}}>
        <tbody>
          <tr>

            <td width="12" style={{width: 12, maxWidth: 12, minWidth: 12}}>&nbsp;</td>

            <td align="left" valign="top">

              <Padding size={8} />

              <font face="'Work Sans', sans-serif" color="4a4a4a" style={{fontSize: 16, lineHeight: 1.2, fontWeight: 300, textDecoration: 'none'}}>
                <span style={{fontFamily: "'Work Sans', sans-serif", color: "#4a4a4a", fontSize: 16, lineHeight: 1.5, fontWeight: 300, textDecoration: 'none'}}>
                  {props.eventBlurb}
                </span>
              </font>

              <Padding size={8} />

            </td>

            <td width="36" style={{width: 36, maxWidth: 36, minWidth: 36}}>&nbsp;</td>

          </tr>
        </tbody>
      </table>

      <Padding size={16} />

    </div>
  )
}
