const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors({ origin: true }))

app.post('/authenticate', async (req, res) => {
  const { username } = req.body

  try {
    const response = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { 'private-key': '9cd7bb11-4c0f-4cc3-8e7a-abd2bfdd6355' } }
    )
    return res.status(response.status).json(response.data)
  } catch (error) {}
  return res.json({ username: username, secret: 'sha256...' })
})

app.listen(3001)
