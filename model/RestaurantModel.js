import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Travel = db.define('restaurant', {
    Nama_Restoran: DataTypes.STRING,
    Alamat: DataTypes.STRING,
    Desk: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Travel;

(async() => {
    await db.sync();
})();