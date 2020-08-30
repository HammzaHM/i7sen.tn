// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import Sequelize from 'sequelize';

const DataTypes = Sequelize.DataTypes;

export default function (app) {
    const sequelizeClient = app.get('sequelizeClient');
    const healthStatus = sequelizeClient.define('healthStatus', {
        id: {
            type:DataTypes.UUID,
            unique:true,
            primaryKey: true,
            autoIncrement: true,
        },
        illness: {
            type: DataTypes.ARRAY(String),
            allowNul:false
        },
        medecins:{
            type:DataTypes.ARRAY(String),
        },
        CNSS:{
            type:DataTypes.ENUM()
        },        
    }, {
        hooks: {
            beforeCount(options) {
                options.raw = true;
            }
        }
    });

    // eslint-disable-next-line no-unused-vars
    healthStatus.associate = function (models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
    };

    return healthStatus;
}
