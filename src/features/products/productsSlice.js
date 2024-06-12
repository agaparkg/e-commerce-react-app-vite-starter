import { createSlice } from '@reduxjs/toolkit';
import { getStorageItem, setStorageItem } from '../../utils/utils.js';
import { products } from './products-data.js';

const initialState = {
  products,
  showCart: false,
  showNavBar: false,
  showCheckoutModal: false,
  cartProducts: getStorageItem('cartProducts'),
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    displayCart: (state) => {
      state.showCart = !state.showCart;
    },
    displayNavBar: (state) => {
      state.showNavBar = !state.showNavBar;
    },
    displayCheckoutModal: (state) => {
      state.showCheckoutModal = !state.showCheckoutModal;
    },
    addProductToCart: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      let cartProduct = state.cartProducts.find(
        (cp) => cp.id === action.payload
      );
      if (cartProduct) {
        cartProduct.count++;
      } else {
        cartProduct = product;
        cartProduct['count'] = 1;
        state.cartProducts.push(product);
      }
      setStorageItem('cartProducts', state.cartProducts);
    },
    removeProductFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (cp) => cp.id !== action.payload
      );
      setStorageItem('cartProducts', state.cartProducts);
    },
    increaseCartProductCount: (state, action) => {
      state.cartProducts.forEach((cp) => {
        if (cp.id === action.payload) {
          cp.count++;
        }
      });
      setStorageItem('cartProducts', state.cartProducts);
    },
    decreaseCartProductCount: (state, action) => {
      state.cartProducts.forEach((cp) => {
        if (cp.id === action.payload) {
          cp.count--;
        }
      });
      setStorageItem('cartProducts', state.cartProducts);
    },
  },
});

export const {
  displayCart,
  addProductToCart,
  removeProductFromCart,
  increaseCartProductCount,
  decreaseCartProductCount,
  displayCheckoutModal,
  displayNavBar,
} = productsSlice.actions;

export default productsSlice.reducer;
