const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodeMailer = require("nodemailer");
const { contactEmail } = require("./contactEmail");
require("dotenv").config({ path: ".env" });

// Configure the express server middleware
const app = express();

// Take the raw requests and turn them into properties that are usable in req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

app.post("/", (req, res) => {
  transporter.sendMail(contactEmail(req.body));
  res.send("Success!");
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Contact server running on ${port}!`));
