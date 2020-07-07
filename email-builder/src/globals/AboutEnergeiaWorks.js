import React from 'react';
import PropTypes from 'prop-types';
import validateURL from 'react-proptypes-url-validator';

import { Padding } from '.';

export const AboutEnergeiaWorks = () => {
  return (
    <table align="center" cellPadding="0" cellSpacing="0" border="0" width="100%" style={{width: '100%', maxWidth: '100%', minWidth: '100%', background: '#D7ECFF'}}>
      <tbody>
        <tr>
          <td align="center" valign="middle">

            <table align="center" cellPadding="0" cellSpacing="0" border="0" width="80%" style={{width: '80%', maxWidth: '80%', minWidth: '80%', background: '#005ebc'}}>
              <tbody>
                <tr>
                  <td align="center" valign="middle">

                    <Padding size={24} />

                    <font face="'Work Sans', sans-serif" color="#ffffff" style={{fontSize: 24, color: "#ffffff", fontWeight: 600, textDecoration: "none"}}>
                      <span style={{fontFamily: '"Works Sans", sans-serif', color: "#ffffff", fontSize: 24, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap"}}>
                        About
                      </span>
                    </font>

                    <Padding size={12} />

                    <img src="http://www.energeiaworks.com/email/img/logo-energeiaworks-white@2x.png" alt="EnergeiaWorks logo" width={323} border="0" style={{display: 'block', width: 323, maxWidth: 323, minWidth: 323}} />

                    <Padding size={36} />

                  </td>
                </tr>
              </tbody>
            </table>

            <table align="center" cellPadding="0" cellSpacing="0" border="0" width="80%" style={{width: '80%', maxWidth: '80%', minWidth: '80%', background: '#D7ECFF'}}>
              <tbody>
                <tr>
                  <td align="center" valign="middle">

                    <Padding size={18} />

                    <font face="'Work Sans', sans-serif" color="#4a4a4a" style={{fontSize: 24, lineHeight: 1.5, color: "#4a4a4a", fontWeight: 700, letterSpacing: 0.25 }}>
                      <span style={{fontFamily: '"Works Sans", sans-serif', color: "#4a4a4a", fontSize: 24, lineHeight: 1.5, fontWeight: 700, letterSpacing: 0.25 }}>
                        EnergeiaWorks is a global leader in<br />Sustainable Energy Recruitment.
                      </span>
                    </font>

                  </td>
                </tr>

                <tr>
                  <td align="justify" valign="middle">

                    <Padding size={16} />

                    <font face="'Work Sans', sans-serif" color="#4a4a4a" style={{fontSize: 16, lineHeight: 1.5, color: "#4a4a4a", fontWeight: 300, letterSpacing: 0.5 }}>
                      <span style={{fontFamily: '"Works Sans", sans-serif', color: "#4a4a4a", fontSize: 16, lineHeight: 1.5, fontWeight: 300, letterSpacing: 0.5 }}>
                        Our clients represent a cross-section of the clean tech industry from start-ups to Fortune 500 companies including hardware manufacturers, construction companies, engineering consulting firms, energy utilities, software developers, service providers, and government organizations.
                      </span>
                    </font>

                    <Padding size={16} />

                    <font face="'Work Sans', sans-serif" color="#4a4a4a" style={{fontSize: 16, lineHeight: 1.5, color: "#4a4a4a", fontWeight: 300, letterSpacing: 0.5 }}>
                      <span style={{fontFamily: '"Works Sans", sans-serif', color: "#4a4a4a", fontSize: 16, lineHeight: 1.5, fontWeight: 300, letterSpacing: 0.5 }}>
                        EnergeiaWorks stays in front of trends and develops strategic contacts by participating in the industry's most prominent conferences including: DistribuTECH, Intersolar, Solar Power Northeast, Renewable Energy World, Solar Power International, WindPower, Wall Street Green Summit, Canadian Wind Energy and Solar Conference, Energy Storage Association and Solar Business Festival.
                      </span>
                    </font>

                    <Padding size={16} />

                    <font face="'Work Sans', sans-serif" color="#4a4a4a" style={{fontSize: 16, lineHeight: 1.5, color: "#4a4a4a", fontWeight: 300, letterSpacing: 0.5 }}>
                      <span style={{fontFamily: '"Works Sans", sans-serif', color: "#4a4a4a", fontSize: 16, lineHeight: 1.5, fontWeight: 300, letterSpacing: 0.5 }}>
                        EnergeiaWorks has been featured in many notable publications and websites including PV Magazine, Renewable Energy World and Wind Systems. We have partnered with AWEA, SEIA, Smart Electric Power Alliance, Women in Renewable Energy and Iron and Earth.
                      </span>
                    </font>

                    <Padding size={32} />

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

// TODO: Format PropTypes

AboutEnergeiaWorks.propTypes = {
  imgSrc: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    validateURL
  ])
}
