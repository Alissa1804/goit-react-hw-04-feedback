import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  color: #fff;
  font-family: inherit;
  font-size: 20px;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 5px;
  min-width: 110px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  &:hover {
    background: linear-gradient(
      90deg,
      rgba(137, 85, 195, 1) 39%,
      rgba(235, 70, 252, 1) 100%
    );
    border: 1px solid #fff;
    box-shadow: 0 4px 30px rgba(235, 70, 252, 1);
  }
`;
