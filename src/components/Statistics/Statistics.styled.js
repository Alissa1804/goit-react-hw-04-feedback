import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  min-width: 310px;
  min-height: 180px;
  align-items: center;
  gap: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  color: #d5a0e9;
  font-size: 28px;
`;

export const List = styled.ul`
  color: #fff;
  font-family: 'Dosis', sans-serif;
  min-width: 280px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  &::after {
    content: '';
    display: inline-block;
    flex-grow: 1;
    height: 1px;
    margin-right: 6px;
    margin-left: 6px;
    background-color: rgba(157, 164, 189, 0.12);
  }
`;

export const Span = styled.p`
  color: #d5a0e9;
  margin-left: 5px;
  font-size: 22px;
  order: 2;
`;

export const P = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 22px;
`;
