import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { dbInit } from './db/init'
import * as handlers from './handlers'

const PORT = 3001
const app = express()

app.use(cors())
app.use(bodyParser.json({ type: 'application/*' }))

app.get('/', (_, res) => res.send('FOO'))
app.post('/member', handlers.addNewMemberHandler)
app.get('/members', handlers.findAllMembersHandler)
app.put('/members/child-parent-relationship', handlers.setChildParentRelationshipHandler)
app.put('/members/spouse-relationship', handlers.setSpouseRelationshipHandler)

dbInit()

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))

