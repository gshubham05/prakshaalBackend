import bcrypt from "bcrypt";
let userData = [
  {
    name: "nitin",
    pwd: "$2b$10$jVqXyvJUSSas/ldJV9hUpOBS4Jsl6IYHXaAg4nRfyHsEdi09qU6YC",
    email: "nitin@gmail.com",
  },
    ];

export let home = (req, res) => {
  res.render("index");
};

export let about = (req, res) => {
  res.send("about");
};

export let dynamicID = (req, res) => {
  const { pid } = req.params;
  res.send(`<h1>welcome to my page mr : ${pid}</h1>`);
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

export let loginCheck = async(req, res) => {
  const {email,pwd}= req.body;
  let u1 = userData.find(i=>i.email ==email)
  if(!u1){
    return res.send("first register yourself")
  }
  let isMatch =await bcrypt.compare(pwd,u1.pwd)
  if(!isMatch){
    return res.send("invalid Credentials")
  }

  res.render("dashboard")
};
