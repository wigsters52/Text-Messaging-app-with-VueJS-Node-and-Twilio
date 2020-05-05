require('dotenv').config()
const app = require('express')()
const twilio = require('twilio')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3000
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'This is a messaging app!',
  })
})

//twilio account information

const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`)
})
