//套票原始資料
let data = [
    {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
    },
    {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
    },
    {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
    },
    {
    "id": 3,
    "name": "山林悠遊雙人套票",
    "imgUrl": "./images/travel_4.png",
    "area": "台中",
    "description": "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）",
    "group": 5,
    "price": 880,
    "rate": 9.3
    },
    {
    "id": 4,
    "name": "漁樂碼頭釣魚體驗套票",
    "imgUrl": "./images/travel_5 .png",
    "area": "台中",
    "description": "台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
    "group": 5,
    "price": 1280,
    "rate": 8.2
    },
    {
    "id": 5,
    "name": "熊森公園親子二日遊套票",
    "imgUrl": "./images/travel_6.png",
    "area": "高雄",
    "description": "來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
    "group": 3,
    "price": 2480,
    "rate": 3
    },

];

//LV 1 開始

//宣告cardSection(套票卡片區)、searchNum(搜尋結果數量)
const cardSection =document.querySelector(".card-row");
const searchNum =document.querySelector(".search-num");
//console.log(searchNum);
// console.log(cardSection);
function init(data){

//宣告template為一個空字串，用來存放卡片區html模板
let template="";

//使用forEach功能將data資料帶入
data.forEach(function(item){
    template+=`<div class="col-4 mb-38" >
        <div class="card" >
            <div class="position-relative">
                <img src="${item.imgUrl}" class="card-img-top" alt="潛水">
                <div class="region-tag position-absolute top-0 start-0  ">${item.area}</div>
                <div class="rank-tag position-absolute top-100 start-0">${item.rate}</div>
            </div>
        <div class="card-body">
            <h5 class="card-title card-title-border" style="color: #00807E;">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <div class="d-flex justify-content-between">
                <div class="last-num d-flex align-items-center">
                    <i class="bi bi-exclamation-circle-fill " style="margin-right: 4px;"></i>
                    <p class="fw-bold " style="margin-bottom: 0;">剩下最後<span id="card-last-num">${item.group}</span>組</p>
                </div>
                <div class="price d-flex">
                    <p style="margin-right: 4px;">TWD
                    <span id="card-price" style="font-size: 32px;" class="fw-bold">$${item.price}</span>
                </div>
            </div>
        </div>
        </div>
        </div>`
    
})

//將帶完資料的template以innerHTML的方式塞入cardSection
cardSection.innerHTML = template;
//因為是純文字資料，以textContent的方式帶入結果數量
searchNum.textContent = `本次搜尋共${data.length}筆資料`
}


//以data資料渲染網頁
init(data);

//LV 1 結束

//LV 3 開始

//篩選功能


//宣告regionSearch(地區搜尋列)
const regionSearch = document.querySelector(".sight-region-select");


//設定函式篩選地區
function filterRegion(){
    let filterResult= [ ];
    data.forEach(function(item){
    if(item.area===regionSearch.value){
        filterResult.push(item)}
    else if(regionSearch.value==="全部地區"){
        filterResult.push(item)}}
    );
    // console.log(filterResult);
    init(filterResult);
    
}

//當regionSearch變動時啟動filterRegion函式
regionSearch.addEventListener("change",function(){
    filterRegion();
});

//新增套票功能

//宣告各個表單內容
const ticketName = 
document.querySelector("#ticketName");
const imgSrc = 
document.querySelector("#imgSrc");
const sightRegion  = 
document.querySelector("#sightRegion");
const ticketCost = 
document.querySelector("#ticketCost");
const ticketGroup  = 
document.querySelector("#ticketGroup");
const ticketRank = 
document.querySelector("#ticketRank");
const ticketDesc = 
document.querySelector("#ticketDesc");

//宣告新增套票按鈕
const addTicketBtn=
document.querySelector(".add-ticket-btn");

//宣告新增套票表單
const addTicketForm=
document.querySelector(".add-ticket-form-list");

//設定新增套票的函式
function addTicket(){
    let ticket={
        "id": data.length,
        "name": ticketName.value.trim(),
        "imgUrl":imgSrc.value.trim() ,
        "area": sightRegion.value.trim(),
        "description": ticketDesc.value.trim(),
        "group":Number( ticketGroup.value.trim()),
        "price":Number( ticketCost.value.trim()),
        "rate": Number(ticketRank.value.trim())
        };
    //將新增的套票push到data
    data.push(ticket);
    //將regionSearch恢復預設值回到全部地區
    regionSearch.value="全部地區";
    //將新增套票表單清空
    addTicketForm.reset();
    init(data);
    // console.log(ticket);
    }

//當點擊新增表單按鈕時啟動addTicket函式
addTicketBtn.addEventListener('click',function(){
    addTicket();
})
