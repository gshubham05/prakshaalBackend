import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
let userData = [
  {
    name: "nitin",
    pwd: "$2b$10$jVqXyvJUSSas/ldJV9hUpOBS4Jsl6IYHXaAg4nRfyHsEdi09qU6YC",
    email: "nitin@gmail.com",
  },
];
let token = "";
export let home = (req, res) => {
  res.render("index");
};

export let about = (req, res) => {
  res.send("about");
};

export let register = (req, res) => {
  let { name, email, pwd } = req.body;

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(pwd, salt, function (err, hash) {
      console.log("hash : ", hash);
      userData.push({ name, pwd: hash, email });
      res.redirect("/login");
    });
  });
};

export let login = (req, res) => {
  console.log(userData);
  res.render("login");
};

export let loginCheck = async (req, res) => {
  const { email, pwd } = req.body;
  console.log(email,pwd)
  let u1 = userData.find((i) => i.email == email);
  if (!u1) {
    return res.json({msg : "first register yourself"});
  }
  let isMatch = await bcrypt.compare(pwd, u1.pwd);
  if (!isMatch) {
    return res.json({msg : "invalid Credentials"});
  }
  let name = u1.name;
  // jwt
  token = jwt.sign({ name }, "codewareit");
  // console.log(token);
  
  res.json({
    success : true,
    msg : "successfully logged in ",
    token
  })
};

export let dashboardPage = (req, res) => {
  res.render("dashboard");
};
export let dashboard = (req, res) => {
  res.json({
    msg: "welcome to my page",
    token,
    userData,
    success: true,
  });
};

export let data = (req, res) => {
  res.json({
    msg: "welcome to my page",
    token,
    userData,
    success: true,
  });
};
