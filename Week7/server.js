const express = require("express")
const morgan = require('morgan')

const athleteRouter = require("./routes/athleteRouter")

const app = express()
const PORT = 9000

app.use(express.json())
app.use(morgan('dev'))

app.use('/athletes', athleteRouter)


app.listen(PORT, () => {
    
})