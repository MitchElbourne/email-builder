import React from 'react';
import PropTypes from 'prop-types';

import { Padding, CtaButton } from '../globals';


export const Introduction = (props) => {
  return (
    <table className="newsletter-intro" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%', backgroundColor: props.backgroundColor }}>
      <tbody>
        <tr>
          <td align="left" valign="top">

            <Padding size={36} />

            <font face="'Work Sans', sans-serif"
              color={props.color}
              style={{fontSize: props.shoutoutFontSize, lineHeight: '1.25', fontWeight: 300, color: props.color }}>
               <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: props.shoutoutFontSize, lineHeight: '1.25', fontWeight: 300, color: props.color}}>
                 {props.shoutoutText}
               </span>
            </font>

            <Padding size={16} />

            <font
              face="'Work Sans', sans-serif"
              color={props.color}
              style={{fontSize: props.leadFontSize, lineHeight: '1.33', fontWeight: 300, color: props.color }}>
               <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: props.leadFontSize, lineHeight: '1.33', fontWeight: 300, color: props.color}}>
                 {props.leadText}
               </span>
            </font>

            <Padding size={16} />

            <font
              face="'Work Sans', sans-serif"
              color={props.color}
              style={{fontSize: props.bodyFontSize, lineHeight: '1.5', fontWeight: 300, color: props.color }}>
               <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: props.bodyFontSize, lineHeight: '1.5', fontWeight: 300, color: props.color}}>
                 {props.bodyText}
               </span>
            </font>

            <Padding size={24} />

            <CtaButton
              ctaLinkTo={props.ctaLinkTo}
              ctaText={props.ctaText}
              ctaWidth={props.ctaWidth}
              ctaHeight={props.ctaHeight}
              ctaColor={props.ctaColor}
            />

            <Padding size={36} underline={true} />

          </td>
        </tr>
      </tbody>
    </table>
  )
}

Introduction.propTypes = {
  shoutout: PropTypes.string,
  lead: PropTypes.string,
  text: PropTypes.string
}
