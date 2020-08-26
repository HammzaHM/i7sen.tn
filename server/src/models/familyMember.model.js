import Sequelize from 'sequelize';

const DataTypes = Sequelize.DataTypes;

export default function (app) {
    const sequelizeClient = app.get('sequelizeClient');
    const familyMember = sequelizeClient.define('familyMember', {
        CIN: {
            type: DataTypes.STRING(8),
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        familyName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthday: {
            type: DataTypes.DATE,
        },
        relationType: {
            type: DataTypes.ENUM("Son", "Daughter", "Nice", "Oncle", "Tante", "GrandFather", "GrandMother", "Brother", "Sister", "Father", "Mother"),//to be continued
            allowNull: false
        },
        job: {
            type: DataTypes.STRING,
        },
        educationLevel: {
            type: DataTypes.STRING,
        },
        skills: {
            type: DataTypes.ARRAY
        },
        CNAM: {
            type: DataTypes.STRING
        },
        healthSituation: {
            type: DataTypes.UUID
        }

    }, {
        hooks: {
            beforeCount(options) {
                options.raw = true;
            }
        }
    });

    // eslint-disable-next-line no-unused-vars
    familyMember.associate = function (models) {
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
    };

    return familyMember;
}