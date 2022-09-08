import { getAll, getOne } from "../database.js"

export const getAllRecipes = async (req, res) => {
  const recipes = await getAll()

  if(recipes) {
    res.json(recipes)
  } else {
    res.status(404).send("Keine Rezepte gefunden")
  }
}

export const getRecipe = async (req, res) => {
  const { recipe_id } = req.params

  const recipe = await getOne(recipe_id)

  if(recipe) {
    res.json(recipe)
  } else {
    res.status(404).send("Rezept nicht gefunden")
  }
}