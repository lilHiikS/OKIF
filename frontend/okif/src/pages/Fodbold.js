import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Fodbold.css';

function Fodbold()  {
    return (
        <>
            <div className="container">
                <div className="menu">
                    <Link href="kampreferat.html">Kampreferat</Link>
                    <Link href="traeningstider.html">Træningstider</Link>
                    <Link href="indendors.html">Indendørs fodbold</Link>
                    <Link href="open.html">ØK OPEN - fodbold</Link>
                    <Link href="vff.html">Fodbold VFF</Link>
                    <Link href="aktier.html">Målaktier</Link>
                    <Link href="fodSponsorer.html">Sponsorer</Link>
                </div>
            </div>
            <div class="fodbold-content">
                    <h1>Nyt fra fodboldudvalget</h1>
                    <h2>Fodboldafdelingen</h2>
                    <p>I ØK spilles der både seniorfodbold for herre og damer.<br/> I efteråret 2024 spiller herrene i serie 3, serie 4 og serie 5. Kvinderne i Jyllandsserie og 7-mands <br/> Træner for herrene: Nikolaj Dahl <br/> Trænere for kvinderne: Jimmy Brammer og Erik Nygaard</p>
                    <p>Inden starten af efterårsturneringen deltager seniorholdene i Høker Cup, der på skift arrangeres af Ørslevkloseter og Højslev St. I 2025 er ØK vært for Høker Cup</p>
                    <p>Vi har samarbejde med Højslev IF omkring en del ungdomshold</p>
                    <p>Vores børnehold spiller kun i ØK.</p>
                    <p>Vi har i fodboldafdelingen nedskrevet vores holdninger og målsætninger, samt forventninger til både spillere, trænere og forældre. <br/>Vi opfordrer altid vores trænere til at dygtiggøre sig, ved at tage på trænerkurser</p>
                    <p>Vi er en breddeklub og går ind for fairplay. <br/>I 2023 blev ØK, som den første klub i Skive Kommune certificeret som DBU Børneklub.</p>
                    <p>Om vinteren er der indendørstræning efter behov, for alle der har lyst. <br/>I ØK's fodboldafdeling vægter vi det sociale højt, vi tilstræber, at der er et hold for samtlige spillere, der har lyst til at være en del af fællesskabet</p>
                <ul>
                    <li>I Ørslevkloster tager vi godt imod dig</li>
                    <li>I Ørslevkloster er alle spillere vigtige</li>
                    <li>I Ørslevkloster har vi det sjovt sammen</li>
                    <li>I Ørslevkloster kan du udvikle dig</li>
                </ul>
            

                    <p>Har du lyst til at høre mere om fodboldafdelingen kan du kontakte <Link href="fodboldudvalget">fodboldudvalget</Link></p>
            </div>
            
        </>
    );
}

export default Fodbold;