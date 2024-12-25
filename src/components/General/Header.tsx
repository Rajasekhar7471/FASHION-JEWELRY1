import React, { useState } from "react";
import { useWishlistCart } from "../../lib/contexts/UserData";
import { HeartIcon, ShoppingBagIcon, XIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlistCart();
  const { cart } = useWishlistCart();
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const togglePopover = () => {
    setIsPopoverVisible((prev) => !prev);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-lg font-bold">
            <div className="text-lg font-bold">Jewels</div>
          </Link>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full max-w-md mx-auto"
        >
          <input
            type="text"
            className="border rounded-l-md px-4 py-2 w-full"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-black px-4 py-2 rounded-r-md"
          >
            Search
          </button>
        </form>

        {/* Icons */}
        <div className="">
          <ul className="flex gap-6">
            {/* Cart Icon */}
            <li>
              <Link to="/cart" className="relative">
                <ShoppingBagIcon size={24} />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>

            {/* Wishlist Icon */}
            <li>
              <a className="relative cursor-pointer" onClick={togglePopover}>
                <HeartIcon size={24} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1">
                    {wishlist.length}
                  </span>
                )}
              </a>
              {isPopoverVisible && (
                <div className="absolute z-10 bg-white shadow-lg right-0 rounded-lg mt-2 w-[300px]">
                  <ul className="p-2">
                    {wishlist.length > 0 ? (
                      wishlist.map((item) => (
                        <li
                          key={item.id}
                          className="py-1 px-2 flex items-center gap-4 border my-2 rounded-lg hover:bg-gray-100"
                        >
                          <img
                            src={item.thumbnail}
                            className="w-14"
                            alt={item.title}
                          />
                          <div className="flex-1">
                            <div>{item.title}</div>
                            <div className="text-sm text-gray-500">
                              ${item.price}
                            </div>
                          </div>
                          <XIcon
                            size={16}
                            className="text-red-500 cursor-pointer"
                            onClick={() => removeFromWishlist(item.id)}
                          />
                        </li>
                      ))
                    ) : (
                      <li className="py-1 px-2 text-gray-500">
                        No items in wishlist
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
