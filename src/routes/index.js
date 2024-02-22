const siteRouter = require("./site.js");
const productRouter = require("./product.js");
const loginRouter = require("./login.js");
const adminRouter = require("./admin.js");
// const checkout = require("./checkout.js");
const cartRouter = require("./cart.js");

const session = require("cookie-session");


function routes(app) {

  // // app.use("/thanhtoan", checkout);

  app.use("/cart", cartRouter);

  app.use(
    session({
      name: "user",
      keys: ["email", "username"],
      maxAge: 24 * 60 * 60 * 1000,
    })
  );

  app.use("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
  });

  app.use("/login", loginRouter);

  app.use("/admin", adminRouter);

  app.use("/product", productRouter);

  app.use("/", siteRouter);
}

module.exports = routes;
