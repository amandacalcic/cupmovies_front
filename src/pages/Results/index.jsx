import PropTypes from "prop-types";

import { Container } from "./styles";

import { Header } from "../../components/Header";

export default function Results({ location }) {
  return (
    <Container>
      <Header
        subtitle="Campeonato de Filmes"
        title="Resultado Final"
        description="Veja o resultado final do Campeonato de filmes de forma simples e
        rápida."
      />

      <ul>
        {location.state.movies?.map((m, index) => (
          <li>
            <span>{index + 1}º</span>
            <label>{m.titulo}</label>
          </li>
        ))}
      </ul>
    </Container>
  );
}

Results.propTypes = {
  location: PropTypes.object.isRequired,
};
