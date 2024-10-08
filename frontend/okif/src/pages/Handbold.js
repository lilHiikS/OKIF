import React from "react";
import { Link } from "react-router-dom";
import "../styles/Handbold.css";

function Handbold() {
    return (
        <>
            <div className="container">
                <div className="menu">
                    <Link to="/forside">Hjemmestævner</Link>
                    <Link to="/sponsor">Træningstider</Link>
                    <Link to="/galleri">Bliv dommer</Link>
                    <Link to="/handbold">Holdbilleder</Link>
                </div>
            </div>
            <div className="handbold-content">
                <h2>Håndbold i Ørslevkloster</h2>
                <p>Håndboldafdelingen består af 7-børne og ungdomshold, samt 2 herrerseniorhold & 2 damehold</p>

                <p>Vi har ca. 110 aktive spillere fra micro of op til damejunior. <br/> Trænerne er engagerede og gør et stort stykke arbejde med træning, men også på det sociale område. Vi forsøger at gøre det spændende, men også rart at spille håndbold i ØK</p>
                <p>Vi har god forældreopbakning i klubben. Forældre hjælper ved at sidde tidtagere - nogle dømmer kampe i miniput/U10- De er også behjælpelige med kørsel og vask af spillerdragter. Børnene ser frem til når forældre og søskendel kommer og ser kampene, og det giver en fantastisk stemning i hallen, når der er mange tilskuere.</p>
                <p>Vores mini- og miniputspillere bliver tilmeldt stævner, hvor de spiller flere kampe på en dag. Alle øvrige hold tilmeldes JHF-turneringen (kreds 2)</p>
                <p>Der er mulighed for at deltage i et af forårets mange cup/stævner. <br/> (Se under stævner)</p>
                <p>Som afslutning på sæsonen inviteres alle ungdomsspilelre til et fællesarrangement på tværs af afdelinger i klubben. Sidste år bar dette en tur i Skive Badeland efterfulgt af fællesspisning i Ørslevkloster Hallen.</p>
                <p>Håndboldtræningen ligger på tirsdage og torsdage, med start i September og slut i April. Nye spillere har mulighed for at prøve 1 måned gratis</p>
            </div>
        </>
    );
}

export default Handbold;