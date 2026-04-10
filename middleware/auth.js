import jwt from "jsonwebtoken";
export const auth = (req, res, next) => {
  console.log("token ", req.headers.token);
  try {
    let token = req.headers.token;
    if (token == undefined) {
      //       return res.json({
      //         success: false,
      //         msg: "you are not authorized",
      //       });
      res.redirect("/login");
    }
    let d = jwt.verify(token, "CODEWAREIT");
    console.log("d ",d);
    req.user = d.name;
//     req.user = "yeh jo hain middleware k sath chipak kar chalega";

    next();
  } catch (error) {
    return res.redirect("/login");
  }

  console.log("authentication");
  next();
};
