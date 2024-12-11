import bcryptjs from "bcryptjs";
import db from "../database/config.js";

class User {n  
    static async create({email, password, username}){
        let result = await db.query(`INSERT INTO users(email, contrasenia, username) VALUES (?, ?, ?)`, [email, password, username]);

        return {email, username};
    }
    static async findOneByEmail(email){
        let [rows] = await db.query("SELECT * FROM users WHERE email=?", [email]);
        return rows;
    }
    static async findAll() {
        //extraemos el primer objeto que trae el result del query select *
        let [allUsers] = await db.query("SELECT * FROM users");
        return allUsers;
    }
    static async findOneByUid(uid) {
        let [user] = await db.query("SELECT * FROM users WHERE uid = ?", [uid]);
        return user;
    }
    static async updateRolUser (uid) {
        try {
            //Actualizamos primero al usuario
            const [resultUpdate] = await db.query("UPDATE users SET roleId = 2 WHERE uid = ?", [uid]);

            if(resultUpdate.affectedRows === 0){ //esto verifica si se uso o no la actualizacion
                throw new Error(`No user found with UID: ${uid}`);
            }

            //Al usuario actualizado lo retornamos con su nuevo rol
            const [userUpdate] = await db.query("SELECT * FROM users WHERE uid = ?", [uid]);
            return userUpdate[0];
        } catch (error) {
            console.log("Error updating user role: ", error);
            throw error;
        }
    }
    static async updateInfoUser (uid, info){
        try {
            const {email, username, password} = info;

            //El codigo necesario para hashear la contraseña
            const salt = await bcryptjs.genSalt(10);
            const passHahed = await bcryptjs.hash(password, salt);

            const [result] = await db.query("UPDATE users SET username = ?, contrasenia = ?, email = ? WHERE uid = ?", [username, passHahed, email, uid]);

            return result;
        } catch (error) {
            console.log(error)
        }
    }
    static async deleteUser (uid){
        try {
            const [userDelete] = db.query("DELETE FROM users WHERE uid = ?", [uid]);
            return userDelete;
        } catch (error) {
            console.log(error);
        }
    }
}

export default User;