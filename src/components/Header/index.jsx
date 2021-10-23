import { Container } from "./styles";

export function Header({ subtitle, title, description }) {
  return (
    <Container>
      <span>{subtitle}</span>
      <h1>{title}</h1>
      <hr />
      <p>{description}</p>
    </Container>
  );
}
