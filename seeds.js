import mongoose from mongoose;
import User from "./ src / models";

mongoose.connect('mongodb://127.0.0.1:27017/newsLetter', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("OHH NO CONNECTION ERROR!!!")
        console.log(err)
    });

const p = new User({
    email: 'arielgatera23@gmail.com',
    password: 'monkey',
    phonenumber: '0785232213',
    location: 'kigali'
})

p.save().then(p => {
    console.log(p)
})
    .catch(e => {
        console.log(e)
    })

