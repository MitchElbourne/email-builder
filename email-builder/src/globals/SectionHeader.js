import React from 'react';
import PropTypes from 'prop-types';

import { Padding } from '.'


export const SectionHeader = (props) => {
  return (
    <div>

      <Padding size={24} />

      <img src={props.imgSrc} alt={props.imgAlt} width="72" border="0" style={{display: 'block', width: 72, maxWidth: 72, minWidth: 72}} />

      <Padding size={12} />

      <font face="'Work Sans', sans-serif"
        color={props.color}
        style={{fontSize: 48, lineHeight: '1.2', fontWeight: 600, color: props.color }}>

        <span style={{fontFamily: "'Work Sans', sans-serif", fontSize: 48, lineHeight: '1.2', fontWeight: 600, color: props.color}}>

           {props.titleText}

        </span>
      </font>
    </div>
  )
}

SectionHeader.propTypes = {
  titleText: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  //imgURL: PropTypes.string
}
