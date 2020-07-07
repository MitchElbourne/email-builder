import React from 'react';

import { Padding } from '.';


export const TextBlock = (props) => {
  return (
    <table className="text-block" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%' }}>
      <tbody>
        <tr>
          <td align="left" valign="top">


          <Padding size="10" />

            <font
              face="'Work Sans', sans-serif"
              color="#4a4a4a"
              style={{fontSize: props.fontSize, lineHeight: '1.33', fontWeight: props.fontWeight, color: '#4a4a4a' }}>
               <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: props.fontSize, lineHeight: '1.33', fontWeight: props.fontWeight, color: '#4a4a4a'}}>
                {props.text}

               </span>
               <a href={props.link} target={"_blank"} style={{color: "#005ebc", textAlign: "center", fontSize: 16}}> {props.linkText}</a>

            </font>

            <Padding size={props.paddingBottom} />

          </td>
        </tr>
      </tbody>
    </table>
  )
}

TextBlock.defaultProps = {
  fontSize: 16,
  fontWeight: 300,
  paddingBottom: 16
}
