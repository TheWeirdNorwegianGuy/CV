import logo from './logo.svg';
import './App.css';
import DataCard from './DataCard/DataCard';
import me from "./me.jpg";
import { useState } from 'react';

function App() {

  const [personalia, setPersonalia] = useState(false);
  const [education, setEducation]   = useState(false);
  const [work, setWork]             = useState(false);
  const [interests, setInterests]   = useState(false);


  return (
    <div className="App">

      <div className={"Subsection " + (personalia ? "Open" : "")} onClick={() => setPersonalia(!personalia)}>
      <h1>Personalia</h1>
          <div className="Personalia">
            <div className='title'>Name</div>             <div className='element'>Henrik Fjellby Engenes</div>
            <div className='title'>Date of birth</div>    <div className='element'>05 02 1996</div>
            <div className='title'>Gender</div>           <div className='element'>Male</div>
            <div className='title'>Address</div>          <div className='element'>Torggata 43</div>
            <div className='title'>Post code/place</div>  <div className='element'>2317 Hamar</div>
            <div className='title'>Country</div>          <div className='element'>Norway</div>
            <div className='title'>Phonenr.</div>         <div className='element'>+4746465033</div>
            <div className='title'>Email</div>            <div className='element'>henrik.engenes@hotmail.com</div>
          </div>
      <img className='Me' src={me} alt="bilde av meg:)"/>
      </div>

      <div className={"Subsection " + (education ? "Open" : "")} onClick={() => setEducation(!education)}>
      <h1>Education</h1>
        <DataCard title="Høgskolen i Innlandet, avdeling Hamar" fromTo="08.2015 - 05.2020" position="Spillprogrammering">
          Utdanning i spillprogrammering, både om det å programmere spill, og hvordan spillsystemer er satt opp.
        </DataCard>
        <DataCard title="Saga Kurs og Kompetanse" fromTo="02.2020 - 03.2020" position="Vekterkurs">
          Et vekterkurs som ga gjennomgang i norsk lov og sikkerhetsmessig tankegang. Her tok jeg også håndjernskurs.
        </DataCard>
        <DataCard title="Hønefoss Videregående" fromTo="08.2012 - 06.20" position="Dataelektronikk">
          Elektrofaglig utdanning innen svakstrøm. Med integrert påbyggsår ga dette spesiell studiekompetanse.
        </DataCard>
      </div>

      <div className={"Subsection " + (work ? "Open" : "")} onClick={() => setWork(!work)}>
      <h1>Work</h1>
        <DataCard title="OnsiteSecurity Vaktdrift AS" fromTo="8.2020 - Current" position="Vekter">
          Ansatt som vekter på alarmsentral.
        </DataCard>
        <DataCard title="Manngard Vakt og Sikkerhet" fromTo="03.2020 - 05.2020" position="Vekter">
          Utelivsvekter for sesongtid i Trysil. Måtte permiteres pga. stenging av utesteder grunnet COVID-19.
        </DataCard>
        <DataCard title="Wennstrom Fuel Systems" fromTo="06.2019 - 07.2019" position="IT Service">
          Remote oppdatering av terminaler og kortlesere. Manuell testing av returnerte kortlesere.
        </DataCard>
        <DataCard title="Wennstrom Fuel Systems" fromTo="03.2019 - 03.2019" position="IT Service">
          Remote oppdatering av systemer på bensinstasjoner, inklusive å ringe stasjonene for midlertidig stenging.
        </DataCard>
        <DataCard title="Wennstrom Fuel Systems" fromTo="06.2018 - 08.2018" position="Lagermedarbeider">
          Behandling av varer i retur, og shipping til teknikere. Klargjøring av dataskap til stasjoner.
        </DataCard>
        <DataCard title="Wennstrom Fuel Systems" fromTo="06.2017 - 08.2017" position="Lagermedarbeider">
          Behandling av varer i retur, og shipping til teknikere. Klargjøring av pc-er til stasjoner.
        </DataCard>
        <DataCard title="Wennstrom Fuel Systems" fromTo="06.2015 - 08.2015" position="Lagermedarbeider">
          Behandling av varer i retur, og shipping til teknikere. Sortering av varer på lager.
        </DataCard>
        <DataCard title="Wennstrom Fuel Systems" fromTo="06.2014 - 08.2014" position="Arkivarbeider">
          Sortering og arkivering. Oppdatering av kundedata.
        </DataCard>
        <DataCard title="Hole Kommune" fromTo="06.2013 - 08.2013" position="Sommervikar">
          Diverse jobber for Hole Kommune. Inkluderer maling, tømmerbæring og kantklipping.
        </DataCard>
        <DataCard title="Nesberget AS" fromTo="01.2012 - 06.2012" position="Elektrikerlærling">
          Dog ikke en direkte lærling, er jeg oppdratt i elektriker-familie og har jobbet mye som en lærling gjennom livet. Har lagt strøm i leiligheter og varehus.
        </DataCard>
        <DataCard title="Hole Ungdommskole" fromTo="08.2009 - 12.2011" position="Kantine ansatt">
          Ansatt i skolens kantine, solgte diverse mat og drikke for skolen i lunspausen.
        </DataCard>
      </div>

      <div className={"Subsection " + (interests ? "Open" : "")} onClick={() => setInterests(!interests)}>
      <h1>Skills and interests</h1>
            Egenskaper:
        <ul>
            <li>Pliktoppfyllende.</li>
            <li>Systematisk.</li>
            <li>Lærer fort.</li>
            <li>Hyggelig.</li>
        </ul>
          Interesser inkluderer:
        <ul>  
            <li>Lesing av bøker, fortrinnnsvis på engelsk. Har dermed meget god engelsk forståelse.</li>
            <li>Data/TV-spill.</li>
            <li>Internett-surfing.</li>
        </ul>
      </div>

      <div className="Footer">
        <p>Made by Henrik F. Engenes.</p>
        <p>Thank you to Ludvig T. Risan for guidance and assistance.</p>
      </div>
    </div>
  );
}

export default App;
