import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { dbInit } from './db/init'
import { authRouter, membersRouter } from './routes'

const PORT = 3001

const app = express()

app.use(cors())
app.use(bodyParser.json({ type: 'application/*' }))

app.get('/ping', (_, res) => res.send('pong'))
app.use('/auth', authRouter)
app.use('/members', membersRouter)

dbInit()

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))

