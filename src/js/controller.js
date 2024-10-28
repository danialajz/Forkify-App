import * as model from "./model";

import "core-js/stable";
import "regenerator-runtime/runtime";
import recpieView from "./views/recipeView.js";
import recipeView from "./views/recipeView.js";
import SearchView from "./views/searchView.js";
import resaultView from "./views/resaultView.js";
import paginationView from "./views/paginationView.js";

// const recipeContainer = document.querySelector(".recipe");
// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;

    recipeView.renderSpiner();

    await model.loadRecpie(id);

    recpieView.render(model.state.recipe);
    // const recpieView = new recipeView(model.state.recipe);
  } catch (err) {
    recipeView.renderMessage();
  }
};
const contorolSearchResault = async function () {
  try {
    resaultView.renderSpiner();
    console.log(resaultView);

    const query = SearchView.getQuery();

    if (!query) return;
    await model.loadSearchResault(query);

    resaultView.render(model.getSearchResaultPage(3));
    // console.log(model.state.search.resault);
    console.log(model.state.search);
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};
const controlPagination = function (goToPage) {
  model.state.search.page = goToPage; 
  resaultView.render(model.getSearchResaultPage(goToPage));
  paginationView.render(model.state.search);
};
const init = function () {
  recipeView.addhandelRender(controlRecipes);
  SearchView.addHandlerSearch(contorolSearchResault);
  paginationView.addHandlerClick(controlPagination);
};
init();
// window.addEventListener("hashchange", showRecipes);
// window.addEventListener("load", showRecipes);
