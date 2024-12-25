import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface WishlistCartContextType {
  wishlist: Product[];
  cart: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

const WishlistCartContext = createContext<WishlistCartContextType | undefined>(
  undefined
);

export const WishlistCartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [cart, setCart] = useState<Product[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => [...prev, product]);
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <WishlistCartContext.Provider
      value={{
        wishlist,
        cart,
        addToWishlist,
        removeFromWishlist,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </WishlistCartContext.Provider>
  );
};

export const useWishlistCart = (): WishlistCartContextType => {
  const context = useContext(WishlistCartContext);
  if (!context) {
    throw new Error(
      "useWishlistCart must be used within a WishlistCartProvider"
    );
  }
  return context;
};
