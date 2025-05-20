import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getGameById, games } from '../data/games';
import GameEmbed from '../components/GameEmbed';
import GameInfo from '../components/GameInfo';
import GameControls from '../components/GameControls';
import GameCard from '../components/GameCard';
import { ChevronLeft, ChevronRight, Share2, ThumbsUp } from 'lucide-react';

const GamePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const gameId = parseInt(id || '1');
  const game = getGameById(gameId);
  const navigate = useNavigate();
  
  const [liked, setLiked] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  
  const nextGameId = gameId < games.length ? gameId + 1 : 1;
  const prevGameId = gameId > 1 ? gameId - 1 : games.length;
  
  const relatedGames = games
    .filter(g => g.id !== gameId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  
  useEffect(() => {
    if (!game) {
      navigate('/');
    }
    
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = game ? `${game.name} - GeometryGames.com` : 'GeometryGames.com';
    
    return () => {
      document.title = 'GeometryGames.com - Play Geometry Dash Online';
    };
  }, [game, gameId, navigate]);
  
  if (!game) {
    return null;
  }
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: game.name,
        text: `Play ${game.name} on GeometryGames.com!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShowShareTooltip(true);
      setTimeout(() => setShowShareTooltip(false), 2000);
    }
  };
  
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-between mb-6">
          <h1 className="text-2xl md:text-4xl font-orbitron font-bold">{game.name}</h1>
          
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <button 
              onClick={() => setLiked(!liked)}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg transition-colors ${
                liked 
                  ? 'bg-accent text-white' 
                  : 'bg-secondary text-text-secondary hover:bg-secondary/80'
              }`}
            >
              <ThumbsUp className="h-4 w-4" />
              <span>{liked ? 'Liked' : 'Like'}</span>
            </button>
            
            <div className="relative">
              <button 
                onClick={handleShare}
                className="flex items-center space-x-1 px-3 py-1.5 bg-secondary text-text-secondary rounded-lg hover:bg-secondary/80"
              >
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
              
              {showShareTooltip && (
                <div className="absolute top-full mt-2 right-0 bg-accent text-white px-3 py-1.5 rounded text-sm whitespace-nowrap">
                  Link copied to clipboard!
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap mb-6">
          <Link 
            to={`/game/${prevGameId}`} 
            className="mr-4 flex items-center text-text-secondary hover:text-accent transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span>Previous Game</span>
          </Link>
          
          <Link 
            to={`/game/${nextGameId}`} 
            className="flex items-center text-text-secondary hover:text-accent transition-colors"
          >
            <span>Next Game</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2">
            <GameEmbed game={game} />
          </div>
          
          <div>
            <GameInfo game={game} />
          </div>
        </div>
        
        <GameControls />
        
        <div className="mt-16">
          <h2 className="text-2xl font-orbitron font-bold mb-6">More Games You Might Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedGames.map(relatedGame => (
              <GameCard key={relatedGame.id} game={relatedGame} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;