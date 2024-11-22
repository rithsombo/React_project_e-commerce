import React, { createContext, useState, useEffect } from "react";
import all_products from "../components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length; index++) {
    cart[index] = 0; // Initialize all items in the cart to 0
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  // Add to cart function
  const addToCart = (itemId) => {
    setCartItem((prev) => {
      const currentCount = prev[itemId] || 0; // Default to 0 if undefined
      return {
        ...prev,
        [itemId]: currentCount + 1, // Increment count for the given itemId
      };
    });
  };
  console.log(cartItem);

  // Remove from cart function
  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      const currentCount = prev[itemId] || 0; // Default to 0 if undefined
      if (currentCount <= 0) return prev; // Do nothing if count is already 0
      return {
        ...prev,
        [itemId]: currentCount - 1, // Decrement count for the given itemId
      };
    });
  };

  const getTotalCartAmout = () => {
    let totalAmout = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        totalAmout += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmout;
  };

  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    all_products,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmout,
    getTotalCartItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
