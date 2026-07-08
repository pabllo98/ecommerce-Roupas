import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}


// Rota para Login
const loginUser = async (req,res) => {
    try {
        
        const {email,password} = req.body;
        
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success:false, message: "Usuário não encontrado!"})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch){

            const token = createToken(user._id)
            res.json({success:true, token})
        }
        else {
            res.json({success:false, message: "Senha incorreta!"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
    }
}

// Rota para cadastro
const registerUser = async (req,res) => {
    try {
        
        const {name,email,password} = req.body;

        // Verifica se o usuário já existe
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message: "Usuário já existe!"})
        }

        // validar formato de email e senha 
        if(!validator.isEmail(email)) {
            return res.json({success:false, message: "Email inválido!"})
        }
        if (password.length < 8) {
            return res.json({success:false, message: "Senha deve ter no mínimo 8 caracteres!"})
        }

        // Criptografar a senha
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success:true, token})

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
    }
}

// Rota para login do ADM
const loginAdmin = async (req,res) => {

}

export {loginUser, registerUser, loginAdmin}