
let stockprice=document.getElementById("stockprice")
let coin=document.getElementById("coin")
let submit=document.getElementById("submit")
let live=document.getElementById("live")
let form1=document.getElementById("form1")


console.log(submit)
let present=document.getElementById("present")
let last_price=null

submit.addEventListener("click",getcoin)

let ws;
// Function to create and initialize the WebSocket connection
function createWebSocket(symbol) {
  const url = `wss://stream.binance.com:9443/ws/${symbol}@trade`;
  ws = new WebSocket(url);

  ws.onopen = () => {
    console.log('WebSocket connection opened.');
  };

  ws.onmessage = (event) => {
    let socketobject=JSON.parse(event.data)
    stockprice.innerText=`${socketobject.s}==${parseFloat(socketobject.p).toFixed(2)}`
    console.log( stockprice.innerText)
    let price=parseFloat(socketobject.p).toFixed(2)
    stockprice.style.color=!last_price||last_price===price?'black':price>last_price?'green':'red'
    last_price=price
    
  };

  ws.onclose = (event) => {
    console.log('WebSocket connection closed. Close code:', event.code);
    console.log('Reason:', event.reason);
  };

  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
  };
}

// Function to close the current WebSocket connection
function closeWebSocket() {
  if (ws) {
    ws.close();
    console.log(ws,'closed')
    ws = null;
  }
}

async function getcoin(e){
    e.preventDefault()
    let name1=coin.value.toLowerCase()
    console.log(name1)
    if(name1.toUpperCase()!==stockprice.innerText){
        closeWebSocket()
        createWebSocket(name1)
    }else{
       
        createWebSocket(name1)
    }
}
    





