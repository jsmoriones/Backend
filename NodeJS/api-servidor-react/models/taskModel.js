import db from "../database/config.js";

class TaskModel {
  static async addTask({title,taskDead,userAssign,priority}){
    let result = await db.query("INSERT INTO tasks(title,taskDead,userAssign,priority) values(?,?,?,?)", [title,taskDead,userAssign,priority]);

    return result;
  }

  static async listAllTask(){
    let [result] = await db.query("SELECT tasks.tid, tasks.title, tasks.taskDead, users.username, tasks.priority, tasks.status, tasks.createdAt FROM tasks, users WHERE tasks.userAssign = users.uid ORDER BY tid DESC");
    return result;
  }

  static async taskForUser(id){
    let [result] = await db.query("SELECT * FROM tasks WHERE userAssign = ?", [id]);
    return result;
  }

  static async updateTask(id, body){
    const { title, taskDead, userAssign, priority } = body;
    try{
      let [result] = await db.query("UPDATE tasks SET title = ?,taskDead = ?,userAssign = ?,priority = ? WHERE tid = ?", [title,taskDead,userAssign,priority, id]);
      return result;
    } catch(error) {
      console.log(error);
    }
  }

  static async removeTask(id){
    try{
      let [result] = await db.query("DELETE FROM tasks WHERE tid = ?", [id]);
      return result;
    } catch(error) {
      console.log(error);
    }
  }

}

export default TaskModel;