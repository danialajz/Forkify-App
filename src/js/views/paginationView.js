import icons from "../../img/icons.svg";
import icons from "url:../../img/icons.svg";
import View from "./View";

class paginationView extends View {
  _parentElement = document.querySelector(".pagination");
  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;
      console.log(btn);
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }
  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.resault.length / this._data.resaultPerPage
    );
    console.log(currentPage);

    console.log(numPages);
    if (currentPage === 1 && numPages > 1) {
      return `
       <button data-goto="${
         currentPage + 1
       }" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
    `;
    }
    if (currentPage === numPages && numPages > 1) {
      return `<button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>`;
    }
    if (currentPage < numPages) {
      return `
            <button data-goto="${
              currentPage - 1
            }" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${currentPage - 1}</span>
            </button>
            <button data-goto="${
              currentPage + 1
            }" class="btn--inline pagination__btn--next">
              <span>Page ${currentPage + 1}</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            </button>`;
    }
    return "";
  }
}
export default new paginationView();
