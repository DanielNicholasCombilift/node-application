const express = require('express')
const app = express()
const port = 3000
const indexRouter = require('./routers/indexRouter')

// middlewear
app.use(express.json());
app.use("/api", indexRouter);
// app.use("/admin", adminRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
