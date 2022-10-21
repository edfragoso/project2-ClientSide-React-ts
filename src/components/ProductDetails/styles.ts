import styled, { css } from "styled-components";

export const ProductDetail = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg1};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
    align-items: center;
    max-width: 200px;
    width: 100%;
    min-height: 225px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 10px;
    }
  `}
`;
export const ProductItemDetailImage = styled.img`
  ${() => css`
    width: 150px;
    margin-top: -50px;
  `}
`;

export const ProductItemDetailName = styled.h3`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    text-align: center;
    max-width: 90%;
    margin: 0;
  `}
`;
export const ProductItemDetailYear = styled.strong`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    text-align: center;
    max-width: 90%;
    margin: 0;
    color: ${theme.colors.primaryColor};
  `}
`;
export const ProductItemDetailScore = styled.small`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    text-align: center;
    max-width: 90%;
    margin: 0;
    font-size: 12px;
  `}
`;
export const ProductItemDetailDescription = styled.strong`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    text-align: center;
    max-width: 90%;
    margin: 0;
    color: ${theme.colors.primaryColor};
  `}
`;
export const ProductItemDetailYoutube = styled.strong`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    text-align: center;
    max-width: 90%;
    margin: 0;
    color: ${theme.colors.primaryColor};
  `}
`;
export const ProductItemDetailGameplay = styled.strong`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()}
    text-align: center;
    max-width: 90%;
    margin: 0;
    color: ${theme.colors.primaryColor};
  `}
`;
