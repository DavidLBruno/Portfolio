import express, { Response, Request } from 'express';
import nodemailer from 'nodemailer';
require('dotenv').config();

const { PASSWORD, MAIL } = process.env;

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth:{
        user: MAIL,
        pass: PASSWORD
    },
});

transporter.verify().then(() => {
    console.log("Ready for send emails")
}, () => {
    console.log("Don't ready for send emails")
})

const recibirMail = async (req : Request, res : Response) => {
    try{
        const { name, mail, subject } = req.body;
        const sendMail = await transporter.sendMail({
            from: `${name} - ${mail}`, // sender address
            to: MAIL, // list of receivers
            subject: `${mail} - ${name}`, // Subject line
            html: `<b>${subject}</b>`, // html body
        });
        return res.status(200).json(sendMail);
    }catch(error){
        console.log(error);
        return res.status(400).json("Error");
    }
};

export {
    recibirMail
}
