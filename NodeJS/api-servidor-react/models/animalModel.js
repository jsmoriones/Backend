import db from "../database/config.js";

class AnimalModel {
  static async insert({name,description,grupo,photo,nacimiento,propietario}){
    try{
      console.log(name,description,grupo,photo,nacimiento,propietario)
      const [result] = await db.query("INSERT INTO animal(nombre, species, owner, description, foto, nacimiento) VALUES (?, ?, ?, ?, ?, ?)", [name,grupo,propietario, description, photo, nacimiento]);

      if(!result.insertId) {
        throw new Error("Error in Data Base")
        return;
      }

      return result;
    } catch(error) {
      return error;
    }
  }

  static async getAllAnimals(){
    try{
      const [result] = await db.query("SELECT pid, animal.nombre, description, foto, nacimiento, specie.nombre AS specie, users.username AS owner FROM animal, specie, users WHERE specie.eid = animal.species AND animal.owner = users.uid ORDER BY pid DESC");
      return result;
    } catch(error) {
      console.log(error);
      return error;
    }
  }

  static async getSpecies(){
    try{
      const [result] = await db.query("SELECT * FROM specie");
      return result;
    } catch(error) {
      console.log(error);
      return error;
    }
  }

  static async getAnimaById(id){
    try{
      const [result] = await db.query("SELECT pid, animal.nombre, description, foto, nacimiento, specie.nombre AS specie, users.username AS owner FROM animal, specie, users WHERE specie.eid = animal.species AND animal.owner = users.uid AND pid = ?", [id]);
      return result;
    } catch(error) {
      console.log(error);
      return error;
    }
  }

  static async updateSpecie(id, {name, description, grupo, nacimiento, photo}){

    try{
      const [result] = await db.query(`UPDATE animal SET nombre = ?, species = ?, description = ?, nacimiento = ?, foto = ? WHERE pid = ?`, [name, parseInt(grupo), description, nacimiento, photo, id]);

      if(!result.insertId) {
        throw new Error("Error in Data Base")
        return;
      }

      return result;
    } catch(error) {
      return error;
    }
  }

  static async deleteAnimal(id){
    try{
      const [result] = await db.query("DELETE FROM animal WHERE pid = ?", [id]);
      return result;
    } catch(error) {
      console.log(error);
      return error;
    }
  }
}

export default AnimalModel;