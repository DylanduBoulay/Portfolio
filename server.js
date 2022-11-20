const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');


//server used to send the email
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(3000, () => console.log('Server running'));

//email transporter
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "dylanduboulay@gmail.com",
        pass: ""
    },
});

contactEmail.verify((error) => {
    if(error){
        console.log(error);
    }
    else{
        console.log('Ready to send');
    }
});

//send email
router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "dylanduboulay@gmail.com",
        subject: "New Message from Contact Form",
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>`
    };

    contactEmail.sendMail(mail, (error) => {
        if(error){
            res.json(error);
        }
        else{
            res.json({code: 200, status: 'Message sent'});
        }

    });

});