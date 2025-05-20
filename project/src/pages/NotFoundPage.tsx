import React from 'react';
import { Link } from 'react-router-dom';
import { Home, GamepadIcon } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-8 inline-block">
          <div className="w-24 h-24 bg-secondary rotate-45 relative mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-orbitron font-bold text-accent -rotate-45">404</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
          Page Not Found
        </h1>
        
        <p className="text-text-secondary max-w-md mx-auto mb-8">
          Looks like you've hit a spike! The page you're looking for doesn't exist or has been moved to another dimension.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/"
            className="flex items-center px-6 py-3 bg-accent rounded-lg font-medium text-white transition-transform duration-300 hover:scale-105"
          >
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Link>
          
          <Link
            to="/#games"
            className="flex items-center px-6 py-3 bg-secondary rounded-lg font-medium text-text-primary transition-transform duration-300 hover:scale-105"
          >
            <GamepadIcon className="mr-2 h-5 w-5" />
            Browse Games
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;