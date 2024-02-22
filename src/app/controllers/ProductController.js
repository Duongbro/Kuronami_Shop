const product = require("../../public/js/module/product");
const categories = require("../../public/js/module/categories");


class ProductController {

    async product(req, res) {
        const categories_class = new categories();
        const product_class = new product();

        const categories_data = await categories_class.get_all().then((data) => {
            return data;
        });
        const product_data = await product_class.getAll().then((data) => {
            return data;
        });

        product_data.map((element) => {
            element.price = Number(element.price).toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
            });
        });

        res.render("product", {
            product_show: product_data,
            checklogin: req.session.email,
            categories_show: categories_data
        });
    }

    async product_detail(req, res) {
        const id_product = req.query.id;

        const product_class = new product();

        // let detail_pro = {
        //     id: "",
        //     name: "",
        //     author: "",
        //     category: "",
        //     detail: "",
        //     img: "",
        //     quantity: "",
        //     price: ""
        // };
        // let product_detail = product_class.get_one_product(id_product)
        //     .then((data) => {
        //         detail_pro.id = data.id;
        //         detail_pro.name = data.name;
        //         detail_pro.author = data.author;
        //         detail_pro.category = data.category;
        //         detail_pro.detail = data.detail;
        //         detail_pro.img = data.img;
        //         detail_pro.quantity = data.quantity;
        //         detail_pro.price = data.price;
        //     });

        product_class.get_one(id_product)
            .then((data) => {
                if (data) {
                    console.log("Dữ liệu có");
                }
                else {
                    console.log("Dữ liệu không tồn tại");
                }
                res.render("product_detail");

                // res.render("product_detail", {
                //     product_id: item.id,
                //     name: item.name,
                //     author: item.author,
                //     category: item.category,
                //     detail: item.detail,
                //     img: item.img,
                //     quantity: item.quantity,
                //     price: Number(item.price).toLocaleString("vi-VN", {
                //         style: "currency",
                //         currency: "VND",
                //     })
                //     //   checklogin: req.session.email,
                // });

            });
    }

    addcart(req, res) {
        const id = req.query.id;
        const product = new productclass();

        res.redirect("/sanpham");
    }
}
module.exports = new ProductController();
