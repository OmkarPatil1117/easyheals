const userModel = require("../models/model")
const model = require("../models/model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const loginController = async (req, res) => {
    try {
        const  { email, password } = req.body;
        const user = await userModel.findOne({email : email})
        if(!user) {
            return res.status(200).send({message : "iserNot found", sucess : false})
        } else {
            const isMatch = await bcrypt.compare(password, user.password)
            console.log(isMatch);
            if(!isMatch) {
                return res.status(200).send({message :" invalid email password", success : false})
            } 
            const token = jwt.sign({ id : user._id }, process.env.JWT_SECRET , {expiresIn : "1d"});
            res.status(200).send({ message : "Login Success", success : true, token })

        }
    } catch (err) {
        console.log(err);
        res.send(500).send({message : "error in login ctrl", success : false})
    }
}

const registerController =  async(req, res) => {
    const  {email, password , name } = req.body
    try {
        const existingUser = await userModel.findOne({ email : email })
        console.log(existingUser);
    
        if(existingUser) { 
            return res.status(200).send({message : "user already exixst" ,success : true} )
        } 
        let password = req.body.password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)
        password = hashPassword
        const newUser = new userModel({
            name : name,
            email : email,
            password : password
        })
        await newUser.save();
        res.status(201).send({message : "Register Succesfully", success : true})
    } catch (e) {
        console.log(e)
        res.status(500).send({ success : false, message : `Register Controller ${e}`  })
    }
}


const authController = async(req, res) => {
    try {
        const user = await userModel.findOne({_id : req.body.userId})
        if(!user) {
            return res.status(200).send({message : "User not found", success : false})
        } else {
            res.status(200).send({
                success : true,
                data : {
                    name : user.name,
                    email : user.email,
                }
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message : "auth errror",
            success : false,
            error
        })
    }
}
module.exports = { loginController, registerController, authController }