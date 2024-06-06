import styled from 'tailwind';

/* eslint-disable-next-line */
export interface NewExportedComponentProps {}

const StyledNewExportedComponent = styled.div`
  color: pink;
`;

export function NewExportedComponent(props: NewExportedComponentProps) {
  return (
    <StyledNewExportedComponent>
      <h1>Welcome to NewExportedComponent!</h1>
    </StyledNewExportedComponent>
  );
}

export default NewExportedComponent;
