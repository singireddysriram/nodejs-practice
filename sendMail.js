const nodemailer = require('nodemailer')


//login 

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'ssriram8790@gmail.com',
        pass:'yydzlojwucmcarqg'
    }
})

//content

let mailoptions = {
    from:'ssriram8790@gmail.com',
    to:'ramsrinu970158@gmail.com',
    subject: 'Test mail ',
    text: 'hello from the nodemailer'
}

transporter.sendMail(mailoptions,(error,info)=>{
if(error){
console.error('error',error.message)
}else{
    console.log("mail sent",info.messageId)
}
})