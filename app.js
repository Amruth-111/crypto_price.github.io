// const ws=new WebSocket('wss://stream.binance.com')
// // 'wss://stream.binance.com:9443/ws/btcusdt@trade'
// let stockprice=document.getElementById("stockprice")
// let last_price=null

// ws.onmessage=(event)=>{
//     let storckobject=JSON.parse(event.data)
//     console.log(storckobject.p)
//     stockprice.innerText=parseFloat(storckobject.p).toFixed(2)
//     let price=parseFloat(storckobject.p).toFixed(2)

//     stockprice.style.color=!last_price||last_price===price?'black':price>last_price?'green':'red'
//     last_price=price
// }

let express=require('express')
let body_parser=require('body-parser')
let cors=require('cors')

const axios = require('axios');
const apiUrl = 'https://api.binance.com/api/v3/ticker/price';



const app=express()
app.use(body_parser.json())
app.use(cors())

let result=axios.get(apiUrl)
  .then(response => {
    const prices = response.data;
    console.log(prices);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  