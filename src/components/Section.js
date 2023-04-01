import React from 'react';

export default function Section(props) {
  return (
    <>
      <div className="col-md-12" style={{ marginTop: 10, marginBottom: 10 }}>
        <h2 style={{ marginBottom: 20 }}>{props.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
    </>
  );
}
