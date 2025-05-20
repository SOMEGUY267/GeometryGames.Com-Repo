import React from 'react';
import { Award, Clock, Calendar, BarChart3 } from 'lucide-react';
import { Game } from '../data/games';

interface GameInfoProps {
  game: Game;
}

const GameInfo: React.FC<GameInfoProps> = ({ game }) => {
  return (
    <div className="bg-secondary rounded-xl p-5 shadow-lg">
      <h3 className="font-orbitron text-xl font-bold mb-4">About {game.name}</h3>
      <p className="text-text-primary mb-6">{game.description}</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <Calendar className="text-accent h-6 w-6 mb-2" />
          <p className="text-sm text-text-secondary">Release Year</p>
          <p className="font-medium">{game.releaseYear}</p>
        </div>
        
        <div className="flex flex-col items-center">
          <BarChart3 className="text-accent h-6 w-6 mb-2" />
          <p className="text-sm text-text-secondary">Difficulty</p>
          <p className="font-medium">{game.difficulty}</p>
        </div>
        
        <div className="flex flex-col items-center">
          <Clock className="text-accent h-6 w-6 mb-2" />
          <p className="text-sm text-text-secondary">Avg. Completion</p>
          <p className="font-medium">{game.avgCompletionTime}</p>
        </div>
        
        <div className="flex flex-col items-center">
          <Award className="text-accent h-6 w-6 mb-2" />
          <p className="text-sm text-text-secondary">Rating</p>
          <p className="font-medium">{game.rating}/5</p>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;