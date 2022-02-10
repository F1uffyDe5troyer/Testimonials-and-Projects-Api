const express = require('express')
const nodemailer = require('nodemailer')


const app = express.Router()

app.post('/', (req, res) => {
    let { name, email, message} = req.body
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'Dalarnoricardomilago@gmail.com',
          pass: 'Jefferdefferson5!!',
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
        },
      });
      
      const mailOptions = {
        from: email,
        to: 'Dalarnoricardmilago@gmail.com',
        subject: 'Sending Email',
        text: `${name} has contacted you
        Please contact them back on ${email}
        ${message}
        `,
      };
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(400).send({ msg: "Email not sent" });
        } else {
          console.log('Email sent:' + info.response);
          res.send({ msg: "Email has been sent successfully" });
        }
      });
});

module.exports = app