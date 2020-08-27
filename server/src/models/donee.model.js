// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import Sequelize from 'sequelize';

const DataTypes = Sequelize.DataTypes;

export default function (app) {
    const sequelizeClient = app.get('sequelizeClient');
    const donee = sequelizeClient.define('donee', {
        id: {
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
            allowNull: false,
            field:"birth_place"
        },
        phone: {
            type: DataTypes.STRING(8),
        },
        CNAMType: {
            type: DataTypes.STRING,
            field:"cnam_type"
        },
        NumCNAM: {
            type: DataTypes.STRING,
            field:"num_cnam"
        },
        job: {
            type: DataTypes.STRING,
        },
        CivilStatus: {
            type: DataTypes.ENUM('Single', 'Married', 'Widow', 'Divorced'),
            allowNull: false,
            field:"civil_status"
        },        
        givenDonations: {
            type: DataTypes.ARRAY(DataTypes.UUID),
            field:"given_donations"
        },
        houseStatus: {
            type: DataTypes.UUID,
            allowNull: false,
            field:"house_status"
        },
        familyMembers: {
            type: DataTypes.ARRAY,
            field:"family_members"
        },
        cinUrl: {
            type: DataTypes.STRING,
            field:"cin_url"
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
