import Layout from "../layout";
import ProductGrid from "../components/Home/ProductsGrid";

const Home = () => {
  return (
    <Layout>
      <div className="mt-[80px]">
        <ProductGrid />
      </div>
    </Layout>
  );
};

export default Home;
