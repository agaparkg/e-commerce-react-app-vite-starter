import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { displayNavBar } from '../features/products/productsSlice';

function SideBar() {
  const showNavBar = useSelector((store) => store.productsState.showNavBar);
  const dispatch = useDispatch();
  const showNavBarClassName = showNavBar
    ? 'sidebar-overlay show'
    : 'sidebar-overlay';

  return (
    <div className={showNavBarClassName}>
      <aside className='sidebar'>
        {/* close */}
        <button
          onClick={() => dispatch(displayNavBar())}
          className='sidebar-close'
        >
          <i className='fa fa-times'></i>
        </button>
        {/* links */}
        <ul className='sidebar-links'>
          <li>
            <Link
              onClick={() => dispatch(displayNavBar())}
              to='/'
              className='sidebar-link'
            >
              <i className='fa fa-home fa-fw'></i>
              home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => dispatch(displayNavBar())}
              to='/products'
              className='sidebar-link'
            >
              <i className='fa fa-couch fa-fw'></i>
              products
            </Link>
          </li>
          <li>
            <Link
              onClick={() => dispatch(displayNavBar())}
              to='/about'
              className='sidebar-link'
            >
              <i className='fa fa-book fa-fw'></i>
              about
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default SideBar;
