import React from 'react';
import PropTypes from 'prop-types';
import validateURL from 'react-proptypes-url-validator';

import { Padding } from '../globals';


export const NewsletterHeader = (props) => {
  return (
    <table className="newsletter-header" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%', backgroundColor: props.backgroundColor }}>
      <tbody>
        <tr>
          <td align="center" valign="top">

            <Padding size={0} />

            <img src={props.imgSrc} alt={props.imgAlt} width={props.imgWidth} border="0" style={{display: 'block', width: props.imgWidth, maxWidth: '100%'}} />

            <Padding size={24} />

            <font face="'Work Sans', sans-serif" color={props.color} style={{fontSize: props.fontSize, lineHeight: '1.5', fontWeight: 300, letterSpacing: '-1px', textAlign: 'center', color: props.color }}>
               <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: props.fontSize, lineHeight: '1.5', fontWeight: 300, letterSpacing: '-1px', textAlign: 'center', color: props.color}}>{props.title}</span>
            </font>

            <Padding size={6} />

            <font face="'Work Sans', sans-serif" color={props.subColor} style={{fontSize: props.subFontSize, lineHeight: '1.5', fontWeight: 300, textAlign: 'center', color: props.subColor }}>
               <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: props.subFontSize, lineHeight: '1.5', fontWeight: 300, textAlign: 'center', color: props.subColor}}>{props.subTitle}</span>
            </font>

            <Padding size={36} />

          </td>
        </tr>
      </tbody>
    </table>
  )
}

NewsletterHeader.propTypes = {
  imgSrc: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    validateURL
  ]),
  imgWidth: PropTypes.number.isRequired,
  imgAlt: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  subTitle: PropTypes.string,
  subColor: PropTypes.string,
  subFontSize: PropTypes.number
}
