import styled, { css } from "styled-components";
import { Theme } from "types/styled-components";

export const ManageUsers = styled.section`
  ${({ theme }) => css`
    padding: 20px;
    background: ${theme.colors.baseBg1};
  `}
`;

export const ManageUsersTitle = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.bodyStyle()};
    color: ${theme.colors.textColor};
    font-size: 20px;
    margin: 0;
  `}
`;

export const ManageUsersContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg2};
    border-radius: 10px;
    margin-top: 10px;
    justify-content: center;
    height: 400px;
    padding-bottom: 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    overflow: auto;
  `}
`;

export const ManageUsersContentAdd = styled.div`
  ${({ theme }) => css`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    max-height: 320px;
    padding: 0 10px;
    color: ${theme.colors.primaryColor};
    font-weight: 500;
    gap: 10px;
  `}
`;

export const ManageUsersActions = styled.div`
  ${() => css`
    margin-top: 20px;
    display: flex;
    gap: 10px;
  `}
`;

export const ManageUsersActionsCancel = styled.button`
  ${({ theme }) => css`
    width: 172px;
    ${theme.mixins.buttonOutline(theme.colors.secondaryColor)};
  `}
`;

export const ManageUsersActionsSave = styled.button`
  ${({ theme }) => css`
    width: 172px;
    ${theme.mixins.buttonFilled()};
  `}
`;

const EditFormMixins = {
  error: (theme: Theme) => css`
    border: 2px solid ${theme.colors.secondaryColor};
  `,
  success: (theme: Theme) => css`
    border: 2px solid ${theme.colors.primaryColor};
  `,
};

export const EditForm = styled.input<{ error?: boolean; success?: boolean }>`
  ${({ theme, error = false, success }) => css`
    ${theme.mixins.input()};
    color: ${theme.colors.textColor};
    ${error && EditFormMixins.error(theme)}
    ${success && EditFormMixins.success(theme)}
    &:valid[type="url"] {
      ${success && EditFormMixins.success(theme)}
    }
    &:invalid {
      ${EditFormMixins.error(theme)}
    }
  `}
`;
