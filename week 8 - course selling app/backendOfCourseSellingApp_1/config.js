/*-- store all configuration passwords and others --*/
//helps to avoid circular dependency


//jwt passwords

const JWT_USER_PASSWORD = "dccomicsheroes007";
const JWT_ADMIN_PASSWORD = "leadersOfDC";

//export the passwords

module.exports = {
    JWT_ADMIN_PASSWORD,
    JWT_USER_PASSWORD
}