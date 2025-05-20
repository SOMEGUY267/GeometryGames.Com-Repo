import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { Game } from '../data/games';

interface GameCardProps {
  game: Game;
  featured?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ game, featured = false }) => {
  return (
    <Link
      to={`/game/${game.id}`}
      className={`game-card block rounded-xl overflow-hidden bg-secondary relative ${
        featured
          ? 'md:col-span-2 md:row-span-2'
          : ''
      }`}
    >
      <div className="relative">
        <img
          src={game.thumbnail}
          alt={game.name}
          className="w-full h-48 md:h-56 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
          <div className="flex items-center justify-between">
            <h3 className={`font-orbitron font-bold text-white ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
              {game.name}
            </h3>
            <div className="bg-accent rounded-full p-2 text-white transform transition-transform hover:scale-110">
              <Play className="h-5 w-5" />
            </div>
          </div>
          {featured && (
            <p className="text-text-secondary mt-2 hidden md:block">{game.description.substring(0, 120)}...</p>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="inline-block px-2 py-1 bg-accent/20 text-accent rounded text-xs">
            {game.difficulty}
          </span>
          <span className="text-sm text-text-secondary">{game.releaseYear}</span>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;