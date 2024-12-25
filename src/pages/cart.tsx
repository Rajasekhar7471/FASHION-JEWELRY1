import React, { useState } from "react";
import { useWishlistCart } from "../lib/contexts/UserData";
import Layout from "../layout";
import { Product } from "../lib/types";
import { ArrowRight } from "lucide-react";

const Cart = () => {
  const { cart, wishlist, addToCart, removeFromWishlist, removeFromCart } =
    useWishlistCart();
  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    cart.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {} as { [key: string]: number })
  );

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity < 1) return; // Prevents zero or negative quantities
    setQuantities((prev) => ({ ...prev, [productId]: quantity }));
  };

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * (quantities[product.id] || 1),
    0
  );

  const handleCheckout = () => {
    alert("Feature not implemented yet");
  };

  return (
    <Layout>
      <div className="flex flex-col mt-40 h-screen">
        {/* Cart Section */}
        <div className="border rounded-xl w-[600px] mx-auto p-6 mb-10">
          <h2 className="text-2xl font-semibold">Cart</h2>
          <div className="flex flex-col mt-4">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map((product) => (
                <CheckOutItem
                  key={product.id}
                  product={product as Product}
                  quantity={quantities[product.id]}
                  onQuantityChange={(quantity) =>
                    // @ts-ignore
                    handleQuantityChange(product.id, quantity)
                  }
                  onRemove={() => removeFromCart(product.id)}
                />
              ))
            )}
          </div>
          {cart.length > 0 && (
            <div className="mt-4">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-semibold">Total Price:</h3>
                <p className="text-lg font-semibold">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
              <button
                onClick={handleCheckout}
                className="mt-4 bg-blue-500 flex gap-3 text-white px-4 py-2 rounded-md"
              >
                Checkout <ArrowRight />
              </button>
            </div>
          )}
        </div>

        {/* Wishlist Section */}
        <div className="border rounded-xl w-[600px] mx-auto p-6">
          <h2 className="text-2xl font-semibold">Wishlist</h2>
          <div className="flex flex-col mt-4">
            {wishlist.length === 0 ? (
              <p>Your wishlist is empty</p>
            ) : (
              wishlist.map((product) => (
                <WishlistItem
                  key={product.id}
                  product={product as Product}
                  onMoveToCart={() => {
                    addToCart(product);
                    removeFromWishlist(product.id);
                    setQuantities((prev) => ({ ...prev, [product.id]: 1 })); // Set default quantity to 1
                  }}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;

function CheckOutItem({
  product,
  quantity,
  onQuantityChange,
  onRemove,
}: {
  product: Product;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center justify-between w-full p-4 my-2 border rounded-md">
      <div className="flex items-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-16 h-16 object-cover"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-sm text-gray-500">${product.price}</p>
          <div className="flex items-center mt-2">
            <button
              onClick={() => onQuantityChange(quantity - 1)}
              className="px-2 py-1 border rounded-md text-gray-500 hover:bg-gray-200"
            >
              -
            </button>
            <p className="px-4">{quantity}</p>
            <button
              onClick={() => onQuantityChange(quantity + 1)}
              className="px-2 py-1 border rounded-md text-gray-500 hover:bg-gray-200"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={onRemove} className="text-red-500">
          Remove
        </button>
      </div>
    </div>
  );
}

function WishlistItem({
  product,
  onMoveToCart,
}: {
  product: Product;
  onMoveToCart: () => void;
}) {
  return (
    <div className="flex items-center justify-between w-full p-4 my-2 border rounded-md">
      <div className="flex items-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-16 h-16 object-cover"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-sm text-gray-500">${product.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={onMoveToCart}
          className="text-blue-500 hover:underline"
        >
          Move to Cart
        </button>
      </div>
    </div>
  );
}
