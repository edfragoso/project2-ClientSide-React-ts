import styled, { css } from "styled-components";

export const ButtonLarge = styled.button`
	${({ theme }) => css`
		background: ${theme.colors.primaryColor};
		border: none;
		border-radius: 8px;
		color: ${theme.colors.textColor};
		display: flex;
		justify-content: center;
		align-items: center;
		height: 48px;
		width: 100%;
		cursor: pointer;
		${theme.mixins.bodyStyle()};
		font-weight: 600;
		box-shadow: 0px 8px 24px 0px ${theme.colors.shadowColor};
		&:disabled {
			color: ${theme.colors.textDark};
			background: ${theme.colors.baseBg1};
			box-shadow: none;
			cursor: not-allowed;
		}
	`}
`;