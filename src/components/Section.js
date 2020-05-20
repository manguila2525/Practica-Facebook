import React from "react";

export default function Section(props) {
  return (
    <>
      <div className="container col-md-4 my-4">
        <section>
          <h3 className="text-center titulo">{props.titulo}</h3>
        </section>
      </div>
    </>
  );
}
