import React from "react";
import Card from "./Card";
import Section from "./Section";
const cardListData = [
  {
    username: "New Proyect",
    image:
      "https://cnnespanol2.files.wordpress.com/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1",
    history:
      "Lorem Ipsum se trata de en un escrito que se utiliza en diseño gráfico para probar tipográficas o borradores de diseños antes de incluir el texto final. ... “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    username: "Hello world",
    image:
      "https://files.genial.guru/files/news/part_51/512160/419660-23603010-03finished-0-1509442137-1509442149-2000-1-1509442149-650-04f9ebaa03-1511556706.jpg",
    history:
      "Lorem Ipsum se trata de en un escrito que se utiliza en diseño gráfico para probar",
  },
  {
    username: "Good Moorning",
    image:
      "data:image/jpeg;base64,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",
    history:
      " se utiliza en diseño gráfico para probar tipográficas o borradores de diseños antes d",
  },
  {
    username: "HOlaqifno",
    image:
      "https://i.pinimg.com/originals/15/29/0b/15290bbc53d23acf89de16f6e8274473.jpg",
    history:
      " se utiliza en diseño gráfico para probar tipográficas o borradores de diseños antes d",
  },
];

function Principal() {
  return (
    <div className="container">
    <div className="fondo">
      <div className="jumbotron">
      <div className="row">
        <div className="col-md-6 ">
      <h1 className=" text-center my-5 display-4">Bienvenidos a Facebook</h1>
      </div>
        <div className="col-md-6 col-sm-4">
          <img className="imgg" src="./images/pete-pedroza-xITnxxlzGAE-unsplash.jpg" alt=""/>
        </div>
      </div>
      </div>
    </div>
      
      <Section titulo="Facebook Posee" />
      <div className="row">
        {cardListData.map((cardData) => (
          <div key={cardData.username} className="col-md-4 col-sm-12 my-2">
            <Card key={cardData.username} {...cardData} />
          </div>
        ))}
      </div>
      <Section titulo="Los Mejores artistas" />
    </div>
  );
}
export default Principal;
