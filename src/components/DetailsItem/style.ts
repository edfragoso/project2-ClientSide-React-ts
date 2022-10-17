import styled, { css } from "styled-components";

export const DetailItem = styled.div`
	${() => css`
		display: flex;
		gap: 15px;
	`}
`;

// export const OrderItemLeft = styled.div`
// 	${() => css`
// 		display: flex;
// 		flex-direction: column;
// 		gap: 10px;
// 		width: 70%;
// 	`}
// `;

// export const OrderItemLeftTop = styled.div`
// 	${() => css`
// 		display: flex;
// 		justify-content: space-between;
// 		/* Chrome */
// 		input::-webkit-outer-spin-button,
// 		input::-webkit-inner-spin-button {
// 			-webkit-appearance: none;
// 			margin: 0;
// 		}
// 		/* Firefox */
// 		input[type="number"] {
// 			-moz-appearance: textfield;
// 		}
// 	`}
// `;

// export const OrderItemLeftObservation = styled.input`
// 	${({ theme }) => css`
// 		${theme.mixins.input()};
// 		color: ${theme.colors.textColor};
// 	`}
// `;

// export const OrderItemRight = styled.div`
// 	${() => css`
// 		display: flex;
// 		flex-direction: column;
// 		gap: 10px;
// 	`}
// `;

// export const OrderItemRightTotalPrice = styled.span`
// 	${({ theme }) => css`
// 		${theme.mixins.bodyStyle()};
// 		font-weight: 500;
// 		font-size: 16px;
// 		height: 48px;
// 		display: flex;
// 		align-items: center;
// 	`}
// `;

// export const OrderItemRightTrash = styled.button`
// 	${({ theme }) => css`
// 		${theme.mixins.buttonOutline(theme.colors.secondaryColor, true)};
// 	`}
// `;

// export const OrderItemQuantity = styled.input`
// 	${({ theme }) => css`
// 		${theme.mixins.input()};
// 		width: 48px;
// 		text-align: center;
// 		color: ${theme.colors.textColor};
// 	`}
// `;

export const DetailsItemProduct = styled.div`
	${() => css`
		display: flex;
	`}
`;

export const DetailsItemProductImage = styled.img`
	${() => css`
		width: 45px;
		height: 45px;
	`}
`;

export const ItemProductDetails = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		margin-left: 100px;
		gap: 5px;
		${theme.mixins.bodyStyle()};
	`}
`;

export const ItemProductDetailsTitle = styled.span`
	${() => css`
		font-weight: 500;
	`}
`;

export const ItemProductDetailsDescription = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.textLight};
		font-size: 12px;
	`}
`;

export const ItemProductDetailsScore = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.textLight};
		font-size: 12px;
	`}
`;

export const DetailsItemProductYoutube = styled.div`
	${() => css`
		width: 45px;
		height: 45px;
	`}
`;

export const DetailsItemProductGameplay = styled.div`
	${() => css`
		width: 45px;
		height: 45px;
	`}
`;