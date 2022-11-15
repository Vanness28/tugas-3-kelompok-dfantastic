import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Travel = db.define('destination', {
    Nama_Wisata: DataTypes.STRING,
    Alamat: DataTypes.STRING,
    Biaya_Masuk: DataTypes.INTEGER,
    Deskripsi: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Travel;

(async() => {
    await db.sync();
})();