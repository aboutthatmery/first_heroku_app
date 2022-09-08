import { Router } from "express";
import { getAllRecipes, getRecipe } from "../controllers/recipeController.js"

export const router = Router()

router.route("/").get(getAllRecipes)

router.route("/:recipe_id").get(getRecipe)

export default router