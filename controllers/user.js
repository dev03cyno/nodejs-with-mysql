const User = require("../models/user.js")
const bcrypt = require("bcryptjs")

const register = async(req,res)=>{
    try{
        const {
            name,
            username,
            email,
            password
        } = req.body
        

        const usernameExist = await User.findOne({ where: { username: username } });
    if (usernameExist) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const emailExist = await User.findOne({ where: { email: email } });
    if (emailExist) {
        return res.status(400).json({ message: "Email already exists" });
    }
    const hashPassword = await bcrypt.hash(req.body.password,10);
        const user = await User.create({
            name,
            email,
            username,
            password:hashPassword
        })
        user.save()
        return res.status(201).json(user)
    }catch(err){
        return res.status(500).json({message:err})
    }
}

const login = async(req,res) => {
    try{
        const {
            username,
            password
        } = req.body
        const userExist = await User.findOne({where:{username:username}})
        if(userExist){
            const isMatch = await bcrypt.compare(password,userExist.password)
            if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. "}) 
            delete userExist.password;
            res.status(200).json(userExist);
        }
    }catch(err){
        return res.status(500).json({message:err})
    }
}


module.exports = {
    register,
    login
}