import Sequelize from 'sequelize';

const DataTypes = Sequelize.DataTypes;

export default function (app) {
    const sequelizeClient = app.get('sequelizeClient');
    const donation = sequelizeClient.define('donation', {
        donationID: {
            type: DataTypes.UUID,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        donorId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        doneeId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        donationType: {
            type: DataTypes.ENUM('Bourse universitaire', 'Produit alimentaire', 'Bourse mensuelle', 'Aide Medical', 'Aide scolaire'),
            allowNull: false,
        },
        donationValue: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        createdAt: Sequelize.DATE,
    }, {
        hooks: {
            beforeCount(options) {
                options.raw = true;
            }
        }
    });

    // eslint-disable-next-line no-unused-vars
    donation.associate = function (models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
    };

    return donation;
}