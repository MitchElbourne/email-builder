import React from 'react';

import { Padding } from '.';


export const SponsorImageBlock = (props) => {
  return (
    <table className="image-block" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%' }}>
      <tbody>
        <tr>
          <td align="center" valign="top">

            <Padding size={props.paddingTop} />

            <a href={props.linkTo} target="_blank">

              <img src={props.imgSrc} alt={props.imgAlt} width={props.imgWidth} border="0" style={{display: 'block', width: props.imgWidth, border:props.border}} />

            </a>

            <Padding size={props.paddingBottom} />

          </td>
        </tr>
      </tbody>
    </table>
  )
}
