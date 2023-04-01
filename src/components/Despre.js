import Section from "./Section.js";
import Premii from "./Premii.js";
import Wrapper from "./Wrapper.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Team from "./Team";
import Parteneri from "./Parteneri";
 
function Despre() {
    return (<>
       <Header/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Wrapper>
            <Section
                
                title="Cum a luat naștere SmartUP Timișoara?"
                content="Abecedarul Carierei a fost un proiect marca OSUT, care a luat naștere în 2014, acesta îmbinând două proiecte de succes deja cunoscute în rândul studenților, și anume Economia de la A la Noi (EAN) și JobQuest, care a fost redenumit ca ABC-ul Angajării. Elementul de noutate îl constituia apariția secțiunii Antreprenoriatul de la A la Tine. SmartUp a apărut ca o inițiativă a studenților din OSUT, care au vrut sa redea o nouă înfățișare a proiectului deja consacrat Abecedarul Carierei, însă scopul principal rămâne același: de a ghida tinerii la început de drum spre o carieră de succes. În urma redenumirii proiectului, și secțiunile au suferit niște modificări, acestea primind denumirile: Education, Employment și Entrepreneurship. 
                <br>
                <b>Education</b> reprezintă fosta secțiune Economia de la A la Noi, aceasta va aborda diferite teme, în acest an fiind din sfera educației economice. Participanții își vor putea însuși cunoștințe din domeniul financiar, economic și  despre gestionarea bugetului. 
                <br>
                <b>Employment</b>, secțiunea cunoscută în trecut ca ABC-ul Angajării, va cuprinde un târg de angajabilitate și workshop-uri despre cum să se creeze o cariera incredibilă. 
                <br>
                <b>Entrepreneurship</b> va reprezenta Antreprenoriatul de A la Tine, secțiunea susține dezvoltarea spiritului de antreprenoriat în rândul tinerilor, dar este și o punte de plecare ideală pentru crearea unei afaceri de succes. "
            />
            <Premii />
            <Team/>
            <Parteneri/>
        </Wrapper>
        <Footer/>
    </>);
}
 
export default Despre;