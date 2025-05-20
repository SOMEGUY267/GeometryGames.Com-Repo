import React from 'react';
import { MousePointer, KeySquare, RotateCw, XCircle } from 'lucide-react';

const GameControls: React.FC = () => {
  return (
    <div className="bg-secondary rounded-xl p-5 shadow-lg">
      <h3 className="font-orbitron text-lg font-bold mb-4 flex items-center">
        <KeySquare className="mr-2 text-accent" />
        Game Controls
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-lg mr-3">
            <MousePointer className="text-accent h-6 w-6" />
          </div>
          <div>
            <p className="font-medium">Mouse Click</p>
            <p className="text-text-secondary text-sm">Jump/Fly/Interact</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-lg mr-3">
            <span className="text-accent font-bold">⎵</span>
          </div>
          <div>
            <p className="font-medium">Spacebar</p>
            <p className="text-text-secondary text-sm">Jump/Fly/Interact</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-lg mr-3">
            <RotateCw className="text-accent h-6 w-6" />
          </div>
          <div>
            <p className="font-medium">R Key</p>
            <p className="text-text-secondary text-sm">Restart Level</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-lg mr-3">
            <XCircle className="text-accent h-6 w-6" />
          </div>
          <div>
            <p className="font-medium">ESC Key</p>
            <p className="text-text-secondary text-sm">Pause Game</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameControls;