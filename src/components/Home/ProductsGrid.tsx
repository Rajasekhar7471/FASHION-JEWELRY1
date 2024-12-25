import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Product, ProductResponse } from "../../lib/types";
import { HeartIcon, ShoppingBag, StarIcon } from "lucide-react";
import { useWishlistCart } from "../../lib/contexts/UserData";
import HeroSection from "./Hero";

function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const limit = 12;

  async function fetchProducts() {
    setLoading(true);
    try {
      const url = query
        ? `https://dummyjson.com/products/search?q=${query}&skip=${
            (page - 1) * limit
          }&limit=${limit}`
        : `https://dummyjson.com/products?skip=${
            (page - 1) * limit
          }&limit=${limit}`;
      const response = await axios.get<ProductResponse>(url);
      setProducts(response.data.products);
      setTotal(response.data.total);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    fetchProducts();
  }, [query, page]);

  const totalPages = Math.ceil(total / limit);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {!query && <HeroSection />}

      {query ? (
        <h2 className="text-xl font-bold mb-5">
          Showing results for: <span className="text-blue-500">{query}</span>
        </h2>
      ) : (
        <h2 className="text-xl w-full text-center font-bold mt-10 mx-auto mb-5">
          All Products
        </h2>
      )}

      <div className="grid mx-3 grid-cols-1 md:grid-cols-4 gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-2">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductGrid;

interface ProductProps {
  product: Product;
}
function ProductCard({ product }: ProductProps) {
  const {
    addToWishlist,
    removeFromWishlist,
    wishlist,
    addToCart,
    removeFromCart,
    cart,
  } = useWishlistCart();
  const [isAlreadyInWishlist, setIsAlreadyInWishlist] =
    useState<boolean>(false);
  const [isAlreadyInCart, setIsAlreadyInCart] = useState<boolean>(false);

  useEffect(() => {
    const isProductInWishlist = wishlist.some((item) => item.id === product.id);
    setIsAlreadyInWishlist(isProductInWishlist);

    const isProductInCart = cart.some((item) => item.id === product.id);
    setIsAlreadyInCart(isProductInCart);
  }, [wishlist, cart, product.id]);

  const handleWishListClick = () => {
    if (isAlreadyInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleCartClick = () => {
    if (isAlreadyInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="relative p-5 border border-gray-200 rounded-lg bg-gray-50">
      <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer">
        <HeartIcon
          style={{
            color: isAlreadyInWishlist ? "red" : "gray",
          }}
          onClick={handleWishListClick}
          className="w-5 h-5 text-gray-500"
        />
      </div>

      <a href={"/product/" + product.id}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
      </a>

      <a href={"/product/" + product.id} className="">
        <div className="text-lg mt-3 font-semibold">{product.title}</div>
        <div className="text-sm">${product.price}</div>
        <div className="text-sm flex items-center gap-2">
          {product.rating} <StarIcon className="w-4" />
        </div>
      </a>

      <button
        onClick={handleCartClick}
        className={`mt-4 w-fit px-3 mt-4 py-1.5 items-center mx-auto flex gap-2 rounded-lg text-sm  text-white ${
          isAlreadyInCart
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        <ShoppingBag className="w-4 h-4" />
        {isAlreadyInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
