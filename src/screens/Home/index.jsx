import React from "react";
import { GridContainer } from "./styles";

import Header from "../../components/Header";
import BrinquedoEducativo from "../../components/BrinquedoEducativo";
import Proporciona from "../../components/Proporciona";
import Especificaçoes from "../../components/Especificações";
import Importancia from "../../components/Importancia";
import AlemDisso from "../../components/AlemDisso";
import Criatividade from "../../components/Criatividade";
import Footer from "../../components/Footer";

function Home() {
  return (
    <GridContainer>
      <Header />
      <BrinquedoEducativo />
      <Proporciona />
      <Especificaçoes />
      <Importancia />
      <AlemDisso />
      <Criatividade />
      <Footer />
    </GridContainer>
  );
}

export default Home;
