import React from 'react';
import { Link } from 'react-router-dom';
import { Cuboid as Cube3d, Github, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Cube3d className="h-6 w-6 text-accent" />
              <span className="text-lg font-orbitron font-bold">
                <span className="text-accent">Geometry</span>
                <span className="text-accent-alt">Games</span>
              </span>
            </Link>
            <p className="text-text-secondary mb-4">
              The best place to play Geometry Dash games online for free. No downloads required!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-orbitron text-text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-secondary hover:text-accent transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#games" className="text-text-secondary hover:text-accent transition-colors duration-200">
                  Games
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-text-secondary hover:text-accent transition-colors duration-200">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-orbitron text-text-primary">Games</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/game/1" className="text-text-secondary hover:text-accent transition-colors duration-200">
                  Geometry Dash
                </Link>
              </li>
              <li>
                <Link to="/game/2" className="text-text-secondary hover:text-accent transition-colors duration-200">
                  Geometry Dash Subzero
                </Link>
              </li>
              <li>
                <Link to="/game/3" className="text-text-secondary hover:text-accent transition-colors duration-200">
                  Geometry Dash Meltdown
                </Link>
              </li>
              <li>
                <Link to="/game/4" className="text-text-secondary hover:text-accent transition-colors duration-200">
                  Geometry Dash Nine Circles
                </Link>
              </li>
              <li>
                <Link to="/game/5" className="text-text-secondary hover:text-accent transition-colors duration-200">
                  Geometry Dash Explorers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary text-sm">
              © {new Date().getFullYear()} GeometryGames.com. All rights reserved.
            </p>
            <p className="text-text-secondary text-sm mt-4 md:mt-0 flex items-center">
              Made with <Heart className="h-4 w-4 text-accent-alt mx-1" /> for Geometry Dash fans
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;