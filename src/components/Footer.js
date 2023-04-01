import React from "react";
import Wrapper from "./Wrapper";
import Parteneri from "./Parteneri";

export default function Footer() {
  return (
    <>
      <footer>
        <Wrapper>
          <div class="col-md-6 mb">
            <h4>Proiect marca OSUT</h4>
            <h6>Organizația Studenților din Universitatea de Vest din Timișoara</h6>
            <ul>
              <li>
                <img src="location.png"
                style={{
                  width: "30px",
                  marginRight: "2%",
                  marginBottom: "10px",
                  marginLeft: "1.2%",
                }}
              />
              <a href="https://www.google.com/maps/place/Bulevardul+Vasile+P%C3%A2rvan+4,+Timi%C8%99oara+300222/@45.7473344,21.2291348,17z/data=!3m1!4b1!4m5!3m4!1s0x47455d54949311ab:0x3a74d0271efa99ad!8m2!3d45.7473307!4d21.2313235">bd. Vasile Pârvan nr. 4, etaj 2, cam.247</a></li>
              <li>
                &nbsp;
                <img
                  src="phone-icon.png"
                  style={{
                    width: "26px",
                    marginRight: "2%",
                    marginBottom: "10px",
                    marginLeft: "1.2%",
                  }}
                />
                <a href="tel:0256 592 181">(+40) 256 592 181 </a>
              </li>
              <li>
                &nbsp;&nbsp;
                <img
                  src="icon_mail.png"
                  style={{
                    width: "30px",
                    marginRight: "2%",
                    marginBottom: "10px",
                  }}
                />
                <a href="mailto:office@osut.ro">office@osut.ro </a>
              </li>
            </ul>
          </div>
          <div class="col-md-6 mb" class="delimitator-footer" id="sm-display">
            {/* <Parteneri /> */}
            {/* <img src="logo_alb2.png" class="logo-parteneri" /> */}
          </div>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <div class="col-md-2 mb">
            <h4>Find us at:</h4>
            <a
              target="_blank"
              href="https://www.facebook.com/abcdarul.carierei"
            >
              <img class="logo-social" src="facebook.png" 
              style={{
                width: "30px",
                marginRight: "6%",
                marginLeft: "2px",
                marginBottom: "8px",
                }} />
               Facebook
            </a>
            <br/>
           <a
              target="_blank"
              href="https://www.instagram.com/abecedarulcarierei/"
            >
              <img class="logo-social" src="instagram1.png"
              style={{
                width: "30px",
                marginRight: "6%",
                marginLeft: "3px",
                marginBottom: "8px",
                }} 
                />
               Instagram
            </a>
            <br/>
            <a target="_blank" href="https://abc.osut.ro">
              <img
                class="logo-social"
                src="website1.png"
                style={{
                  width: "36px",
                  marginRight: "0.5%",
                  marginLeft: "0px",
                  borderRadius: "50%",
                }}
              />
              &nbsp;&nbsp;Website
            </a>
            <br />
            &nbsp;
            <img
              src="icon_mail.png"
              style={{
                width: "30px",
                marginBottom: "10px",
                marginLeft: "0px",
              }}
            />
            <a href="mailto:smartup@osut.ro">smartup@osut.ro</a>
          </div>
        </Wrapper>
      </footer>
    </>
  );
}
