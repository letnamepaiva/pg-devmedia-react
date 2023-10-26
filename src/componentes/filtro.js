import React, { useState } from 'react';
import Card from './card';
import { produtos} from '../dados/produtos'
import './filtro.css'

export default function FiltroMaster () {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const handleCategoriaChange = (novaCategoria) => {
    setCategoriaSelecionada(novaCategoria);
  };

  const itensFiltrados = produtos.filter(item => !categoriaSelecionada || item.categoria === categoriaSelecionada);

  return (
    <div>
  
      <div className='buttons'>
        <button onClick={() => handleCategoriaChange(null)}>Todos</button>
        <button onClick={() => handleCategoriaChange('Entradas')}>Entradas</button>
        <button onClick={() => handleCategoriaChange('Massas')}>Massas</button>
        <button onClick={() => handleCategoriaChange('Carnes')}>Carnes</button>
        <button onClick={() => handleCategoriaChange('Bebidas')}>Bebidas</button>
        <button onClick={() => handleCategoriaChange('Sobremesas')}>Sobremesas</button>
      </div>

      
        <div className='card-master'>
          <div className='card-trio'>
            
             {categoriaSelecionada !== null ? (
             itensFiltrados.map((item, index) => (
              <Card
              key={index}
              imagem={item.imagem}
              nome={item.nome}
              categoria={item.categoria}
              descricao={item.descricao}
              preco={item.preco}
              />
              ))
              ) : (
              produtos.map((item, index) => (
              <Card
              key={index}
              imagem={item.imagem}
              nome={item.nome}
              categoria={item.categoria}
              descricao={item.descricao}
              preco={item.preco}
              />
              ))
              )}
            
          </div>
        </div>
    </div>
    
  );
}