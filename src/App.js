import React from 'react';
import PromotionCard from './components/Promotion/Card/Card';



const App = () => {
  
  const promotion = {
    "id": 1,
    "title": "Câmera interna inteligente Wi-Fi Full HD iM3",
    "price": 300.00  ,
    "imageUrl": "oi.png",
    "url": "https://www.amazon.com.br/Notebook-Acer-Mochila-A315-41-R790-Mem%C3%B3ria/dp/B07YDWLV7S/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=gatry0b-20&linkId=e4a1146599e36741a720a6a952cbc328&language=pt_BR",
    "comments": [
      {
        "id": 1,
        "comment": "Intelbras"
      }
    ]
  };


  return (
    <div className="App" 
    style={{
      maxWidth:800,
      margin: '30px auto'
    }}
    >
     <PromotionCard promotion={promotion} />
    </div>
  );
}

export default App;
