const express = require('express')
const { Router } = express
const router = new Router();

const users = [];

router
  .route("/user")
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    const { user } = req.body;
    users.push({ username: user.username, password: user.password });

    console.log(users);

    res.json({ loggedIn: true, status: "Everything went well!" });
  })
  .delete((req, res) => {
    const { username, password } = req.body;

    const existingUser = users.find(
      u => u.username === username && u.password === password
    );
    console.log(existingUser);

    if (!existingUser) {
      res.statusCode(401).json({ errorStatus: "Credentials did not match" });
    }

    users.splice(users.indexOf(existingUser), 1);
    res.json(users);
  });


  // router.post('/create_user', (req, res) => {
//     const { user } = req.body;
//     users.push({ username: user.username, password: user.password });

//     console.log(users)

//     res.json({logginIn: true, status: "Everthing went well!"});
// })


// router.get('/users', (_, res) => {
//     res.json(users)
// })


// // app.put('/update_old', (req, res) => {

// // })


// router.delete('/delete', (req, res) => {
//     const { username, password } = req.body;

//     const existingUser = users.find( 
//         u => u.username === username && u.password === password
//     );
//     console.log(existingUser);

//     if (!existingUser) {
//         res.statusCode(401).json({ errorStatus: 'Credentials did not match '});
//     }

//     users.splice(users.indexOf(existingUser), 1)
//     res.json(users);
// });

module.exports = router;