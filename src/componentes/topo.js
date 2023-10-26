import React from 'react';
import banner from '../assets/banner.png';
import './topo.css';

export default function Topo() {
  return (
    <div className='topo'>
      <img src={banner} alt='Banner' className='foto' />
        <h1>RESTAURANT</h1>
        <p className='paragrafo'>De pratos clássicos a criações surpreendentes,
        nosso cardápio é um requinte de sabores refinados</p>
    </div>
  );
}
 
  
  
  
  
  
  