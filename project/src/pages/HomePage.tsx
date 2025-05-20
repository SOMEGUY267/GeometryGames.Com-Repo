import React from 'react';
import { games } from '../data/games';
import GameCard from '../components/GameCard';
import Hero from '../components/Hero';
import { Info, Gamepad2, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredGame = games[0]; // The first game as featured
  const otherGames = games.slice(1);

  return (
    <div>
      <Hero />
      
      <section id="games" className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
              <span className="text-gradient">Our Games</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Choose from our collection of Geometry Dash games. Each offers unique challenges, themes, and music.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map(game => (
              <GameCard key={game.id} game={game} featured={game.id === featuredGame.id} />
            ))}
          </div>
        </div>
      </section>
      
      <section id="about" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
              <span className="text-gradient">About Geometry Dash</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Discover what makes Geometry Dash games so addictively challenging and incredibly fun.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary p-6 rounded-xl">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Gamepad2 className="text-accent h-6 w-6" />
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3">Simple Controls</h3>
              <p className="text-text-secondary">
                One-touch gameplay makes Geometry Dash easy to learn but difficult to master. Timing is everything in this rhythm-based platformer.
              </p>
            </div>
            
            <div className="bg-primary p-6 rounded-xl">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-accent h-6 w-6" />
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3">Challenging Gameplay</h3>
              <p className="text-text-secondary">
                Each level increases in difficulty, testing your reflexes and patience. Push yourself to complete increasingly complex geometric challenges.
              </p>
            </div>
            
            <div className="bg-primary p-6 rounded-xl">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Info className="text-accent h-6 w-6" />
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3">Unique Versions</h3>
              <p className="text-text-secondary">
                Explore different variations of Geometry Dash, each with unique themes, music, and challenges. From underwater adventures to fiery landscapes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;