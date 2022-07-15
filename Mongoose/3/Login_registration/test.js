const bcrypt = require("bcrypt");
const backend = [];
const User = require("./models/models");
const pw = "passwords";

// bcrypt.hash(pw, 13).then(function (hash) {
//    //    console.log(hash);
//    const newUser = new User({
//       first_name: "first",
//       last_name: "last",
//       email: "123@gmail.com",
//       password: hash,
//       birthday: "01/01/1990",
//    });
//    try {
//       backend.push(newUser);
//    } catch (err) {
//       console.log("error ----> ", err);
//    }
// });

const newUser = new User({
   first_name: "first",
   last_name: "last",
   email: "123@gmail.com",
   password: bcrypt.hashSync("password", 10),
   birthday: "01/01/1990",
});
backend.push(newUser);
// console.log(backend);

async function checkUser(username, password) {
   const user = backend[0];
   if (user.email == username) {
      const match = await bcrypt.compare(password, user.password);

      if (match) {
         console.log("match");
         return;
      }
      console.log("failed");
   }
   console.log("wrong email.");
}

checkUser("123@gmail.com", "password");
