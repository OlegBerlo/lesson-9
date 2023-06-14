import productsArray from "utils/productsArray";
type Props = {
  productsInCart: {
    [id: number]: number;
  };
};

const CartHeader = ({ productsInCart }: Props) => {
  return (
    <div>
      {Object.keys(productsInCart).map((productId) => (
        <div key={productId}>
          {productsArray[parseInt(productId)].title}:{" "}
          {productsInCart[parseInt(productId)]}
        </div>
      ))}
    </div>
  );
};

export default CartHeader;
