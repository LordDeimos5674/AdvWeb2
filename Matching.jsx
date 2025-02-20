import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/card";
import { Button } from "@/components/button";

// Scoreboard Component
const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className="text-lg">
      <p>Score: {score} | Best Score: {bestScore}</p>
    </div>
  );
};

// Card Component
const PokemonCard = ({ card, onClick }) => {
  return (
    <Card className="cursor-pointer" onClick={() => onClick(card)}>
      <CardContent className="flex flex-col items-center p-4">
        <img src={card.image} alt={card.name} className="w-20 h-20" />
        <p className="mt-2 capitalize">{card.name}</p>
      </CardContent>
    </Card>
  );
};

// Main Memory Game Component
export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState(new Set());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=6");
      const fetchedCards = response.data.results.map((item, index) => ({
        id: index,
        name: item.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
      }));
      setCards(shuffleArray(fetchedCards));
    } catch (error) {
      console.error("Error fetching cards: ", error);
    }
  };

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (card) => {
    if (clickedCards.has(card.id)) {
      setScore(0);
      setClickedCards(new Set());
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setBestScore(Math.max(bestScore, newScore));
      setClickedCards(new Set(clickedCards.add(card.id)));
    }
    setCards(shuffleArray([...cards]));
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold">Memory Game</h1>
      <Scoreboard score={score} bestScore={bestScore} />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {cards.map((card) => (
          <PokemonCard key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
      <Button className="mt-4" onClick={fetchCards}>Reset Game</Button>
    </div>
  );
}
