import icons from "../../img/icons.svg";
import icons from "url:../../img/icons.svg";
import View from "./View";

class resaultView extends View {
  _erorrmessage = "No recipe Found";
  _message = "";
  _parentElement = document.querySelector(".results");
  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }
  _generateMarkupPreview(resault) {
    const id = window.location.hash.slice(1);
    return `
    <li class="preview">
            <a class="preview__link ${
              resault.id === id ? "preview__link--active" : ""
            }" href="#${resault.id}">
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
