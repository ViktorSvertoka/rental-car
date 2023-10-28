import styled from '@emotion/styled';

export const WrapperFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 128px;
  padding-right: 128px;
  padding-top: 40px;
`;

export const WrapperList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 29px;
  margin-top: 50px;
  width: 1184px;
  margin-left: auto;
  margin-right: auto;
`;

export const LoadMore = styled.a`
  color: #3470ff;
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
  cursor: pointer;

  &:hover {
    color: #0b44cd;
  }
`;
