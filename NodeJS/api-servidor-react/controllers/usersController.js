import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";
const { findOneByEmail, create } = UserModel

class Users {
    static async getAll(req, res){
        try {
            const users = await UserModel.findAll();
            return res.json({ok: true, msg: users});
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                ok: false,
                msg: "Error Server"
            })
        }
    }

    static async register(req, res){
        try {
            const {username, email, password} = req.body;

            //verificar que las variables vienen llenas
            if(!username || !email || !password) {
                //error 400: No existen los parametros
                return res.status(400).json({ok: false, msg: "Missing required fields: email, password, username"});
            }

            //Verificamos que el email exista
            const user = await findOneByEmail(email);
            console.log(user)
            if(user.length){
                return res.status(400).json({ok: false, msg: "Email already exists"});
            }


            //Encriptacion de la contraseña del usuario
            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(password, salt);

            //creamos el usuario
            const newUser = await create({email, password: hashedPassword, username});
            console.log(newUser)

            const token = jwt.sign({email: newUser.email, username: newUser.username}, process.env.JWT_SECRET, { expiresIn: "1h" });


            return res.status(201).json({
                ok: true,
                msg: {
                    token,
                    role_id: newUser.roleID
                }
            });
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                ok: false,
                msg: "Error Server"
            })
        }
    }

    static async login(req, res){
        try {
            console.log(req.body)
            const {email, password} = req.body;
            if(!email || !password){
                return res.status(400).json({error: "Missing required fields: email, password"});
            }

            const [user] = await UserModel.findOneByEmail(email);//Busqueda del usuario por email
            console.log("User found: ", user); //metodo de depuracion
            if(!user){ //si no existe el usuario
                return res.status(404).json({error: "User not found"});
            }

            //Verificamos si la contraseña que nos da el usuario que existe x email coincide con la contraseña de user
            const isMatch = await bcryptjs.compare(password, user.contrasenia);
            if(!isMatch){ //Si no coinciden las credenciales enviamos error
                return res.status(401).json({error: "Invalid Credentials"})
            }

            //Si los datos del usuario coinciden creo el token
            const token = jwt.sign(
                {email: user.email, role_id: user.roleId},
                process.env.JWT_SECRET,
                {
                    expiresIn: "1h"
                }
            );

            //Envio el token con el mensaje de todo correcto
            return res.json({
                ok:true,
                msg: {
                    token,
                    role_id: user.roleId
                }
            })
        } catch (error) {
            console.log("Error in login Controller: ", error);
            return res.status(500).json({
                ok: false,
                msg: "Server error"
            })
        }
    }

    static async getUserWithUid(req, res){
        try {
            const {id} = req.params;
            
            //verificamos que el id venga como valor
            if(!id){
                return res.status(400).json({ok: false, msg: "Missing required fields: id"});
            }
            
            const user = await UserModel.findOneByUid(id);
            //verificamos la existencia del usuario
            if(!user){
                return res.status(404).json({error: "User not found"});
            }

            return res.status(200).json({ ok: true, msg: user });
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                ok: false,
                msg: "Error Server"
            })
        }
    }

    static async profile(req, res){
        try {
            const user = await UserModel.findOneByEmail(req.body.email);
            res.json({ok: true, msg: user});
        } catch (error) {
            console.log(error);
        }
    }

    static async updateRoleUser(req, res) {
        try {
            const { id } = req.params;

            //Verificamos si el usuario esta registrado
            const user = await UserModel.findOneByUid(id);
            if(!user){
                return res.status(404).json({error: "User not found"});
            }

            //Actualizamos el rol del usuario por su uid
            const userUpdate = await UserModel.updateRolUser(id);

            return res.json({
                ok: true,
                msg: userUpdate
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: "Error Server"
            })
        }
    }

    static async updateInfoUser(req, res) {
        try {
            const {id} = req.params;

            //Verificamos que el usuario exista
            const existsUser = await UserModel.findOneByUid(id);
            if(!existsUser){
                return res.status(404).json({error: "User Not Found"});
            }

            //Si existe lo actualizamos
            const resultUpdateUser = await UserModel.updateInfoUser(id, req.body);

            res.status(200).json({ok: true, msg: resultUpdateUser});
        } catch (error) {
            console.log(error);
            res.status(500).json({ ok: false, msg: "Server Error" });
        }
    }

    static async deleteUser(req, res) {
        try {
            const {id} = req.params;

            //Verificamos que el usuario exista
            const existsUser = await UserModel.findOneByUid(id);
            if(!existsUser){
                return res.status(404).json({error: "User Not Found"});
            }

            // Si existe el usuario lo eliminamos
            const dUser = await UserModel.deleteUser(id);

            res.status(200).json({ok: true, msg: dUser});
        } catch (error) {
            console.log(error);
            res.status(500).json({ ok: false, msg: "Server Error" });
        }
    }
}

export default Users;