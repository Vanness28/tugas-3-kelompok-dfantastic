import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Travel = db.define('detail_restaurant', {
    Nama_Menu: DataTypes.STRING,
    Kategori: DataTypes.STRING,
    Harga: DataTypes.INTEGER,
    Nama_Restaurant: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Travel;

(async() => {
    await db.sync();
})();