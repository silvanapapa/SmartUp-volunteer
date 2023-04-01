nimport "../App.css";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Footer from "./Footer";
import SectiuneAbc from "./SectiuneAbc";
import Eveniment from "./Eveniment";
import Section from "./Section";
 
function Sectiuni() {
    return (<>
        <Header/>
        <Section title="Secțiunile Abecedarului Carierei" />
        <SectiuneAbc
          img="./img/Education-01.png"
          id="education"
        />
        <Eveniment
          poza="./img/evenimente/anunt.png"
        />
        <SectiuneAbc
          img="./img/Entrepreneurship-01.png"
          id="entrepreneurship"
        />
        <Eveniment
          poza="./img/evenimente/anunt.png"
        />
        <SectiuneAbc
          img="./img/Employment-01.png"
          id="employment"
        />
        <Eveniment
          poza="./img/evenimente/anunt.png"
        />
        <Footer/>
    </>);
}
 
export default Sectiuni;