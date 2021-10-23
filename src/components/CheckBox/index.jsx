import { Container } from "./styles";

export function CheckBox({ checked, disabled, onChange, ...rest }) {
  return (
    <Container disabled={disabled}>
      <input
        type="checkbox"
        {...rest}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
      />
      <span className="checkbox" />
    </Container>
  );
}

CheckBox.defaultProps = {
  disabled: false,
};
