import React, { useState } from 'react';
import { Loader } from 'lucide-react';
import { Game } from '../data/games';

interface GameEmbedProps {
  game: Game;
}

const GameEmbed: React.FC<GameEmbedProps> = ({ game }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative bg-black rounded-xl overflow-hidden shadow-lg">
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary bg-opacity-90 z-10">
          <Loader className="h-10 w-10 text-accent animate-spin mb-4" />
          <p className="text-accent font-orbitron">Loading {game.name}...</p>
        </div>
      )}
      
      <div className="aspect-video w-full">
        <iframe 
          src={game.embedUrl}
          title={game.name} 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          scrolling="no" 
          allowFullScreen
          className="w-full h-full"
          onLoad={() => setTimeout(() => setLoading(false), 1000)} // Simulate longer loading for effect
        />
      </div>
    </div>
  );
};

export default GameEmbed;