import { useState, useEffect } from "react";

import api from "../../../services/apis";

import { Container, Button } from "./styles";
import history from "../../../services/history";

import { CheckBox } from "../../../components/CheckBox";

export function MovieList() {
  const [moviesList, setMoviesList] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [disabled, setDisabled] = useState(false);

  async function loadFilmes() {
    const response = await api.get();
    setMoviesList(response.data);
  }

  function handleCheck(movie) {
    if (selectedMovies.filter((e) => e.id === movie.id).length > 0) {
      setSelectedMovies(selectedMovies.filter((e) => e.id !== movie.id));
    } else {
      setSelectedMovies([...selectedMovies, movie]);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api({
      method: "post",
      url: "/Qualifiers",
      data: selectedMovies,
    });

    history.push({
      pathname: "/results",
      state: { movies: response.data },
    });
  }

  useEffect(() => {
    loadFilmes();
  }, []);

  useEffect(() => {
    setDisabled(selectedMovies.length >= 8 ? true : false);
  }, [selectedMovies]);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="contador">
            Selecionados {selectedMovies.length} de 8 filmes
          </label>
          <Button type="submit" disabled={!disabled}>
            Gerar Campeonato
          </Button>
        </div>

        <ul>
          {moviesList?.map((m) => (
            <li key={m.id}>
              <CheckBox
                onChange={(e) => handleCheck(m)}
                disabled={
                  !selectedMovies.find((e) => e.id === m.id) && disabled
                }
              />

              <div className="movie-information">
                <label>{m.titulo}</label>
                <p>{m.ano}</p>
              </div>
            </li>
          ))}
        </ul>
      </form>
    </Container>
  );
}
