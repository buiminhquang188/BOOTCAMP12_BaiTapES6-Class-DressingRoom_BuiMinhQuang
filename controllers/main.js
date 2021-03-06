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

const getClass = className => document.getElementsByClassName(className);
const getData = () => {
    callData.fetchData()
        .then(res => {
            renderNavPills(res.data[0].navPills, res.data[0].tabPanes);
        })
        .catch(err => {
            alert(err);
        })
}


const renderNavPills = (navPills, tabPanes) => {
    renderClothes(tabPanes);
    let renderNavPills = '';
    let renderTabPane = '';
    let checkType = navPills.map((list, index) => {
        const { showName, type } = list;
        renderNavPills += `
        <li class="nav-item">
            <a class="nav-link" id="pills-${type}-tab" data-toggle="pill" href="#pills-${type}" role="tab" aria-controls="pills-${type}" aria-selected="true">${showName}</a>
        </li>
        `
        renderTabPane += `
        <div class="tab-pane pills-${type}" id="pills-${type}" role="tabpanel" aria-labelledby="pills-${type}-tab">
            <div class="row product-${type}" id="product-${type}">
            </div>
        </div>
        `
        return type;
    })
    document.querySelector('.nav-pills').innerHTML = renderNavPills;
    document.querySelector('.tab-content').innerHTML = renderTabPane;
    renderProduct(checkType);
}


const renderProduct = (checkType) => {
    let content = '';
    for (let i = 0; i < checkType.length; i++) {
        content = '';
        let stringID = 'product-' + checkType[i];
        let pillID = 'pills-' + checkType[i];
        let id = listChosen.map((items, idx) => {
            const { type, name, imgShow, id, imgSrc } = items;
            if (checkType[i] === type) {
                content +=
                    `
                    <div class="card text-center">
                        <img class="card-img-top img-fluid" src="${imgShow}" alt="">
                        <div class="card-body">
                            <h4 class="card-title">${name}</h4>
                            <button class="btn btn-light w-100" onclick="tryOutFit('${id}', '${type}', '${imgSrc}')">Th??? ?????</button>
                        </div>
                    </div>
                    `
                document.querySelector(String('.' + pillID + ' .' + stringID)).innerHTML = content;
                return id;
            }
            else if (checkType[i] != type) {
                return;
            }
        })
    }
}



function renderClothes(tabPanes) {
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
            default: {
                alert('Kh??ng c?? lo???i c???n t??m');
                break;
            }
        }
    })
}

getData();

const tryOutFit = (idClothes, checkType, imgSrc) => {
    const stringImgSrc = String('url' + '(' + "'" + imgSrc + "'" + ')')
    let body = getClass('body');
    let model = getClass('model');
    let hairstyle = getClass('hairstyle');
    let necklace = getClass('necklace');
    let bikinitop = getClass('bikinitop');
    let bikinibottom = getClass('bikinibottom');
    let handbag = getClass('handbag');
    let feet = getClass('feet');
    let background = getClass('background');
    switch (checkType) {
        case "topclothes": {
            bikinitop[0].style.backgroundImage = stringImgSrc;
            bikinitop[0].style.zIndex = '2';
            bikinitop[0].style.width = '100%';
            bikinitop[0].style.transform = 'scale(0.5,0.5)';
            bikinitop[0].style.top = '-9.4%';
            bikinitop[0].style.left = '-2.9%';
            break;
        }
        case 'botclothes': {
            bikinibottom[0].style.backgroundImage = stringImgSrc;
            bikinibottom[0].style.zIndex = '1';
            bikinibottom[0].style.width = '100%';
            bikinibottom[0].style.transform = 'scale(0.5,0.5)';
            bikinibottom[0].style.top = '-9.4%';
            bikinibottom[0].style.left = '-2.9%';
            break;
        }
        case 'shoes': {
            feet[0].style.backgroundImage = stringImgSrc;
            break;
        }
        case 'handbags': {
            handbag[0].style.backgroundImage = stringImgSrc;
            break;
        }
        case 'necklaces': {
            necklace[0].style.backgroundImage = stringImgSrc;
            break;
        }
        case 'hairstyle': {
            hairstyle[0].style.backgroundImage = stringImgSrc;
            break;
        }
        case 'background': {
            background[0].style.backgroundImage = stringImgSrc;
            break;
        }
    }
}

window.tryOutFit = tryOutFit;
