
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const { cart } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className={`font-bold text-2xl ${isScrolled ? "text-food-dark" : "text-white"}`}>
            FoodEats
            <span className="text-food-primary">.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`font-medium transition-colors hover:text-food-primary ${
              isScrolled ? "text-food-dark" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={`font-medium transition-colors hover:text-food-primary ${
              isScrolled ? "text-food-dark" : "text-white"
            }`}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className={`font-medium transition-colors hover:text-food-primary ${
              isScrolled ? "text-food-dark" : "text-white"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`font-medium transition-colors hover:text-food-primary ${
              isScrolled ? "text-food-dark" : "text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <div className={`font-medium ${isScrolled ? "text-food-dark" : "text-white"}`}>
                Hi, {user?.name.split(" ")[0]}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
                className={`hover:bg-food-primary hover:text-white ${
                  isScrolled ? "text-food-dark" : "text-white"
                }`}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button
                variant="ghost"
                size="sm"
                className={`hover:bg-food-primary hover:text-white ${
                  isScrolled ? "text-food-dark" : "text-white"
                }`}
              >
                <User className="h-5 w-5 mr-1" />
                Login
              </Button>
            </Link>
          )}
          
          <Link to="/cart" className="relative">
            <Button
              variant="ghost"
              size="icon"
              className={`hover:bg-food-primary hover:text-white ${
                isScrolled ? "text-food-dark" : "text-white"
              } ${cart.totalItems > 0 ? "animate-cart-bounce" : ""}`}
            >
              <ShoppingCart className="h-5 w-5" />
              {cart.totalItems > 0 && (
                <span className="cart-count-badge">
                  {cart.totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <Link to="/cart" className="relative">
            <Button
              variant="ghost"
              size="icon"
              className={`hover:bg-food-primary hover:text-white ${
                isScrolled ? "text-food-dark" : "text-white"
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              {cart.totalItems > 0 && (
                <span className="cart-count-badge">
                  {cart.totalItems}
                </span>
              )}
            </Button>
          </Link>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className={`transition-colors ${
              isScrolled ? "text-food-dark" : "text-white"
            } hover:bg-food-primary hover:text-white`}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-transform duration-300 transform ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <Link
            to="/"
            className="block py-2 text-food-dark font-medium hover:text-food-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="block py-2 text-food-dark font-medium hover:text-food-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="block py-2 text-food-dark font-medium hover:text-food-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-food-dark font-medium hover:text-food-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          
          <hr className="my-3" />
          
          {isAuthenticated ? (
            <div className="space-y-3">
              <div className="text-food-dark font-medium">
                Hi, {user?.name.split(" ")[0]}
              </div>
              <Button
                variant="ghost"
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-start hover:bg-food-primary hover:text-white"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Link
              to="/login"
              className="block w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button
                variant="outline"
                className="w-full justify-start hover:bg-food-primary hover:text-white hover:border-food-primary"
              >
                <User className="h-5 w-5 mr-1" />
                Login / Register
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
