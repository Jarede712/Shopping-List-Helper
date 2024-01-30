const path = require("path")
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
require("dotenv").config();


const resetFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector("#reset-email").value.trim();

    if(email) {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "ulisesd404@gmail.com",
              pass: "Eldivino404@"
            }
          });
          
          const handlebarOptions = {
            viewEngine: {
              extName: ".handlebars",
              partialsDir: path.resolve("./views"),
              defaultLayout: false,
            },
            viewPath: path.resolve("./views"),
            extName: ".handlebars",
          }
          
          transporter.use("compile", hbs(handlebarOptions));
          
          var mailOptions = {
            from: "ulisesd404@gmail.com",
            to: "404sycamorerd@gmail.com",
            subject: "Reset your Password",
            template: "email",
            context: {
              title: "Reset your password",
              text: "placeholder"
            }
          
          };
          
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });
    }
    if (response.ok){
        document.location.replace("/")
    }else {
        alert("Input a valid email.");
    }

}




document.querySelector(".recover").addEventListener("submit", resetFormHandler)