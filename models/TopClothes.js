import ChoseItem from "./ChoseItem.js";

export default class TopClothes extends ChoseItem {
    constructor(id, type, name, desc, imgShow, imgSrc) {
        super(id, type, name, desc, imgShow, imgSrc);
    }

    renderTopClothes() {
        // const content = this.id.map(topClothes => {
        //     return `
        //         <div class="col-3">
        //             <div class="card">
        //                 <img class="card-img-top" src="${this.imgShow}" alt="">
        //                 <div class="card-body">
        //                     <h4 class="card-title">${this.name}</h4>
        //                     <button class="btn btn-light">Thử đồ</button>
        //                 </div>
        //             </div>
        //         </div>
        //     `;
        // })
        // return content.join();
    }
}