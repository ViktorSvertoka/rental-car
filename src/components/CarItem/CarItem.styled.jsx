import styled from '@emotion/styled';

export const Wrapper = styled.li`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`;

export const Image = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const TitleWrap = styled.div`
  width: 274px;
  align-items: center;
  color: #121417;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Span = styled.span`
  color: #3470ff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Text = styled.p`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: fit-content;
  row-gap: 4px;
  margin-bottom: 28px;
  width: 255px;
  height: 40px;
  overflow: hidden;
`;

export const Item = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  :not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    padding-right: 6px;
  }
`;
