import styled from 'styled-components';

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border: 1px solid ${({ theme }) => theme.colors.midnightBlue};
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lavenderBlush};
    transition: all 700ms;
  }
`;
export const Scroll = styled.div`
  height: fit-content;
  overflow-y: auto;
  @media (max-width: 1919px) {
    height: 35vh;
  }
`;
