import React from 'react';
import PropTypes from 'prop-types';

import { Padding, CtaButton } from '../globals';


export const Focus = (props) => {
  return (
    <div>
      <table className="focus" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%', borderWidth: 1, borderStyle: 'solid', borderColor: '#b8b8b8', borderRadius: 4 }}>
        <tbody>
          <tr>
            <td align="center" valign="top">

              <Padding size={10} />

              <img src={props.imgSrc} alt={props.imgAlt} width={props.imgWidth} border="0" style={{display: 'block', width: props.imgWidth, maxWidth: props.imgWidth, minWidth: props.imgWidth}} />

              <Padding size={16} />

              <font face="'Work Sans', sans-serif" color="#005ebc" style={{fontSize: 24, lineHeight: '1.17', fontWeight: 700, letterSpacing: '-1px', textAlign: 'center', color: '#005ebc' }}>
                <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 24, lineHeight: '1.17', fontWeight: 700, letterSpacing: '-1px', textAlign: 'center', color: '#005ebc'}}>
                  {props.eventLocation}
                </span>
              </font>

              <Padding size={16} />

              <font face="'Work Sans', sans-serif" color="#4a4a4a" style={{fontSize: 24, lineHeight: '1.17', fontWeight: 700, letterSpacing: '-1px', textAlign: 'center', color: '#4a4a4a' }}>
                <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 24, lineHeight: '1.17', fontWeight: 700, letterSpacing: '-1px', textAlign: 'center', color: '#4a4a4a'}}>
                  {props.eventDate}
                </span>
              </font>

              <Padding size={16} />

              <CtaButton
                ctaText={props.ctaText}
                ctaLinkTo={props.ctaLinkTo}
                ctaColor={props.ctaColor}
                ctaWidth={props.ctaWidth}
                ctaHeight={props.ctaHeight}
              />

              <Padding size={16} />

              <a href={props.readMoreLinkTo} target="_blank" style={{display: 'block', width: '100%', fontFamily: '"Works Sans", sans-serif', color: "#ffffff", fontSize: 16, lineHeight: 1.17, fontWeight: 600, letterSpacing: 0.5, textDecoration: "underline", whiteSpace: "nowrap" }}>
                <font face="'Work Sans', sans-serif" color="#4a4a4a" style={{fontSize: 24, lineHeight: '1.17', fontWeight: 600, textDecoration: 'underline', textAlign: 'center', letterSpacing: 0.5, color: '#005ebc' }}>
                  <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 16, lineHeight: '1.17', fontWeight: 600, textAlign: 'center', letterSpacing: 0.5, color: '#005ebc'}}>
                     {props.readMoreText}
                  </span>
                </font>
              </a>

              <Padding size={36} />

            </td>
          </tr>
        </tbody>
      </table>

      <Padding size={36} underline={true} />

    </div>

  )
}

// TODO: Format PropTypes

Focus.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number
}
