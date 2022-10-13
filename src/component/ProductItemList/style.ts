import styled, { css } from "styled-components";

export const ProductItemListHeader = styled.div`
	${() => css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
	`}
`;

export const ProductItemListHeaderTitle = styled.h1`
	${() => css`
		margin: 0;
	`}
`;

export const ProductItemListHeaderSelect = styled.select`
	${({ theme }) => css`
		${theme.mixins.select()};
	`}
`;

export const ProductItemList = styled.div`
	${() => css`
		justify-content: center;
		margin-top: 75px;
		display: flex;
		gap: 75px 20px;
		flex-wrap: wrap;
	`}
`;