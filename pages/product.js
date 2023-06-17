import { getData } from "@/utils/dataFetch";
import React, { useState } from "react";
import Head from "next/head";
import ProductItem from "@/components/ProductItem"

const Product = (props) => {
  const [products, setProducts] = useState(props.products);
  
  
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

// server side rendering
export async function getServerSideProps() {
  
  const res = await getData("product");
  console.log(res);

  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}

export default Product;
