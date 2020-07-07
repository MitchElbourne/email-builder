import React from 'react';

import { Padding, SectionHeader, ImageBlock, TextBlock } from '../globals';


export const FeaturedPlacement = (props) => {
  return (
    <table className="upcoming-events" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%' }}>
      <tbody>
        <tr>
          <td align="center" valign="top">

            <SectionHeader
              titleText="Featured Placement"
              color="#327AB7"
            />

            <ImageBlock

            />

            <table cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%', background: '#D7ECFF'}}>
              <tbody>
                <tr>

                  <td width="12" style={{width: 12, maxWidth: 12, minWidth: 12}}>&nbsp;</td>

                  <td align="left" valign="top">

                    <div style={{display: 'block', width: '100%', textDecoration: 'none', textAlign: "center"}}>

                      <Padding size={12} />

                      <img src={props.imgSrc} style={{width: props.imgWidth + 'px'}}/>

                      <Padding size={12} />
                    </div>

                  </td>

                  <td width="12" style={{width: 12, maxWidth: 12, minWidth: 12}}>&nbsp;</td>
                </tr>
              </tbody>
            </table>

            <table cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%', borderWidth: 1, borderStyle: 'solid', borderColor: '#d7ecff', borderTop: 'none'}}>
              <tbody>
                <tr>

                  <td width="12" style={{width: 12, maxWidth: 12, minWidth: 12}}>&nbsp;</td>

                  <td align="left" valign="top">

                    <Padding size={8} />

                    <font face="'Work Sans', sans-serif" color="4a4a4a" style={{fontSize: 22, lineHeight: 1.2, fontWeight: 300, textDecoration: 'none'}}>
                      <span style={{fontFamily: "'Work Sans', sans-serif", color: "#4a4a4a", fontSize: 22, lineHeight: 1.5, fontWeight: 300, textDecoration: 'none', display: 'block'}}>
                        {props.jobEmployee}
                      </span>

                    </font>
                    <font face="'Work Sans', sans-serif" color="#7CACDB" style={{fontSize: 16, lineHeight: 1.2, fontWeight: 300, textDecoration: 'none'}}>
                      <span style={{fontFamily: "'Work Sans', sans-serif", color: "#7CACDB", fontSize: 16, lineHeight: 1.5, fontWeight: 300, textDecoration: 'none', display: 'block'}}>
                        {props.jobCompany}
                      </span>

                    </font>

                    <Padding size={12} />

                    <font face="'Work Sans', sans-serif" color="#4a4a4a" style={{fontSize: 16, lineHeight: 1.2, fontWeight: 300, textDecoration: 'none'}}>
                      <span style={{fontFamily: "'Work Sans', sans-serif", color: "#4a4a4a", fontSize: 16, lineHeight: 1.5, fontWeight: 300, textDecoration: 'none', display: 'block'}}>
                        {props.jobBlurb}
                      </span>

                    </font>

                    <Padding size={8} />

                  </td>

                  <td width="12" style={{width: 12, maxWidth: 12, minWidth: 12}}>&nbsp;</td>

                </tr>
              </tbody>
            </table>

           </td>
        </tr>

        <tr>
          <td align="center" valign="top">

            <Padding size={16} />

          </td>
        </tr>

      </tbody>
    </table>
  )
}
