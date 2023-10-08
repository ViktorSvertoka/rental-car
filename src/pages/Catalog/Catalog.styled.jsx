import styled from '@emotion/styled';

export const WrapperFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 128px;
  padding-right: 128px;
`;

export const WrapperList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 29px;
  padding-left: 128px;
  padding-right: 128px;
  margin-top: 50px;
`;

export const LoadMoreButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
