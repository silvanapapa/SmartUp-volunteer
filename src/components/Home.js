import Section from "./Section.js";
import Premii from "./Premii.js";
import Wrapper from "./Wrapper.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Team from "./Team";
import Parteneri from "./Parteneri";
 
function Home() {
    return (<>
       <Header/>
       <br/>
       <br/>
       <br/>
       <br/>
       <div class="container">
            <h1 style={{textAlign: "center", margin:"80px 0px"}}>Premiile proiectului</h1>
              <div class="row">
                  <Premii />
              </div>
        </div>
       <Team/>
       <Parteneri/>
       <Footer/>
    </>);
}
 
export default Home;