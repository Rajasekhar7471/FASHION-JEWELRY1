import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout";
import { Product } from "../lib/types";
import { useState, useEffect } from "react";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {}, [id]);

  return (
    <Layout>
      <div className="mt-[80px]">
        <h1>SingleProduct Details for ID: {id}</h1>
      </div>
      {/* You can fetch and display the SingleProduct details here using the SingleProductId */}
    </Layout>
  );
};

export default SingleProduct;
