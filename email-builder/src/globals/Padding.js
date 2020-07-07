import React from 'react';
import PropTypes from 'prop-types';


export const Padding = (props) => {
  if (props.underline) {
    return <div style={{height: props.size, lineHeight: props.size + 'px', fontSize: props.size, borderBottom: '2px solid #f4f4f4'}}>&nbsp;</div>
  } else {
    return <div style={{height: props.size, lineHeight: props.size + 'px', fontSize: props.size}}>&nbsp;</div>
  }
}

Padding.propTypes = {
  size: PropTypes.number.isRequired,
  underline: PropTypes.bool
}
