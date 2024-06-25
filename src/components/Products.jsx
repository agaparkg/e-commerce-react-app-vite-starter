import { useState } from "react";
import { formatCompany } from "../utils/utils";
import PageHero from "./PageHero";
import SingleProduct from "./SingleProduct";
import { products } from "../features/products/products-data";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllState } from "../features/products/productsSlice";

function Products() {
  const [priceInputVal, setPriceInputVal] = useState(50);
  const [searchVal, setSearchVal] = useState("");
  const [companyName, setCompanyName] = useState("all");
  // const [filteredProducts, setFilteredProducts] = useState([])

  const { pathname } = useLocation();

  const { products } = useSelector(selectAllState); // Filter products by priceInputVal, searchVal, companyName

  let filteredProducts = products.filter((p) => {
    return (p.fields.price / 100).toFixed(2) < priceInputVal;
  });

  filteredProducts =
    companyName === "all"
      ? filteredProducts
      : filteredProducts.filter((fp) => {
          return fp.fields.company === companyName;
        });

  const companies = ["all", ...new Set(products.map((p) => p.fields.company))]; // ["ikea", "liddy", ...]

  if (searchVal.trim()) {
    filteredProducts = filteredProducts.filter((fp) => {
      return (
        fp.fields.company.includes(searchVal) ||
        fp.fields.name.includes(searchVal)
      );
    });
  }

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceInputVal(+value);
  };

  const changeCompanyProducts = (name) => {
    setCompanyName(name);
  };

  const handleProductSearch = (e) => {
    const value = e.target.value;
    setSearchVal(value);
  };

  return (
    <>
      <PageHero path={pathname} />
      <section className="products">
        {/* filters */}
        <div className="filters">
          <div className="filters-container">
            {/* search */}
            <form className="input-form">
              <input
                type="text"
                className="search-input"
                placeholder="search..."
                value={searchVal}
                onChange={handleProductSearch}
              />
              {searchVal && (
                <i
                  onClick={() => setSearchVal("")}
                  className="fa fa-times clear-search"
                ></i>
              )}
            </form>
            {/* companies list */}
            <h4>Company</h4>
            <article className="companies">
              {/* "company-btn active" : "company-btn" */}
              {companies.map((c, ind) => {
                const btnClass =
                  c === companyName ? "company-btn active" : "company-btn";

                return (
                  <button
                    key={ind}
                    onClick={() => changeCompanyProducts(c)}
                    className={btnClass}
                  >
                    {c}
                  </button>
                );
              })}
            </article>
            {/* price */}
            <h4>Price</h4>
            <form className="price-form">
              <input
                type="range"
                className="price-filter"
                min="0"
                value={priceInputVal}
                max="100"
                onChange={handlePriceChange}
              />
            </form>
            <p className="price-value">Value: ${priceInputVal}</p>
          </div>
        </div>
        {/* products */}
        <div className="products-container">
          {filteredProducts.length !== 0 ? (
            filteredProducts.map((fp) => {
              return <SingleProduct fp={fp} key={fp.id} />;
            })
          ) : (
            <h3 className="filter-error">
              sorry, no products matched your search
            </h3>
          )}
        </div>
      </section>
    </>
  );
}

export default Products;
