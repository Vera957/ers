const nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
});

// send mail with defined transport object
/*await transporter.sendMail({
    from: 'client', // sender address
    to: "good.answer.e@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "deal!", // plain text body
    html: "<b>Hello world?</b>", // html body
});*/

