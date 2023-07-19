
let stockprice=document.getElementById("stockprice")
let coin=document.getElementById("coin")
let submit=document.getElementById("submit")
let live=document.getElementById("live")
let present=document.getElementById("present")
let last_price=null

submit.addEventListener("click",getcoin)

async function getcoin(e){
    e.preventDefault()
    console.log("buttonclicked")
    let abc=coin.value.toUpperCase()
    console.log(abc)
    const apiUrl = `https://api.binance.com/api/v3/ticker/price?symbol=${abc}`;
    let res=await axios.get(apiUrl)
    console.log(res.data)
    stockprice.innerHTML=`${res.data.symbol}=>${parseFloat(res.data.price).toFixed(2)}`

}



