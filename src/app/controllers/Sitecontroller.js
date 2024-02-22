const category = require("../../public/js/module/categories");
const product = require("../../public/js/module/product");

class Sitecontroller {

  async home(req, res) {
    let product_class = new product();
    let categories_class = new category();

    let product_data = [];

    await product_class.get_new_limit(4)
      .then((data) => {
        data.map((element) => {
          element.price = Number(element.price).toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          });
          product_data.push(element);
        });
      });

    let categories_data = await categories_class.get_all().then((data) => {
      return data;
    }); 

    res.render("home", {
      product_show: product_data,
      categories_show: categories_data ,
      checklogin: req.session.email
    });
  }

  search(req, res) {
    res.send("search");
  }
}
module.exports = new Sitecontroller();
