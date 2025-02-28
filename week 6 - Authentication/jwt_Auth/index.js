/**----------------
 * JWT- generate, decode, verify
 * ----------------
 */
const jwt = require("jsonwebtoken");

/**generate */

const value = {
    name: "babunair",
    accountNumber: 1234512345
}

//create a jwt
const token = jwt.sign(value, "secret");
//the token has been generated using a particular secret, hence the token can be verified only using this secret.

console.log(token);