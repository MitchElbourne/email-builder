import React from 'react';

import { Padding } from '../globals';


export const RecentEvent = (props) => {
  return (
    <div className="event mob_btn" style={{display: 'inline-block', verticalAlign: 'top', width: 310, minWidth: 310, maxWidth: 310}}>
      <table className="mob_card" cellPadding="0" cellSpacing="0" border="0" width={295} style={{width: 295, minWidth: 295, maxWidth: 295}}>
        <tbody>
          <tr>
            <td align="left" valign="top">

              <Padding size={16} />

              <img src={props.imgSrc} alt={props.imgAlt} width="100%" border="0" style={{display: 'block', width: '100%', height: '200px'}} />

              <Padding size={16} />

              <font face="'Work Sans', sans-serif" color="#7CACDB" style={{fontSize: 16, lineHeight: 1.5, fontWeight: 500, textTransform: 'uppercase'}}>
                <span style={{fontFamily: "'Work Sans', sans-serif", color: "#7CACDB", fontSize: 16, lineHeight: 1.5, fontWeight: 500, textTransform: 'uppercase'}}>
                  {props.eventDate} {props.eventCat}
                </span>
              </font>

              <Padding size={0} />

              <font face="'Work Sans', sans-serif" color="#4a4a4a" style={{fontSize: 24, lineHeight: 1.2, fontWeight: 500}}>
                <span style={{fontFamily: "'Work Sans', sans-serif", color: "#4a4a4a", fontSize: 24, lineHeight: 1.2, fontWeight: 500}}>
                  {props.eventTitle}
                </span>
              </font>

              <Padding size={2} />

              <font face="'Work Sans', sans-serif" color="#4a4a4a" style={{fontSize: 17, lineHeight: 1.33, fontWeight: 300}}>
                <span style={{fontFamily: "'Work Sans', sans-serif", color: "#4a4a4a", fontSize: 17, lineHeight: 1.33, fontWeight: 300}}>
                  {props.eventBlurb}
                </span>
              </font>

              <Padding size={2} />

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
