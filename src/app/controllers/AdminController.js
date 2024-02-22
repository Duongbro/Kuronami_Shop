const product = require("../../public/js/module/product");
const categories = require("../../public/js/module/categories");
const storage = require("../../public/js/module/storage");
const orders = require("../../public/js/module/orders");
const e = require("express");


class AdminController {
    async categories(req, res) {
        let categories_class = new categories();

        let categories_data = await categories_class.get_all().then((data) => {
            return data;
        });

        res.render("./admin/categories", { layout: "admin_layout", categories_show: categories_data });
    }

    async categories_delete(req, res) {
        let categories_class = new categories();
        categories_class.delete(req.query.id).then((data) => {
            return data;
        });
        res.redirect("/admin/categories");
    }

    async categories_add(req, res) {
        const { categories_add, name } = req.body;

        let categories_class = new categories();
        let categories_data = await categories_class.get_all()
            .then((data) => {
                return data;
            });

        if (categories_add) {
            const lengdata = Object.keys(categories_data).length + 1;
            categories_class.add({ id: lengdata, name: name, status: 1 });
            res.redirect("/admin/categories");
        }

        res.render("./admin/categories_add", {
            layout: "admin_layout"
        })
    }

    async product(req, res) {
        let product_class = new product();

        let product_data = await product_class.getAll().then((data) => {
            return data;
        });

        res.render("./admin/product", { layout: "admin_layout", product_load: product_data });
    }

    async load_add_product(req, res) {
        let categories_class = new categories();

        let categories_data = await categories_class.get_all().then((data) => {
            return data;
        });

        res.render("./admin/product_add", { layout: "admin_layout", categories_load: categories_data });
    }

    async product_add(req, res) {
        let storageref = new storage();
        let {
            product_name,
            product_author,
            product_detail,
            product_price,
            product_category,
            product_quantity
        } = req.body;
        let product_img = req.file;
        if (
            !product_img ||
            !product_name ||
            !product_author ||
            !product_detail ||
            !product_price ||
            !product_category ||
            !product_quantity
        ) {
            res.redirect("/admin/product");
        } else {
            let img_url = await storageref.upload_Image(req.file).then((data) => {
                return data;
            });
            let product_data = {
                name: product_name,
                author: product_author,
                detail: product_detail,
                price: product_price,
                category: product_category,
                quantity: product_quantity,
                img: img_url,
                status: 1
            };
            let product_class = new product();
            product_class.getAll().then((data) => {
                const lengdata = Object.keys(data).length + 1;
                product_data.id = lengdata;
                product_class.add(product_data);
            });
            res.redirect("/admin/product");
        }
    }

    async product_delete(req, res) {
        let product_class = new product();
        product_class.delete(req.query.id).then((data) => {
            return data;
        });
        res.redirect("/admin/product");
    }

    index(req, res) {
        res.render("./admin/home", { layout: "admin_layout" });
    }
}

module.exports = new AdminController();
