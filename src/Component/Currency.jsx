import React, { useState } from 'react'
import "../CSS/currency.css"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios'

let  Base_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_uyC54dhs3laTcRRfTipdCQ6rxqmaTmT28I8kBe5I";


export default function Currency() {

const [amount,setAmount]=useState();
const [fromCurrency,setFromCurrency]=useState('EUR');
const [toCurrency,setToCurrency]=useState('USD');
const [result,setResult]=useState(0);





const exchange = async() => {
  const response = await axios.get(`${Base_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
   const result=((response.data.data[toCurrency])*amount).toFixed(2);
   setResult(result);

}

  
  return (

    <div className='currency-div'>
      <div style={{width:"100%",color:"#fff",backgroundColor:"#2f3499",textAlign:"center",fontSize:"20px"}}>
        <h3>Exchange App</h3>
      </div>
      <div style={{marginTop:"25px"}}>
      <input type="number"  className='amount' value={amount} onChange={(e) =>setAmount(e.target.value)}/>
        <select className='from-currnecy-option' onChange={(e) =>setFromCurrency(e.target.value)}>
            <option>EUR</option>
            <option>USD</option>
            <option>Yen</option>
        </select>
        <FaRegArrowAltCircleRight  style={{fontSize:"30px",color:"#2f3499",margin:"-10px  5px"}}/>
        <select className='to-currnecy-option' onChange={(e) =>setToCurrency(e.target.value)}>
            <option>EUR</option>
            <option>USD</option>
            <option>Yen</option>
        </select>
        <input type="number"  className='result' value={result} onChange={(e) =>setResult(e.target.value)}/>
      </div>
        <div style={{marginTop:"10px"}}>
          <button className='btn' onClick={exchange}>Change</button>
        </div>
    </div>
  )
}

