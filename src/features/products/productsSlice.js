import { createSlice } from "@reduxjs/toolkit";
import { products } from "./products-data";
import { getStorageItem, setStorageItem } from "../../utils/utils";

const initialState = {
  products,
  isLoading: false,
  showCart: false,
  showCheckoutModal: false,
  cartProducts: getStorageItem("cartProducts"),
  featuredProducts: products.filter((product) => product.fields.featured),
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    displayCart: (state) => {
      state.showCart = !state.showCart;
    },
    displayCheckoutModal: (state) => {
      state.showCheckoutModal = !state.showCheckoutModal;
    },
    addProductToCart: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      let cartProduct = state.cartProducts.find((p) => p.id === action.payload);

      if (cartProduct) {
        cartProduct.count++;
      } else {
        cartProduct = product;
        cartProduct.count = 1;
        state.cartProducts.push(cartProduct);
        // cartProduct['count'] = 1
      }
      setStorageItem("cartProducts", state.cartProducts);
    },
    removeProductFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (cp) => cp.id !== action.payload
      );
    },
    increaseCartProductCount: (state, action) => {
      state.cartProducts.forEach((cp) => {
        if (cp.id === action.payload) {
          cp.count++;
        }
      });

      setStorageItem("cartProducts", state.cartProducts);
    },
    decreaseCartProductCount: (state, action) => {
      state.cartProducts.forEach((cp) => {
        if (cp.id === action.payload) {
          if (cp.count !== 1) {
            cp.count--;
          } else {
            state.cartProducts = state.cartProducts.filter(
              (cp) => cp.id !== action.payload
            );
          }
        }
      });

      setStorageItem("cartProducts", state.cartProducts);
    },
  },
});

// product = {
//   id: "sddfasdfs",
//   fields: {}
// }

// cartProduct = {
//   id: "sddfasdfs",
//   fields: {},
//   count: 1
// }

export const selectIsLoading = (store) => store.productsState.isLoading;
export const selectAllState = (store) => store.productsState;

export const {
  toggleLoading,
  displayCart,
  displayCheckoutModal,
  addProductToCart,
  removeProductFromCart,
  increaseCartProductCount,
  decreaseCartProductCount,
} = productsSlice.actions;

export default productsSlice.reducer;

// dispatch(toggleLoading(true))
