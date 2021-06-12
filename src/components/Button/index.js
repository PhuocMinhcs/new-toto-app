import styled from 'styled-components';

const Button = styled.button`
  border-radius: 4px;
  padding: 4px 10px;
  border: 1px solid #a1a1a1;
  background: ${props => props.color || '#fff'};
  margin: 5px;
  &:hover {
    background: gray;
    transition: background ease-in .2s;
  }
`;

export default Button;
