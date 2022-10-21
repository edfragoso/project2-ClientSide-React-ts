import styled, { css } from "styled-components";

export const Home = styled.section`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.baseBg1};
    max-width: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    align-content: center;

    justify-content: center;
  `}
`;

export const HomeContent = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    border-radius: 5px;
    width: 80%;
    margin: 50px 60px;
    align-items: center;
  `}
`;

export const HomeContentItems = styled.div`
  ${() => css`
    padding: 5px;
  `}
`;

export const ProductItemListHeaderName = styled.h1`
  ${() => css`
    margin-left: 300px;
    margin-top: 7rem;
  `}
`;
