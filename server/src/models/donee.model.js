// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import Sequelize from 'sequelize';

const DataTypes = Sequelize.DataTypes;

export default function (app) {
    const sequelizeClient = app.get('sequelizeClient');
    const donee = sequelizeClient.define('donee', {
        doneeId: {
            type: DataTypes.STRING(8),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        gender: {
            type: DataTypes.ENUM("Male", "Female"),
            allowNull: false
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        birthPlace: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(8),
        },
        CNAMType: {
            type: DataTypes.STRING
        },
        NumCNAM: {
            type: DataTypes.STRING,
        },
        job: {
            type: DataTypes.STRING,
        },
        healthSituation: {
            type: DataTypes.UUID
        },
        CivilStatus: {
            type: DataTypes.ENUM('Single', 'Married', 'Widow', 'Divorced'),
            allowNull: false
        },
        organisationId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        givenDonation: {
            type: DataTypes.ARRAY(DataTypes.UUID),
        },
        houseStatus: {
            type: DataTypes.UUID,
            allowNull: false
        },
        familyMembers: {
            type: DataTypes.ARRAY
        },
        cinUrl: {
            type: DataTypes.STRING
        },
        // madhaminURL:{
        // }        
    }, {
        hooks: {
            beforeCount(options) {
                options.raw = true;
            }
        }
    });

    // eslint-disable-next-line no-unused-vars
    donee.associate = function (models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
    };

    return donee;
}
