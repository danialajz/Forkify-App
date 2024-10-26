const showRecipes = async function () {
  try {
    const res = await fetch(
      "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
      // "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza"
    );
    const data = await res.json();
    console.log(data);
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
  } catch {}
};
