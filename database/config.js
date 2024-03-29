var mongoose = require("mongoose");

class Database {
    constructor() {
        this.conectar();
    }

    async conectar() {
        try {
            mongoose.set('strictQuery', true);
            await mongoose.connect(process.env.MONGODB_CNN);
            console.log('Conexion lista')
        } catch (error) {
            console.error(JSON.stringify(error))
        }
    }
}

//A01LINNO6347\SQLEXPRESS

module.exports = new Database();