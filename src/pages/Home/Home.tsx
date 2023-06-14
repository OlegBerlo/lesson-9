import ProductList from "Components/Products/ProductList";

type Props = {
  addProductToCart: (id: number, count: number) => void;
};

const Home = ({ addProductToCart }: Props) => {
  return (
    <>
      <ProductList addProductToCart={addProductToCart} />
    </>
  );
};

export default Home;
