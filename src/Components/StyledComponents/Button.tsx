import styled from "styled-components";
// placeholder button from docs
const StyledButton = styled.button<{ $primary?: boolean }>`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;
export const Button = () => {
  return (
    <div>
      <StyledButton>Normal</StyledButton>
      <StyledButton $primary>Primary</StyledButton>
    </div>
  );
};
