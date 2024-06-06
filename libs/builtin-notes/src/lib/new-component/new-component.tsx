import styled from 'tailwind';

/* eslint-disable-next-line */
export interface NewComponentProps {}

const StyledNewComponent = styled.div`
  color: pink;
`;

export function NewComponent(props: NewComponentProps) {
  return (
    <StyledNewComponent>
      <h1>Welcome to NewComponent!</h1>
    </StyledNewComponent>
  );
}

export default NewComponent;
