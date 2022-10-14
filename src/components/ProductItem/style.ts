import styled, { css } from "styled-components";

export const ProductItem = styled.div`
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
		cursor: pointer;
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

export const ProductItemImage = styled.img`
	${() => css`
		width: 150px;
		margin-top: -50px;
	`}
`;

export const ProductItemName = styled.h3`
	${({ theme }) => css`
		${theme.mixins.bodyStyle()}
		text-align: center;
		max-width: 90%;
		margin: 0;
	`}
`;

export const ProductItemPrice = styled.strong`
	${({ theme }) => css`
		${theme.mixins.bodyStyle()}
		text-align: center;
		max-width: 90%;
		margin: 0;
		color: ${theme.colors.primaryColor};
	`}
`;

export const ProductItemDescription = styled.small`
	${({ theme }) => css`
		${theme.mixins.bodyStyle()}
		text-align: center;
		max-width: 90%;
		margin: 0;
		font-size: 12px;
	`}
`;