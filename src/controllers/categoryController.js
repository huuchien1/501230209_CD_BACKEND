import CategoryModel from "../models/categoryModel.js";
import { ObjectId } from "mongodb";

export async function listCategory(req, res) {
  try {
    const categories = await CategoryModel.find({ deletedAt: null });
    res.render("pages/categories/list", {
      title: "Categories",
      categories: categories,
    });
  } catch (error) {
    console.log(error);
    res.send("Hiện tại không có sản phẩm nào!");
  }
}

// add
export async function renderPageCreateCategory(req, res) {
  const { id } = req.params;
  res.render("pages/categories/form", {
    title: "CreateCategories",
    mode: "Create",
    category: {},
  });
}
export async function createCategory(req, res) {
  const { code, name, image } = req.body;
  try {
    await CategoryModel.create({
      code,
      name,
      image,
      createdAt: new Date(),
    });
    res.redirect("/categories");
  } catch (error) {
    console.log(error);
    res.send("Thêm sản phẩm mới không thành công !!");
  }
}
// Update
export async function renderPageUpdateCategory(req, res) {
  try {
    const { id } = req.params;
    const category = await CategoryModel.findOne({
      _id: new ObjectId(id),
      deletedAt: null,
    });
    if (category) {
      res.render("pages/categories/form", {
        title: "UpdateCategories",
        mode: "Update",
        category: category,
      });
    } else {
      res.send("Không có sản phẩm nào phù hợp!");
    }
  } catch (error) {
    res.send("Trang web nay không tồn tại!");
  }
}
export async function updateCategory(req, res) {
  const { code, name, image, id } = req.body;
  try {
    await CategoryModel.updateOne(
      { _id: new ObjectId(id) },
      {
        code,
        name,
        image,
        UpdatedAt: new Date(),
      }
    );
    res.redirect("/categories");
  } catch (error) {
    console.log(error);
    res.send("Cập nhật sản phẩm mới không thành công !!");
  }
}

//delete
export async function renderPageDeleteCategory(req, res) {
  try {
    const { id } = req.params;
    const category = await CategoryModel.findOne({
      _id: new ObjectId(id),
      deletedAt: null,
    });
    if (category) {
      res.render("pages/categories/form", {
        title: "Delete Categories",
        mode: "Delete",
        category: category,
      });
    } else {
      res.send("Không có sản phẩm nào phù hợp!");
    }
  } catch (error) {
    console.log(error);
    res.send("Trang web nay không tồn tại!");
  }
}
export async function deleteCategory(req, res) {
  const { id } = req.body;
  try {
    await CategoryModel.updateOne(
      { _id: new ObjectId(id) },
      {
        deletedAt: new Date(),
      }
    );
    res.redirect("/categories");
  } catch (error) {
    console.log(error);
    res.send("Xóa sản phẩm không thành công !!");
  }
}
