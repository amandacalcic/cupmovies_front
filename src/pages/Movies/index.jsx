import React from "react";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { MovieList } from "./MovieList";

export default function Movies() {
  return (
    <Container>
      <Header
        subtitle="Campeonato de Filmes"
        title="Fase de Seleção"
        description="Selecione 8 filmes que você deseja que entrem na competição e depois
        pressione o botão Gerar Meu Campeonato para prosseguir."
      />
      <MovieList />
    </Container>
  );
}
