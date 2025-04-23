/*-- store all configuration passwords and others --*/
//helps to avoid circular dependency


//jwt passwords

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;

//export the passwords

module.exports = {
    JWT_ADMIN_PASSWORD,
    JWT_USER_PASSWORD
}