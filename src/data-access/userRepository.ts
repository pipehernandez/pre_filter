import { Pool } from "mysql2/promise";

export class UserRepository{
  constructor(private pool: Pool){}
  async all(){
    try {
      const [rows] = await this.pool.query('SELECT * FROM users');
      return(rows);
  } catch (error:any) {
    console.error("There is an error" + error.message)
  }
  }

  async getById(id){
    try {
       const [rows] = await this.pool.query('SELECT * FROM users WHERE id = ?', id)
    } catch (error) {
      
    }
  }
  
}