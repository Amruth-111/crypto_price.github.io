
// 

let live=document.getElementById("live")
let present=document.getElementById("present")


present.onclick=async(e)=>{
    e.preventDefault()
    window.location.href='./present.html'
}
live.onclick=((e)=>{
    e.preventDefault()
    window.location.href='./live.html'
})
// ws.onmessage=(event)=>{
//     let socketobject=JSON.parse(event.data)
//     console.log(socketobject.p)
//   
//     let price=parseFloat(socketobject.p).toFixed(2)

//     stockprice.style.color=!last_price||last_price===price?'black':price>last_price?'green':'red'
//     last_price=price
// }





