import styled from 'styled-components';

export const CSection = styled.section`
  max-width: 410px;
  min-height: 350px;
  padding: 35px 25px 25px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(58, 58, 59, 1) 0%,
    rgba(96, 96, 96, 1) 100%
  );
  border-radius: 8px;
  gap: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Sulphur Point', sans-serif;
`;

export const Title = styled.h2`
  color: #d5a0e9;
  font-size: 28px;
`;
