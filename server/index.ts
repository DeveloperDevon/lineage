import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { dbInit } from "./db/init";
import router from "./routes";
// import { pgClient } from "./db/pg";
import { findUser } from "./db/pg/users/find-user";
// import { getMembers } from "./db/pg/members/get-members";
import { addNewMember } from "./db/pg/members";

const PORT = 3001;

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json({ type: "application/*" }));

app.get("/ping", (_, res) => res.send("pong"));
app.use("/", router);

dbInit();

// addNewMember({ firstName: 'Chandler', lastName: 'Reichardt', gender: 'female' }).then(console.log)
// getMembersInfo().then(console.log)

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
