import React from 'react';
import PromotionCard from './components/Promotion/Card/Card';

const App = () => {

  const promotion = {
    "id": 1,
    "title": "Câmera interna inteligente Wi-Fi Full HD iM3",
    "price": 300.00,
    "imageUrl": "oi.png",
    "url": "",
    "comments": [
      {
        "id": 1,
        "comment": 'Intelbras'
      }
    ]
  };


  return (
    <div
      className="App"
      style={{
        maxWidth: 800,
        margin: '30px auto',
      }}
    >
      <PromotionCard promotion={promotion} />
    </div>
  );
}

export default App;
