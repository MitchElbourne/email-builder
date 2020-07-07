import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Newsletter from './newsletter/Newsletter';
import Announcement from './announcement/Announcement';
import Activation from './activation/Activation';
import RenewablesUnWind from './renewablesunwind/RenewablesUnWind';
import RenewablesUnWind2 from './renewablesunwind/RenewablesUnWind2';
import RenewablesUnWind3 from './renewablesunwind/RenewablesUnWind3';
import RenewablesSpecial from './renewablesunwind/RenewablesSpecial';
import RenewablesSpecial2 from './renewablesunwind/RenewablesSpecial2';
import RenewablesUnWindSummer from './renewablesunwind/RenewablesUnWindSummer';
import RenewablesUnWindFollowup from './renewablesunwind/RenewablesUnWindFollowup';
import RenewablesUnWindWithEvent from './renewablesunwind/RenewablesUnWindWithEvent';
import RenewablesSponsorship from './renewablessponsorship/RenewablesSponsorship';
import RenewablesSponsorshipEvent from './renewablessponsorship/RenewablesSponsorshipEvent';
import RenewablesSponsorSpotlight from './renewablessponsorship/SponsorSpotlight';
import SponsorFollowup from './renewablessponsorship/SponsorFollowup';
import SponsorFollowup2 from './renewablessponsorship/SponsorFollowup2';
import SponsorFollowup3 from './renewablessponsorship/SponsorFollowup3';
import Xmas from './special/Xmas';


class Stage extends Component {
  render() {
    return (
      <main className="stage">
        <Route exact path="/"  render={Dashboard} />
        <Route path="/newsletter" component={Newsletter} />
        <Route path="/general-announcement" component={Announcement} />
        <Route path="/activation" component={Activation} />

        <Route path="/renewablesunwind" component={RenewablesUnWind} />
        <Route path="/renewablesunwind2" component={RenewablesUnWind2} />
        <Route path="/renewablesunwind3" component={RenewablesUnWind3} />

      <Route path="/renewablesspecial" component={RenewablesSpecial} />
      <Route path="/renewablesspecial2" component={RenewablesSpecial2} />

        <Route path="/renewablesunwindsummer" component={RenewablesUnWindSummer} />
        <Route path="/renewablesunwindwithevent" component={RenewablesUnWindWithEvent} />
        <Route path="/renewablesunwindfollowup" component={RenewablesUnWindFollowup} />


        <Route path="/sponsorfollowup" component={SponsorFollowup} />
        <Route path="/sponsorfollowup2" component={SponsorFollowup2} />
        <Route path="/sponsorfollowup3" component={SponsorFollowup3} />
        <Route path="/renewablessponsorship" component={RenewablesSponsorship} />
        <Route path="/renewablessponsorshipevent" component={RenewablesSponsorshipEvent} />
        <Route path="/sponsorspotlight" component={RenewablesSponsorSpotlight} />
        {/* <Route path="/xmas" component={Xmas} /> */}
      </main>
    );
  }
}


const Dashboard = () => (
  <div className="dashboard">
    <h1>Dashboard</h1>
  </div>
)

export default Stage;
