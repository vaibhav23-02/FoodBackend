const pool = require('../db');

const findOrganizationById = (id)=>
{
    const query = "SELECT * FROM organisation WHERE id=$1";
    return pool.query(query,[id]).then(res=> res.rows[0]);
}

module.exports = findOrganizationById;
