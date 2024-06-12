import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { products } from "../features/products/products-data";

function FeaturedProducts() {
  const [isLoading, setIsLoading] = useState(false);
  const [featuredProducts] = useState(
    products.filter((p) => p.fields.featured)
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 500);
  }, []);

  const renderFeaturedProducts = featuredProducts.map((fp) => {
    return <SingleProduct fp={fp} key={fp.id} />;
  });

  return (
    <section className="section featured">
      <div className="title">
        <h2>
          <span>/</span> featured
        </h2>
      </div>
      <div className="featured-center section-center">
        {!isLoading ? (
          <h2 className="section-loading">loading...</h2>
        ) : (
          renderFeaturedProducts
        )}
      </div>
      <a href="#" className="btn">
        all products
      </a>
    </section>
  );
}

export default FeaturedProducts;
