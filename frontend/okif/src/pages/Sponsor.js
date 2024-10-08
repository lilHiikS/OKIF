import React from 'react';
import '../styles/Sponsor.css';
import hovedSponsorer from '../images/hovedSponsorer.png';

function Sponsor() {
    return (
    <>
        <div class="sponsor-title">
            <h2>Sponsorer</h2>
            <p>Vi bringer her stor tak til alle vore sponsorer i idrætsforeningen</p>
        </div>

        <div class="sponsor-container">
            <div class="sponsorer">
                <p><b>Hovedpartner</b><br/> Diana Lys <br/> Sparekassen Danmark</p>
                <p><b>Guldpartner</b><br/> Larsen Fliser <br/> Skogaard ApS <br/>Plougman A/S <br/>Hancock br/yggerierne</p>
                <p><b>Sølvpartner</b><br/>Acces Invest <br/> Højgaard Planteskole/nursery</p>
                <p><b>br/onzepartner</b><br/>Emil Skov <br/> Spar Hald <br/> Håndværker Keld Forsberg <br/> Plougmand Auto og maskinservice</p>
                <p><b>VIP Partner</b><br/>Spar Hald <br/> Hald Murer & Entreprenørforretning <br/> Skive Techniacal Service <br/> Lundø strand Camping <br/> Øgaards Haveservice</p>
                <p><b>Pluspartner</b><br/> Nr. Søby VVS <br/> Byggefirmaet Knudsgaard</p>
                <p><b>Partner</b><br/>Højslev Køreskole </p>
            </div>
         </div>

        <div class="hoved-sponsor-image">
            <img src={hovedSponsorer} alt="HovedSponsorer" />
        </div>
    </>
    );
};

export default Sponsor;