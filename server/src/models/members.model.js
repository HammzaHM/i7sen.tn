// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import Sequelize from 'sequelize';

const DataTypes = Sequelize.DataTypes;

export default function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const members = sequelizeClient.define('members', {
  
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  
  
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  members.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return members;
}
