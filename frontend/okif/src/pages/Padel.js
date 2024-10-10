import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/padel.css';

const Padel = () => {
    return (
        <>
            <div className="padel-content">
            <h1>Tennis</h1>
                <p>Tennis er et spil for folk i alle aldre</p>
                <p>Vi har to gode baner, hvor man frit kan booke sig ind. Tennis sæsonen er fra medio april og indtil frosten sætter ind.</p>
                
                <h2 class="attention">BOOK BANE SOM MEDLEM - KLIK HER</h2>
                <h2 class="attention">PAY AND PLAY - KLIK HER</h2>


                <h1>Padel</h1>
                <p>Der er mulighed for at leje padelbat og bolde for 10kr. pr. stk., <br/> som skal indbetales på Ørslevkloster IF MobilePay XXXXXX</p>

                <p>Er du <b>gæstespiller</b> koster det 40 kr. pr. person pr. time, som skal indbetales på Ørslevkloster IF MobilePay XXXXXX</p>
                <p>Hvis du er interesseret, kan du læse mere om reglerne for padel <Link to="https://www.danskpadelforbund.dk/hvad-er-padel/" target="_blank" >her</Link></p>

                <h2 class="attention">BOOK BANE SOM MEDLEM - KLIK HER</h2>
                <h2 class="attention">PAY AND PLAY - KLIK HER</h2>
            </div>
        </>
    );
};

export default Padel;