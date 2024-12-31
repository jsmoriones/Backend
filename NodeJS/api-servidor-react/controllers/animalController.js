import {unlink} from "fs";
import animalModel from "../models/animalModel.js";


class AnimalController {
  static async insert(req, res){
    try{
      let imageCreated = req.file ? req.file.filename : "default.png";
      const result = await animalModel.insert({...req.body, photo: imageCreated});

      if(result.message || !result.insertId){
        unlink(`${import.meta.dirname}/../public/img/files/${imageCreated}`, (err) => {
          if(err){
            console.log("Error de imagen: ", err)
          }else{
            console.log("Se elimino")
          }
        });
        res.status(400).json({
          ok: false,
          msg: {
            error: result.message
          }
        })
        return;
      }

      res.json({
        ok:true,
        msg: {
          animal: {
            id: result.insertId,
            ...req.body,
            photo: imageCreated
          }
        }
      })
    } catch(error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: error
      })
    }
  }
  static async getAllAnimals(req, res){
    try{
      const result = await animalModel.getAllAnimals();
      res.json({
        ok: true,
        msg:{
          animals: result
        }
      })
    } catch(error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: error
      })
    }
  }
  static async getSpecies(req, res) {
    try{
      const result = await animalModel.getSpecies();
      res.json({
        ok: true,
        msg:{
          species: result
        }
      })
    } catch(error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: error
      })
    }
  }
  static async getAnimaById(req, res) {
    try{
      const [result] = await animalModel.getAnimaById(req.params.id);
      res.json({
        ok: true,
        msg:{
          animal: result
        }
      })
    } catch(error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: error
      })
    }
  }
  static async updateSpecie(req, res){
    let bodyInfo = req.body;
    if(req.file){
      console.log("Si hay imagen")
      //Si cambio la imagen elimino la anterior
      unlink(`${import.meta.dirname}/../public/img/files/${bodyInfo.old_image}`, (err) => {
        if(err){
          console.log("Error de imagen: ", err)
        }else{
          console.log("Se elimino")
        }
      });
    }
    let imageCreated = req.file ? req.file.filename : bodyInfo.old_image;
    let data = await animalModel.updateSpecie(req.params.id, {...req.body, photo: imageCreated});
    res.status(200).json({
      ok: true,
      msg: {
        animal: data
      }
    })
  }

  static async deleteAnimal(req, res){
    try{

      const [animal] = await animalModel.getAnimaById(req.params.id);
      console.log(animal)
      unlink(`${import.meta.dirname}/../public/img/files/${animal.foto}`, async (err) => {
        if(err){
          console.log("Error de imagen: ", err)
          throw new Error("No existe la imagen a eliminar, ya la eliminaron")
        }else{
          console.log("Se elimino imagen: "+animal.foto)
          const result = await animalModel.deleteAnimal( parseInt(req.params.id) );
          res.status(200).json({
            ok: true,
            msg: {
              text: "El animal se elimino correctamente",
              result
            }
          })
        }
      });

    } catch(error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: {
          text: "Hubo un error en el servidor",
          error: error
        }
      })
    }
  }
}

export default AnimalController;