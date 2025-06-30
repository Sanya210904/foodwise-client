export const calculateShopCartContentSize = (
  productAmount: number,
  sizes: {
    productBlockHeight: number;
    productBlockSpacing: number;
    dividerHeight: number;
    topOffset: number;
    bottomOffset: number;
    buttonOffset: number;
    buttonHeight: number;
  },
) => {
  const {
    productBlockHeight,
    productBlockSpacing,
    dividerHeight,
    topOffset,
    bottomOffset,
    buttonOffset,
    buttonHeight,
  } = sizes;
  const productBlockHeights = productAmount * productBlockHeight;
  const spacingBetweenProducts =
    Math.max(0, productAmount - 1) * productBlockSpacing;
  const dividersHeight = Math.max(0, productAmount - 1) * dividerHeight;

  return (
    productBlockHeights +
    spacingBetweenProducts +
    dividersHeight +
    topOffset +
    bottomOffset +
    buttonOffset +
    buttonHeight
  );
};
