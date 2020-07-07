import React from 'react';
import PropTypes from 'prop-types';
import validateURL from 'react-proptypes-url-validator';


export const CtaButton = (props) => {
  return (
    <table align="center" cellPadding="0" cellSpacing="0" border="0" width={props.ctaWidth} style={{width: props.ctaWidth, maxWidth: props.ctaWidth, minWidth: props.ctaWidth, background: props.ctaColor}}>
      <tbody>
        <tr>
          <td align="center" valign="middle" height={props.ctaHeight}>

            <a href={props.ctaLinkTo} target="_blank" style={{display: 'block', width: '100%', height: props.ctaHeight, fontFamily: '"Works Sans", sans-serif', color: "#ffffff", fontSize: 20, lineHeight: props.ctaHeight + 'px', fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>

              <font face="'Work Sans', sans-serif" color="#ffffff" style={{fontSize: 20, color: "white", lineHeight: props.ctaHeight + 'px', fontWeight: 600, textDecoration: "none"}}>

                <span style={{fontFamily: '"Works Sans", sans-serif', color: "#ffffff", fontSize: 20, lineHeight: props.ctaHeight + 'px', fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap"}}>

                  {props.ctaText}

                </span>

              </font>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

CtaButton.propTypes = {
  ctaLinkTo: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    validateURL
  ]),
  ctaText: PropTypes.string.isRequired,
  ctaWidth: PropTypes.number.isRequired,
  ctaHeight: PropTypes.number.isRequired,
  ctaColor: PropTypes.string.isRequired,
}
