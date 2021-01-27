const incrementVal = document.getElementById('increment');
incrementVal.addEventListener("click",function(){
    const value = 1219;
    const showResult = itemPriceIncrement('items','price',value);
    //console.log("ok");
})

const incrementCover = document.getElementById('coverIncreased');
incrementCover.addEventListener("click",function(){
    const value = 59;
    const showCoverResult = itemPriceIncrement('coverItems','coverPrice',value);
    //console.log("ok");
})

const decrementVal = document.getElementById('decrement');
decrementVal.addEventListener("click",function(){
    const previousValue = 1219;
    const showResultAgain = itemPriceDecrement('items','price',-1*previousValue);
})

const decrementCover = document.getElementById('coverDecreased');
decrementCover.addEventListener("click",function(){
    const previousValue = 59;
    const showCoverResultAgain = itemPriceDecrement('coverItems','coverPrice',-1*previousValue);
})


function itemPriceIncrement(items,price,fixedPrice){

    // items increment
    const itemValue = document.getElementById(items).value;
    let itemValueNum = parseFloat(itemValue);
    itemValueNum++;
    document.getElementById(items).value = itemValueNum;

    //price increment
    const itemPrice = document.getElementById(price).innerText;
    let itemPriceNum = parseFloat(itemPrice);
    itemPriceNum = fixedPrice*itemValueNum;
    document.getElementById(price).innerText = itemPriceNum;

    return itemPriceNum;
}


function itemPriceDecrement(items,price,fixedPrice){

    // items decrement
    const itemValue = document.getElementById(items).value;
    let itemValueNum = parseFloat(itemValue);
    itemValueNum--;
    if(itemValueNum<0){
        document.getElementById(items).value = 0;
    }else{
        document.getElementById(items).value = itemValueNum;
    }


    //price decrement
    const itemPrice = document.getElementById(price).innerText;
    let itemPriceNum = parseFloat(itemPrice);
    itemPriceNum = itemPriceNum + fixedPrice;
    if(itemPriceNum>0){
        document.getElementById(price).innerText = itemPriceNum;
    }else{
        document.getElementById(price).innerText =0;;
    }

    return itemPriceNum;
}