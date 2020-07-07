import React from 'react';
import PropTypes from 'prop-types';
import validateURL from 'react-proptypes-url-validator';

import { Padding } from '../globals';


export const AnnouncementHeader = (props) => {
  return (
    <table className="announcement-header" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{width: '100%', minWidth: '100%', maxWidth: '100%', backgroundColor: props.backgroundColor }}>
      <tbody>
        <tr>
          <td align="center" valign="top">

            <Padding size={24} />

            <img src={props.imgSrc} alt={props.imgAlt} width={props.imgWidth} border="0" style={{display: 'block', width: props.imgWidth, maxWidth: '100%'}} />

            <Padding size={16} />

            <font face="'Work Sans', sans-serif" color={props.color} style={{fontSize: props.fontSize, lineHeight: '1.5', fontWeight: 600, letterSpacing: '-1px', textAlign: 'center', color: props.color }}>
               <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: props.fontSize, lineHeight: '1.5', fontWeight: 600, letterSpacing: '-1px', textAlign: 'center', color: props.color}}>{props.title}</span>
            </font>

            <Padding size={24} />

          </td>
        </tr>
      </tbody>
    </table>
  )
}

AnnouncementHeader.propTypes = {
  imgSrc: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    validateURL
  ]),
  imgWidth: PropTypes.number.isRequired,
  imgAlt: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number
}
