import { useEffect } from "react";
import SingleProduct from "./SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllState,
  toggleLoading,
} from "../features/products/productsSlice";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  const { isLoading, featuredProducts } = useSelector(selectAllState);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(toggleLoading(true));
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
      <Link to="/products" className="btn">
        all products
      </Link>
    </section>
  );
}

export default FeaturedProducts;
