const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "myadviser-db.cxqiugogzntz.af-south-1.rds.amazonaws.com",
        user: "dbmaster_sbu",
        password: "1qazxsw2#EDC",
        database: "myadviserdb",
    },
    listPerPage: 10,
};
module.exports = config;