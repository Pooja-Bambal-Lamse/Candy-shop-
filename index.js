var itemArr = [];
var div = document.getElementById('arrayobj');
function addItem() {
    let nm = document.getElementById('nm').value;
    let desc = document.getElementById('desc').value;
    let pr = document.getElementById('pr').value;
    let quant = document.getElementById('quant').value;


    let itemObj = { CandyName: nm, Description: desc, Price: pr, Quantity: quant }
    itemArr.push(itemObj);
    console.log(itemArr);
    
    div.innerHTML=""
  
    for (var i = 0; i < itemArr.length; i++) {
        div.innerHTML += `
        <label for="candy-name">${itemArr[i].CandyName}</label>
        <label for="description">${itemArr[i].Description}</label>
        <label for="price">${itemArr[i].Price}</label>
        <label for="quantity">${itemArr[i].Quantity}</label>
        <button type="click" onclick="BUY1(${i})">BUY 1</button>
        <button type="click" onclick="BUY2(${i})">BUY 2</button>
        <button type="click" onclick="BUY3(${i})">BUY 3</button>
        <br>
`;
    }
}
function BUY1(i){
    div.innerHTML=""
  
    for (var CandyName = 0; i < CandyName.length; CandyName++) {
        div.innerHTML += `
        <label for="candy-name">${itemArr[CandyName].CandyName}</label>
        <label for="description">${itemArr[CandyName].Description}</label>
        <label for="price">${itemArr[CandyName].Price}</label>
        <label for="quantity">${itemArr[CandyName].Quantity}</label>

            <button type="click" onclick="BUY1(${i})">BUY 1</button>
            <br>
`;}
    console.log(itemArr);
}