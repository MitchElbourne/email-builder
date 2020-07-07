import React from 'react';

import { Padding, CtaButton } from '../globals';


export const RenewablesUnWind = (props) => {
  return (
    <table className="renewables-unwind" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%'}}>
      <tbody>

        <tr>
          <td align="center" valign="top">

            <Padding size={24} />

            <img src={props.imgSrc} alt={props.imgAlt} width={props.imgWidth} border="0" style={{display: 'block', width: props.imgWidth, maxWidth: '100%'}} />

            <Padding size={16} />
          </td>
        </tr>

        <tr>
          <td align="justify" valign="top">

            <font face="'Work Sans', sans-serif"
              color="#005ebc"
              style={{fontSize: 16, lineHeight: '1.75', fontWeight: 300, color: "#005ebc" }}>
               <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 16, lineHeight: '1.75', fontWeight: 300, color: "#005ebc"}}>
                 {props.text}
               </span>
            </font>
            
            <Padding size={8} />
            
            <font face="'Work Sans', sans-serif"
              color="#005ebc"
              style={{fontSize: 16, lineHeight: '1.75', fontWeight: 300, color: "#005ebc" }}>
               <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 16, lineHeight: '1.75', fontWeight: 300, color: "#005ebc"}}>
                 {props.socialText}
               </span>
            </font>
            
            <Padding size={8} />
            
            <font face="'Work Sans', sans-serif"
              color="#005ebc"
              style={{fontSize: 16, lineHeight: '1.75', fontWeight: 300, color: "#005ebc" }}>
               <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 16, lineHeight: '1.75', fontWeight: 300, color: "#005ebc"}}>
                 {props.sponsorText}
               </span>
            </font>

            <Padding size={16} />

            <CtaButton
              ctaLinkTo={props.ctaLinkTo}
              ctaText={props.ctaText}
              ctaWidth={props.ctaWidth}
              ctaHeight={props.ctaHeight}
              ctaColor={props.ctaColor}
            />

            <Padding size={24} />

          </td>
        </tr>
      </tbody>
    </table>
  )
}
