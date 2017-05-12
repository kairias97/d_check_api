'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mydchecksupp@gmail.com',
        pass: 'suppdcheck2017'
    }
});



exports.sendEmail = function(toEmail, mySubject, myPlainContent){
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"D-Check Admin" <mydchecksupp@gmail.com>', // sender address
        to: toEmail, // list of receivers
        subject: mySubject, // Subject line
        text: myPlainContent // html body
    };


    return new Promise((resolve, reject)=> {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return reject(error);
            }
            return resolve(info);
        });    
    });
};
    