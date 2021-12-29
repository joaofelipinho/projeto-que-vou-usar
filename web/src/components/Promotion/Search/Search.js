import React, { useState, useEffect} from "react";
import PromotionCard from '../Card/Card';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Search.css';
import { PlusCircleOutlined} from "@ant-design/icons";

const PromotioSearch = () => {
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/promotions?_embed=comments')
      .then((response) => {
        setPromotions(response.data);
      });
    }, []);

    return(
        <div className="promotion-search">
            <header className="promotion-search__header">
                <h1>Produtos</h1>
             <button className="botao1" PlusCircleOutlined style={{fontSize:20,color:'white',}}> <Link to='/create'>Adicionar Produto</Link></button>  
            </header>
            {promotions.map((promotion) => (
        <PromotionCard promotion={promotion} />
      ))}
        </div>
    );
}

export default PromotioSearch;