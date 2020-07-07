import React from 'react';
import PropTypes from 'prop-types';
import validateURL from 'react-proptypes-url-validator';

import { Padding } from '../globals';


export const AnnouncementBackpack = (props) => {
  return (
    <table className="announcement-header" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%', backgroundColor: props.backgroundColor }}>
      <tbody>
        <tr>
          <td align="center" valign="top">

            <Padding size={24} />

            <font face="'Work Sans', sans-serif" color="#0054B3" style={{fontSize: 28, lineHeight: '1.25', fontWeight: 600, letterSpacing: '-1px', textAlign: 'center', color: '#0054B3' }}>
               <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 28, lineHeight: '1.25', fontWeight: 600, letterSpacing: '-1px', textAlign: 'center', color: '#0054B3'}}>

                 We're hosting the Harpoon Brewery networking reception with our friends at Pfister Energy. Enter to win a solar backpack at the event!

               </span>
            </font>

            <img src="http://www.energeiaworks.com/email/2018-02/backpack.jpg" alt="EnergeiaWorks solar backpack" width="308" border="0" style={{display: 'block', width: 308, maxWidth: '100%'}} />

            <Padding size={24} />

          </td>
        </tr>
      </tbody>
    </table>
  )
}
