import express from "express";
import {
  listCategory,
  createCategory,
  renderPageCreateCategory,
  renderPageUpdateCategory,
  updateCategory,
} from "../controllers/categoryController.js";
const router = express.Router();

router.get("/", listCategory);

router.get("/create", renderPageCreateCategory); // render ra cai form  create
router.post("/create", createCategory);

router.get("/update/:id", renderPageUpdateCategory); // render ra cai form update
router.post("/update", updateCategory);

export default router;
