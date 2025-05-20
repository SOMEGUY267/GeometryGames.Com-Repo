export interface Game {
  id: number;
  name: string;
  description: string;
  embedUrl: string;
  thumbnail: string;
  releaseYear: string;
  difficulty: string;
  avgCompletionTime: string;
  rating: number;
  features: string[];
}

export const games: Game[] = [
  {
    id: 1,
    name: "Geometry Dash",
    description: "The original Geometry Dash game that started it all. Navigate your way through dangerous passages and spiky obstacles. Jump and fly your way through danger in this rhythm-based action platformer.",
    embedUrl: "https://scratch.mit.edu/projects/105500895/embed",
    thumbnail: "https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    releaseYear: "2013",
    difficulty: "Medium",
    avgCompletionTime: "2h 30m",
    rating: 4.8,
    features: ["Original Levels", "Classic Mode", "Practice Mode", "Level Editor"]
  },
  {
    id: 2,
    name: "Geometry Dash Subzero",
    description: "Dive into the depths with Geometry Dash Subzero. Featuring 3 exclusive levels with amazing music by MDK, Bossfight and Boom Kitty. New mechanics, new challenges, and an underwater theme await!",
    embedUrl: "https://scratch.mit.edu/projects/216343253/embed",
    thumbnail: "https://images.pexels.com/photos/3964738/pexels-photo-3964738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    releaseYear: "2017",
    difficulty: "Hard",
    avgCompletionTime: "1h 45m",
    rating: 4.5,
    features: ["3 Unique Levels", "Underwater Theme", "New Obstacles", "Special Effects"]
  },
  {
    id: 3,
    name: "Geometry Dash Meltdown",
    description: "Turn up the heat with Geometry Dash Meltdown. Navigate through fire and lava in this hot new adventure. Features 3 dynamic levels with music from F-777. Can you handle the meltdown?",
    embedUrl: "https://scratch.mit.edu/projects/143663274/embed",
    thumbnail: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    releaseYear: "2015",
    difficulty: "Very Hard",
    avgCompletionTime: "2h",
    rating: 4.7,
    features: ["Fire Theme", "3 Intense Levels", "New Game Elements", "Challenging Patterns"]
  },
  {
    id: 4,
    name: "Geometry Dash Nine Circles",
    description: "One of the most infamous levels in Geometry Dash history, now available as its own game. Nine Circles features an extremely challenging wave segment with disorienting effects and requires precise timing.",
    embedUrl: "https://scratch.mit.edu/projects/264415879/embed",
    thumbnail: "https://images.pexels.com/photos/6373431/pexels-photo-6373431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    releaseYear: "2014",
    difficulty: "Extreme",
    avgCompletionTime: "5h+",
    rating: 4.9,
    features: ["Wave Mode", "Pulsing Effects", "Extreme Difficulty", "Iconic Design"]
  },
  {
    id: 5,
    name: "Geometry Dash Explorers",
    description: "Embark on a journey through uncharted territory in Geometry Dash Explorers. Discover new landscapes, overcome innovative obstacles, and unlock the secrets of the geometric universe.",
    embedUrl: "https://scratch.mit.edu/projects/1155882459/embed",
    thumbnail: "https://images.pexels.com/photos/3806250/pexels-photo-3806250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    releaseYear: "2023",
    difficulty: "Medium-Hard",
    avgCompletionTime: "3h",
    rating: 4.6,
    features: ["New Game Mechanics", "Exploration Mode", "Hidden Secrets", "Custom Soundtracks"]
  },
  {
    id: 6,
    name: "Geometry Dash Sonic Wave",
    description: "Experience one of the most legendary and challenging levels in Geometry Dash history. Sonic Wave pushes the limits of what's possible with its intense wave segments and mind-bending speed changes.",
    embedUrl: "https://scratch.mit.edu/projects/264644026/embed",
    thumbnail: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    releaseYear: "2015",
    difficulty: "Extreme Demon",
    avgCompletionTime: "8h+",
    rating: 4.9,
    features: ["Wave Challenges", "Extreme Speed", "Complex Timing", "Legendary Status"]
  },
  {
    id: 7,
    name: "Geometry Dash B",
    description: "Take on the challenge of Geometry Dash B, a unique level that combines precise timing with creative design. Master the art of perfect jumps and wave control in this community favorite.",
    embedUrl: "https://scratch.mit.edu/projects/637568113/embed",
    thumbnail: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    releaseYear: "2021",
    difficulty: "Hard Demon",
    avgCompletionTime: "4h",
    rating: 4.7,
    features: ["Unique Design", "Multiple Modes", "Creative Gameplay", "Community Favorite"]
  },
  {
    id: 8,
    name: "Geometry Dash Tidal Wave",
    description: "Dive into the depths of difficulty with Geometry Dash Tidal Wave. This water-themed level combines beautiful visuals with challenging gameplay, creating an immersive geometric experience.",
    embedUrl: "https://scratch.mit.edu/projects/1114012421/embed",
    thumbnail: "https://images.pexels.com/photos/1774927/pexels-photo-1774927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    releaseYear: "2023",
    difficulty: "Insane",
    avgCompletionTime: "3h 30m",
    rating: 4.8,
    features: ["Water Effects", "Dynamic Music", "Challenging Segments", "Beautiful Design"]
  }
];

export const getGameById = (id: number): Game | undefined => {
  return games.find(game => game.id === id);
};