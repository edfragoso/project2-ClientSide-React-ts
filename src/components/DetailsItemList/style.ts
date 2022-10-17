import styled, { css } from "styled-components";

export const ProductItemListTitle = styled.header`
	${({ theme }) => css`
		${theme.mixins.bodyStyle()};
		padding-bottom: 15px;
		font-weight: 600;
	`}
`;

export const ProductItemList = styled.main`
	${({ theme }) => css`
		padding: 15px 0;
		border-top: 1px solid ${theme.colors.baseLine};
		border-bottom: 1px solid ${theme.colors.baseLine};
		display: flex;
		flex-direction: column;
		gap: 25px;
	`}
`;