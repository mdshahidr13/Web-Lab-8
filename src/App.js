import React, { useState } from 'react';

const cardData = [
  {
    id: 1,
    title: "Domain 1",
    features: ["Feature A", "Feature B", "Feature C"],
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Domain 2",
    features: ["Feature D", "Feature E", "Feature F"],
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    title: "Domain 3",
    features: ["Feature G", "Feature H", "Feature I"],
    image: "https://via.placeholder.com/150"
  },
];

function App() {
  const [likedCards, setLikedCards] = useState({});

  const toggleLike = (id) => {
    setLikedCards((prevLikedCards) => ({
      ...prevLikedCards,
      [id]: !prevLikedCards[id],
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Domain Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4"
          >
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover mb-4"/>
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <ul className="mb-4">
              {card.features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => toggleLike(card.id)}
              className={`transition-transform ${
                likedCards[card.id] ? "transform scale-150" : ""
              }`}
            >
              {likedCards[card.id] ? "❤️" : "♡"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;