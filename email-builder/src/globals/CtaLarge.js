import React from 'react';
import PropTypes from 'prop-types';
import validateURL from 'react-proptypes-url-validator';

import { Padding, CtaButton } from '.';

export const CtaLarge = (props) => {
  return (
    <table align="center" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', maxWidth: '88%', minWidth: '88%', background: '#ffffff'}}>
      <tbody>
        <tr>
          <td align="center" valign="middle">

            <Padding size={24} />

            <img src={props.imgSrc} alt={props.imgAlt} width={64} border="0" style={{display: 'block', width: 64, maxWidth: 64, minWidth: 64}} />

            <Padding size={12} />

            <font face="'Work Sans', sans-serif" color="#005ebc" style={{fontSize: 32, color: "#005ebc", fontWeight: 700, textDecoration: "none"}}>
              <span style={{fontFamily: '"Works Sans", sans-serif', color: "#005ebc", fontSize: 32, fontWeight: 700, textDecoration: "none"}}>
                {props.leadText}
              </span>
            </font>

            <Padding size={12} />

            <font face="'Work Sans', sans-serif" color="#4a4a4a" style={{fontSize: 24, lineHeight: 1.17, color: "#4a4a4a", fontWeight: 300, textDecoration: "none"}}>
              <span style={{fontFamily: '"Works Sans", sans-serif', color: "#4a4a4a", fontSize: 24, lineHeight: 1.17, fontWeight: 300, textDecoration: "none"}}>
                {props.subText}
              </span>
            </font>

            <Padding size={18} />

            <CtaButton
              ctaLinkTo={props.ctaLinkTo}
              ctaText={props.ctaText}
              ctaWidth={260}
              ctaHeight={55}
              ctaColor="#005ebc"
            />

            <Padding size={40} underline={true} />

          </td>
        </tr>
      </tbody>
    </table>
  )
}

// TODO: Format PropTypes

CtaLarge.propTypes = {
  imgSrc: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    validateURL
  ])
}
