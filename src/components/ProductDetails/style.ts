import styled, { css } from "styled-components";

export const ProductDetails = styled.section`
	${({ theme }) => css`
		/* width: 350px; */
		justify-self: end;
		background: ${theme.colors.baseBg1};
		padding: 20px;
		box-sizing: border-box;
		overflow: auto;
		min-height: 100vh;
	`}
`;

export const ProductDetailsTitle = styled.h2`
	${({ theme }) => css`
		${theme.mixins.headingStyle()};
		font-size: 20px;
		font-weight: 600;
		margin: 0;
	`}
`;



export const ProductDetailsList = styled.div`
	${() => css`
		margin-top: 16px;
	`}
`;



export const ProductDetailsListGap = styled.div`
	${({ theme }) => css`
		height: 90px;
		background: ${theme.colors.baseBg1};
		border-radius: 8px;
	`}
`;





