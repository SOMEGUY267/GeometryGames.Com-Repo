import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cuboid as Cube3d, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <Cube3d 
              className="h-8 w-8 text-accent transition-transform duration-500 group-hover:rotate-[360deg]" 
            />
            <span className="text-xl md:text-2xl font-orbitron font-bold">
              <span className="text-accent">Geometry</span>
              <span className="text-accent-alt">Games</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 hover:text-accent ${
                location.pathname === '/' ? 'text-accent' : 'text-text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/#games" 
              className="font-medium transition-colors duration-200 hover:text-accent"
            >
              Games
            </Link>
            <Link 
              to="/#about" 
              className="font-medium transition-colors duration-200 hover:text-accent"
            >
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-secondary mt-2 px-4 py-4 absolute left-0 right-0 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 hover:text-accent ${
                location.pathname === '/' ? 'text-accent' : 'text-text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/#games" 
              className="font-medium transition-colors duration-200 hover:text-accent"
            >
              Games
            </Link>
            <Link 
              to="/#about" 
              className="font-medium transition-colors duration-200 hover:text-accent"
            >
              About
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;