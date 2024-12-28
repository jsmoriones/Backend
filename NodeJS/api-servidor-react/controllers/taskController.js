import TaskModel from "../models/taskModel.js";

class TaskController {
  static async addTask(req, res){
    try{
      const [result] = await TaskModel.addTask(req.body);

      if(result.affectedRows == 1){
        res.status(201).json({
          ok: true,
          msg:{
            user: {id: result.insertId,...req.body}
          }
        })
      }
    } catch(error) {
      console.log(error)
      return res.status(500).json({
          ok: false,
          msg: "Error Server"
      })
    }
  }

  static async listAllTask(req, res){
    try{
      let result = await TaskModel.listAllTask();
      return res.status(200).json({ok:true, msg: result});
    } catch(error) {
      console.log(error)
      return res.status(500).json({
          ok: false,
          msg: "Error Server"
      })
    }
  }
}

export default TaskController;