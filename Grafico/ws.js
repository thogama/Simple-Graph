var porcent=0;
var precoant = 0;
var cont =0;
const ws = new WebSocket('wss://stream.binance.com:9443/ws/ethbrl@bookTicker')
    ws.onmessage = (event) =>{
    const obj = JSON.parse(event.data);
    document.getElementById("Results").innerHTML = (`Melhor compra: ${obj.a}`);
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
    addData(obj.a);
    if(cont==300){
        removeData(chartGraph);
        cont--;
    }
    console.log(cont);

}


