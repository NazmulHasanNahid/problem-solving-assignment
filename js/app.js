//problem -1 
function anaToVori(ana){
    let vori = ana / 16 ; 
    return vori ;
}

let res = anaToVori()
console.log(res);

//problem -2
function pandaCost(singaraQuantity , comosaQuantity , jilapiQuantity){
    let perSingaraPrice = 7;
    let perComosaPrice = 10 ;
    let perJilapiPrice = 15 ;
    const singara = singaraQuantity * perSingaraPrice;
    const comosa = comosaQuantity * perComosaPrice ;
    const jilapi = jilapiQuantity * perJilapiPrice
    const totalCost = singara + comosa + jilapi ;
    return totalCost ; 

}

const totalprice = pandaCost(1,1,1)
console.log(totalprice);



