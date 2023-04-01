import React from "react";

export default function Wrapper(props) {
  return (
    <>
      <div class="wrapper">
        <div class="container-fluid">
          <div class="row" data-aos="fade-up">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}
