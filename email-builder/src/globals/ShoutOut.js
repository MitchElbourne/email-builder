import React from 'react';
import PropTypes from 'prop-types';

import { Padding } from '.';


export const ShoutOut = (props) => {
  return (
    <table className="shoutout" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%' }}>
      <tbody>
        <tr>
          <td align="center" valign="top">

            <Padding size={24} />

            <font face="'Work Sans', sans-serif" color="#4a4a4a" style={{fontSize: props.fontSize, lineHeight: '1.17', fontWeight: 300, letterSpacing: '-1px', textAlign: 'center', color: '#4a4a4a' }}>
              <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: props.fontSize, lineHeight: '1.17', fontWeight: 300, letterSpacing: '-1px', textAlign: 'center', color: '#4a4a4a'}}>
                {props.text}
              </span>
            </font>

            <Padding size={24} />

          </td>
        </tr>
      </tbody>
    </table>
  )
}

ShoutOut.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number
}
