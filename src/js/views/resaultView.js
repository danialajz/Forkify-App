import { View } from "./View";
import icons from "../../img/icons.svg";
import icons from "url:../../img/icons.svg";

class resaultView extends View {
  _erorrmessage = "";
  _message = "";
  _parentElement = document.querySelector(".results");
  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }
  _generateMarkupPreview(resault) {
    return `
    <li class="preview">
            <a class="preview__link" href="#${resault.id}">
              <figure class="preview__fig">
                <img src="${resault.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${resault.title}</h4>
                <p class="preview__publisher">${resault.publisher}</p>
               
              </div>
            </a>
          </li>
          `;
  }
}
{
  /* <div class="preview__user-generated">
<svg>
  <use href="${icons}#icon-user"></use>
</svg>
</div> */
}

export default new resaultView();
