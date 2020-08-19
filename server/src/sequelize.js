import Sequelize from  'sequelize';

export default function (app) {
  const connectionString = app.get('postgres');
  const sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    logging: false,
    define: {
      freezeTableName: true
    }
  });
  const oldSetup = app.setup;

  app.set('sequelizeClient', sequelize);

  app.setup = function (...args) {
    const result = oldSetup.apply(this, args);

    const models = sequelize.models;

    Object.keys(models).forEach(name => {
      if ('associate' in models[name]) {
        models[name].associate(models);
      }
    });

    app.set('sequelizeSync', sequelize.sync());

    return result;
  };
}
