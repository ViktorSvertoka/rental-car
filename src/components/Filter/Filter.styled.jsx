import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 50px;
  gap: 8px;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  height: 48px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  color: rgba(138, 138, 137, 1);
  font-family: 'Manrope';
  padding-left: 5px;
  margin-bottom: 8px;
`;

export const InputLeft = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: rgba(247, 247, 251, 1);
  border-radius: 14px 0 0 14px;
  padding-left: 0;
  text-indent: 70px;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;

  &:focus {
    outline-color: #3470ff;
  }
`;

export const InputRight = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  background-color: rgba(247, 247, 251, 1);
  border-radius: 0 14px 14px 0;
  padding-left: 0;
  text-indent: 45px;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;

  &:focus {
    outline-color: #3470ff;
  }
`;

export const SpanLeft = styled.span`
  position: absolute;
  display: block;
  left: 20px;
  top: 15px;
  z-index: 9;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;

export const SpanRight = styled.span`
  position: absolute;
  display: block;
  left: 180px;
  top: 15px;
  z-index: 9;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;
