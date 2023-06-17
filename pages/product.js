/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from "next/link";
import ProductItem from "@/components/ProductItem";

const Home = () => {
  return (
    <div className="products">
      <Head>
        <title>Product Page</title>
      </Head>
      
      {
        products.length === 0 
        ? 
          <h2>Nothing Product List</h2> 
        :
          products.map(product => (
            <ProductItem key={product._id} product={product} />
          ))
      }
    </div>

  );
};

export default Home;
