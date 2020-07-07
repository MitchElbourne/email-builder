import React from 'react';

import { Padding } from '.';


export const SocialMediaCTAs = (props) => {
  return (
    <table className="social-media" cellPadding="0" cellSpacing="0" border="0" width="105%" style={{width: '88%', minWidth: '88%', maxWidth: '88%' }}>
      <tbody>
        <tr>
          <td align="center" valign="top">

            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                <tr>
                  <td width={props.padding} style={{width: props.padding, maxWidth: props.padding, minWidth: props.padding, display: "flex", flexWrap: "wrap"}}>&nbsp;</td>
                  <font face="'Work Sans', sans-serif" color={props.color} style={{fontSize: 20, lineHeight: '1.17', fontWeight: 500, letterSpacing: '', textAlign: 'center', color: props.color }}>


                  <td align="center" valign="top">
                    <a href="https://www.linkedin.com/company/energeiaworks" target="_blank" rel="noopener noreferrer" style={{display: 'flex', flexDirection: "row-reverse", textDecoration: "none", paddingRight: 15, fontFamily: "'Work Sans', sans-serif", fontSize: 20, lineHeight: '1.17', fontWeight: 500, letterSpacing: ''}}>
                      <p style={{fontSize: 20, color: "#005ebc", padding: props.padding, textAlign: "left", fontFamily: "'Work Sans', sans-serif", fontSize: 20, lineHeight: '1.17', fontWeight: 500, letterSpacing: ''}}>LinkedIn</p>

                      <img src="https://renewablesunwind.com/wp-content/themes/renewablesunwind/svg/logo-linkedin.svg" alt="img" width="60" border="0" style={{display: 'block', maxWidth: 43}} />



                    </a>
                  </td>
                  <td align="center" valign="top">
                    <a href="https://www.instagram.com/renewables_unwind/" target="_blank" rel="noopener noreferrer" style={{display: "flex", flexDirection: "row-reverse", textDecoration: "none", paddingRight: 15, fontFamily: "'Work Sans', sans-serif", fontSize: 20, lineHeight: '1.17', fontWeight: 500, letterSpacing: ''}}>
                      <p style={{fontSize: 20, color: "#005ebc", padding: props.padding, textAlign: "left", fontFamily: "'Work Sans', sans-serif", fontSize: 20, lineHeight: '1.17', fontWeight: 500, letterSpacing: ''}}>Instagram</p>

                      <img src="https://renewablesunwind.com/wp-content/themes/renewablesunwind/svg/logo-instagram.svg" alt="img" width="80" border="0" style={{display: 'block', maxWidth: 43}} />



                    </a>
                  </td>
                  <td align="center" valign="top">
                    <a href="https://twitter.com/EnergeiaWorks" target="_blank" rel="noopener noreferrer" style={{display: 'flex', flexDirection: "row-reverse", textDecoration: "none", paddingRight: 15, fontFamily: "'Work Sans', sans-serif", fontSize: 20, lineHeight: '1.17', fontWeight: 500, letterSpacing: ''}}>
                      <p style={{fontSize: 20, color: "#005ebc", padding: props.padding, textAlign: "left", fontFamily: "'Work Sans', sans-serif", fontSize: 20, lineHeight: '1.17', fontWeight: 500, letterSpacing: ''}}>Twitter</p>

                      <img src="https://renewablesunwind.com/wp-content/themes/renewablesunwind/svg/logo-twitter.svg" alt="img" width= "60" height="90" border="0" style={{display: 'block', maxWidth: 53, marginTop: -5}} />



                    </a>
                  </td>
                  <td align="center" valign="top">
                    <a href="https://www.facebook.com/energeiaworks/" target="_blank" rel="noopener noreferrer" style={{display: 'flex', flexDirection: "row-reverse", textDecoration: "none", fontFamily: "'Work Sans', sans-serif", fontSize: 20, lineHeight: '1.17', fontWeight: 500, letterSpacing: ''}}>
                      <p style={{fontSize: 20, color: "#005ebc", padding: props.padding, textAlign: "left", fontFamily: "'Work Sans', sans-serif", fontSize: 20, lineHeight: '1.17', fontWeight: 500, letterSpacing: ''}}>Facebook</p>

                      <img src="https://renewablesunwind.com/wp-content/themes/renewablesunwind/svg/logo-facebook.svg" alt="img" width="60" border="0" style={{display: 'block', maxWidth: 43}} />



                    </a>
                  </td>
                  </font>
                </tr>


                <tr>
                  <td>
                    <Padding size={12} />
                  </td>
                </tr>


              </tbody>
            </table>

          </td>
        </tr>
      </tbody>
    </table>
  )
}
