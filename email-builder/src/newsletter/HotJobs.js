import React from 'react';

import { SectionHeader, Padding, CtaButton } from '../globals';


export const HotJobs = (props) => {
  return (
    <table className="hot-jobs" cellPadding="0" cellSpacing="0" border="0" width="88%" style={{width: '88%', minWidth: '88%', maxWidth: '88%' }}>
      <tbody>
        <tr>
          <td align="center" valign="top">

            <SectionHeader
              titleText="Hot Jobs"
              color="#327AB7"
              imgSrc="http://www.energeiaworks.com/email/img/icon-fire@2x.png"
              imgAlt="Hot Jobs fire icon"
            />
           </td>
        </tr>

        <tr>
          <td align="center" valign="top">

            <Padding size={16} />

            {props.children}

            <CtaButton
              ctaLinkTo="http://energeiaworks.catsone.com/careers/index.php?m=portal&a=details&jobOrderID=7023138"
              ctaText="View Full Jobs List"
              ctaWidth={230}
              ctaHeight={55}
              ctaColor="#327AB7"
            />

            <Padding size={24} underline={true} />

          </td>
        </tr>

      </tbody>
    </table>
  )
}
