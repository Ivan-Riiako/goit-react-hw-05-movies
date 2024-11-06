import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: ${p => p.theme.spacing(6)};
  
`;
export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  margin-bottom: ${p => p.theme.spacing(2)};
  color: ${p => p.theme.colors.accent};

  &:hover {
    background-color: teal;
  }
`;