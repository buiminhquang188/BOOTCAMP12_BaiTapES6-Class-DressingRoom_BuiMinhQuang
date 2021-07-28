import ListChosen from "../models/ListChosen.js";
import CallData from "../utils/callData.js";
import TopClothes from "../models/TopClothes.js";
import BotClothes from "../models/BotClothes.js";
import Shoes from "../models/Shoes.js";
import HandBags from "../models/HandBags.js";
import Necklaces from "../models/Necklaces.js";
import HairStyle from "../models/HairStyle.js";
import Background from "../models/Background.js";

const callData = new CallData();
let listChosen = [];

const getEle = id => document.getElementById(id);
const getData = () => {
    callData.fetchData()
        .then(res => {
            renderNavPills(res.data[0].navPills);
            renderClothes(res.data[0].tabPanes);
        })
        .catch(err => {
            alert(err);
        })
}

getData();

const renderNavPills = (navPills) => {
    let content = '';
    navPills.map((list, index) => {
        const { showName, type } = list;
        content += `
        <li class="nav-item">
            <a class="nav-link" id="pills-${type}-tab" data-toggle="pill" href="#pills-${type}" role="tab" aria-controls="pills-${type}" aria-selected="true"}>${showName}</a>
        </li>
        `
    })
    document.querySelector('.nav-pills').innerHTML = content;
}


const renderHTML = () => {
    let content = '';
    const checkType = listChosen.map((items, index) => {
        const { type, name, imgShow } = items;
        content += `
        <div class="tab-pane" id="pills-${type}" role="tabpanel" aria-labelledby="pills-${type}-tab">
            <div id="product" class="row">
            <div class="card text-center img-fluid col-3">
            <img class="card-img-top img-fluid" src="${imgShow}" alt="">
                <div class="card-body">
                    <h4 class="card-title">${name}</h4>
                    <button class="btn btn-light w-100">Thử đồ</button>
                </div>
            </div>
            </div>
        </div >
    `
        return type;
    })
    document.querySelector('.tab-content').innerHTML = content;
    // renderProduct(checkType);
}

// const renderProduct = (checkType) => {
//     let content = '';
//     listChosen.map((items, idx) => {
//         const { type, name, imgShow } = items;
//         console.log(checkType[idx]);
//         if (checkType[idx] != type) {
//             return;
//         }
//         content += `
//         <div class="card text-center img-fluid col-3">
//         <img class="card-img-top img-fluid" src="${imgShow}" alt="">
//             <div class="card-body">
//                 <h4 class="card-title">${name}</h4>
//                 <button class="btn btn-light w-100">Thử đồ</button>
//             </div>
//         </div>
//     `
//     })
//     getEle('product').innerHTML = content;
// }

const renderClothes = (tabPanes) => {
    tabPanes.map((dress, index) => {
        const { id, type, name, desc, imgSrc_jpg, imgSrc_png } = dress;
        switch (type) {
            case "topclothes": {
                const topClothes = new TopClothes(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                listChosen = [...listChosen, topClothes];
                break;
            }
            case 'botclothes': {
                const botClothes = new BotClothes(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                listChosen = [...listChosen, botClothes];
                break;
            }
            case 'shoes': {
                const shoes = new Shoes(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                listChosen = [...listChosen, shoes];
                break;
            }
            case 'handbags': {
                const handbags = new HandBags(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                listChosen = [...listChosen, handbags];
                break;
            }
            case 'necklaces': {
                const necklaces = new Necklaces(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                listChosen = [...listChosen, necklaces];
                break;
            }
            case 'hairstyle': {
                const hairstyle = new HairStyle(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                listChosen = [...listChosen, hairstyle];
                break;
            }
            case 'background': {
                const background = new Background(id, type, name, desc, imgSrc_jpg, imgSrc_png);
                listChosen = [...listChosen, background];
                break;
            }
            // default: {
            //     alert('Không có loại cần tìm');
            //     break;
            // }
        }
    })
    renderHTML();
}

