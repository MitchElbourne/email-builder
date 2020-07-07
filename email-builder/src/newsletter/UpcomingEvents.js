import React from 'react';

import { Padding, SectionHeader } from '../globals';


export const UpcomingEvents = (props) => {
  return (
    <table className="upcoming-events" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%' }}>
      <tbody>
        <tr>
          <td align="center" valign="top">

            <SectionHeader
              titleText="Upcoming Events"
              color="#327AB7"
              imgSrc="http://www.energeiaworks.com/email/img/icon-calendar@2x.png"
              imgAlt="Upcoming Events calendar icon"
            />
           </td>
        </tr>

        <tr>
          <td align="center" valign="top">

            <Padding size={16} />

            {props.children}

            <Padding size={16} underline={true} />

          </td>
        </tr>

      </tbody>
    </table>
  )
}
