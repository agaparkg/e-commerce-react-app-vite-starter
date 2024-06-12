import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { formatCompany } from '../utils/utils';
import PageHero from './PageHero';
import SingleProduct from './SingleProduct';

function Products() {
  const [priceInputVal, setPriceInputVal] = useState(50);
  const [searchVal, setSearchVal] = useState('');
  const [companyName, setCompanyName] = useState('all');
  let location = useLocation();

  const products = useSelector((store) => store.productsState.products);

  let filteredProducts = products.filter((p) => {
    return (p.fields.price / 100).toFixed(2) < Number(priceInputVal);
  });

  const companies = ['all', ...new Set(products.map((p) => p.fields.company))];

  filteredProducts =
    companyName === 'all'
      ? filteredProducts
      : filteredProducts.filter((p) => p.fields.company === companyName);

  if (searchVal.trim()) {
    filteredProducts = filteredProducts.filter((p) => {
      let name = p.fields.company;
      name = name.toLowerCase();
      return name.startsWith(searchVal);
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
      <PageHero path={location.pathname} />
      <section className='products'>
        {/* filters */}
        <div className='filters'>
          <div className='filters-container'>
            {/* search */}
            <form className='input-form'>
              <input
                type='text'
                className='search-input'
                placeholder='search...'
                value={searchVal}
                onChange={handleProductSearch}
              />
              {searchVal && (
                <i
                  onClick={() => setSearchVal('')}
                  className='fa fa-times clear-search'
                ></i>
              )}
            </form>
            {/* companies list */}
            <h4>Company</h4>
            <article className='companies'>
              {companies.map((c, ind) => {
                const btnClass =
                  c === companyName ? 'company-btn active' : 'company-btn';
                return (
                  <button
                    onClick={() => changeCompanyProducts(c)}
                    key={ind}
                    className={btnClass}
                  >
                    {formatCompany(c)}
                  </button>
                );
              })}
            </article>
            {/* price */}
            <h4>Price</h4>
            <form className='price-form'>
              <input
                type='range'
                className='price-filter'
                min='0'
                value={priceInputVal}
                max='100'
                onChange={handlePriceChange}
              />
            </form>
            <p className='price-value'>Value: ${priceInputVal}</p>
          </div>
        </div>
        {/* products */}
        <div className='products-container'>
          {filteredProducts.map((fp) => {
            return <SingleProduct fp={fp} key={fp.id} />;
          })}
          {!filteredProducts.length && (
            <h3 className='filter-error'>
              sorry, no products matched your search
            </h3>
          )}
        </div>
      </section>
    </>
  );
}

export default Products;
