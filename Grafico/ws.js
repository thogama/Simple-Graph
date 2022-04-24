var porcent=0;
var precoant = 0;
var cont =0;
const ws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@bookTicker')
    ws.onmessage = (event) =>{
    const obj = JSON.parse(event.data);
    document.getElementById("Results").innerHTML = (`Best offer: ${obj.a}`);
    if (precoant!=0){
        if (obj.a>porcent){
            porcent += (obj.a-precoant)/precoant;
        }
        if(obj.a<porcent){
            porcent -= (obj.a-precoant)/precoant;
        }
    }
    else{
        precoant = obj.a;
    }
    cont+=1;
    
    addData(porcent);
    if(cont==800){
        removeData(chartGraph);
        cont--;
    }
    console.log(cont);

}


