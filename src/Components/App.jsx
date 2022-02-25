import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Apartment from "./Apartment";
import apartments from "../apartments";

function makeApartment(apartment) {
  return (
    <Apartment
      key={apartment.id}
      name={apartment.name}
      url={apartment.url}
      price={apartment.price}
      area={apartment.area}
      work1={apartment.work1}
      work2={apartment.work2}
      church={apartment.church}
      pros={apartment.pros}
      cons={apartment.cons}
    />
  );
}

function app() {
  return (
    <div id="page-container">
      <Header />
      <div id="content-container">{apartments.map(makeApartment)}</div>
      <div id="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default app;
