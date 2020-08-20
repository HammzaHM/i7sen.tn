// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import Sequelize from 'sequelize';

const DataTypes = Sequelize.DataTypes;

export default function (app) {
    const sequelizeClient = app.get('sequelizeClient');
    const houseStatus = sequelizeClient.define('houseStatus', {
        id: {
            type: DataTypes.UUID,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        houseType: {
            type: DataTypes.ENUM('rent', 'owner', 'borrow')
        },
        adress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cleanWater: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        electricCurrent: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        sanitaryEquipment: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        contactedAuthoritiesForHelp:{
            type:DataTypes.ARRAY(String),
            allowNull:false
        },
        generalRemarque: {
            type: DataTypes.STRING,
        }

    }, {
        hooks: {
            beforeCount(options) {
                options.raw = true;
            }
        }
    });

    // eslint-disable-next-line no-unused-vars
    houseStatus.associate = function (models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
    };

    return houseStatus;
}
