import express from "express";
import {
  listCategory,
  createCategory,
  renderPageCreateCategory,
} from "../controllers/categoryController.js";
const router = express.Router();

router.get("/", listCategory);
router.get("/create", renderPageCreateCategory); // render ra cai form  create
router.post("/create", createCategory);

export default router;
