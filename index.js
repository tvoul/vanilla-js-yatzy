import express from 'express'
const app = express()
const port = 7001

app.use(express.static('www'));

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))

