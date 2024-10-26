'use client'

import { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import ChartData from './components/ChartData'

const API_URL = 'https://api.coingecko.com/api/v3/coins/';
const API_KEY = 'x_cg_api_key=CG-M6yKaLiG8FNb7dLWscBK5Kgb';


export default function App() {


  // puxar os dados da API
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    cryptoData('bitcoin')
  }, [])

  const cryptoData = async (crypto_name) => {
    try {
      const response = await fetch(`${API_URL}${crypto_name}?${API_KEY}`);
      const data = await response.json();
      setCrypto(data);
    } catch (error) {
      console.error('Erro ao buscar dados: ', error);
    }
  }

  // definir variáveis a partir dos dados:
  const name = crypto.name
  const current_price = crypto.market_data?.current_price?.brl
  const image = crypto.image?.large
  const price_change_percentage_24h = crypto.market_data?.price_change_percentage_24h
  const price_change_percentage_30d = crypto.market_data?.price_change_percentage_30d

  {
  //     const c = document.getElementById("myCanvas");
  // const ctx = c.getContext("2d");

  // // Create linear gradient
  // const grad=ctx.createLinearGradient(0,0, 280,0);
  // grad.addColorStop(0, "lightblue");
  // grad.addColorStop(1, "darkblue");

  // // Fill rectangle with gradient
  // ctx.fillStyle = grad;
  // ctx.fillRect(10,10, 280,130);
  }
  
  
  return (
    <>
    
    {/* header */}
    <Navbar />

    {/* informações */}
    <div className="p-6 text-slate-700">
    <div className="crypto-card flex flex-col gap-4 p-6 w-[350px] mx-auto bg-[#dbdfe7] rounded-md shadow-lg hover:bg-slate-200 transition-all duration-300">
      <div className="flex">
        <img 
          className="h-12 w-12 mr-4" 
          src={image} 
          alt="Crypto Image" 
        />
        <div className="flex-1">
          <p>
            <strong>Moeda</strong>: {name}
          </p>
          <div>
            <p>
              <strong>Valor:</strong>  {current_price}
            </p> 
            <div className="flex items-center">
              <p className="mr-2">
                <strong>Variação (24h):</strong>
              </p>
              {
                price_change_percentage_24h > 0 ? (
                  <div className="text-green-500">
                    {price_change_percentage_24h}%
                  </div>
                ) : (
                  <p className="text-red-500">
                    {price_change_percentage_24h}%
                  </p>
                )
              }
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <ChartData />
      </div>
    </div>
  </div>

    </>
    
  )
}
