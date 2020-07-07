import React from 'react';
import PropTypes from 'prop-types';

import { Padding } from '.';


export const TitleBlock = (props) => {
  return (
    <table className="image-block" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%' }}>
      <tbody>
        <tr>
          <td align="center" valign="top">

            <Padding size={props.paddingTop} />

            <font
              face="'Work Sans', sans-serif"
              color={props.color}
              style={{fontSize: props.fontSize, lineHeight: '1.2', fontWeight: 600, color: '#0054B6' }}>
               <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: props.fontSize, lineHeight: '1.2', fontWeight: 600, color: props.color}}>

                {props.text}

               </span>
            </font>

            <Padding size={props.paddingBottom} />

          </td>
        </tr>
      </tbody>
    </table>
  )
}

TitleBlock.defaultProps = {
  fontSize: '36',
  color: '#0054B6'
};
