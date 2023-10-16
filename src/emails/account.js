const mailjet = require ('node-mailjet')
.connect(process.env.MAILJET_API_KEY,process.env.MAILJET_SECRET_KEY)


const sendWelcomeEmail = (email, name) =>{
    const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
    "Messages":[
        {
        "From": {
            "Email": "kartekerawal80@gmail.com",
            "Name": "Karteke"
        },
        "To": [
            {
            "Email": email,
            "Name": name
            }
        ],
        "Subject": "Thank you for joining in.",
        "TextPart": `Welcome to the app ${name}. Let me know how you get along with the app`
        }
    ]
    })
    request
    .then((result) => {
        console.log(result.body)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })
}
const sendCancelEmail = (email, name) =>{
    const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
    "Messages":[
        {
        "From": {
            "Email": "kartekerawal80@gmail.com",
            "Name": "Karteke"
        },
        "To": [
            {
            "Email": email,
            "Name": name
            }
        ],
        "Subject": "I am sorry to see you go.",
        "TextPart": `We would like to know why you cancelled your account`
        }
    ]
    })
    request
    .then((result) => {
        console.log(result.body)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}