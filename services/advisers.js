const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT *
    FROM tbl_adviser_profiles LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

async function createUser(user){

    const query = `INSERT INTO tbl_users (uid,email_address) VALUES ('${user.uid}', '${user.email_address}')`;

    const result = await db.query(query);
    let message = 'FAILED';

    if (result.affectedRows) {
        message = 'SUCCESS'
    }

    return message;

}

// create adviser profile
async function createAdviserProfile(adviser){

    const query = `INSERT INTO tbl_adviser_profiles (uid,id_number, fsp_number, bio,location,first_name, last_name) 
                        VALUES ('${adviser.uid}', '${adviser.id_number}', '${adviser.fsp_number}', '${adviser.bio}', 
                        '${adviser.location}', '${adviser.first_name}', '${adviser.last_name}')`;

    const result = await db.query(query);
    let message = 'FAILED';

    if (result.affectedRows) {
        message = 'SUCCESS'
    }

    return message;

}

// read single adviser profile
async function readAdviserProfile(id){

    const query = `SELECT * FROM tbl_adviser_profiles WHERE uid = '${id}'`;

    const result = await db.query(query);
    let message = 'FAILED';

    if (result.affectedRows) {
        message = 'SUCCESS'
    }

    return message;

}

module.exports = {
    getMultiple,
    createUser,
    readAdviserProfile,
    createAdviserProfile
}