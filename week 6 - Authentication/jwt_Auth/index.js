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

//sign and not generate
const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmFidW5haXIiLCJhY2NvdW50TnVtYmVyIjoxMjM0NTEyMzQ1LCJpYXQiOjE3NDA3NDI3MzF9.3mMw2SYXFrtiegqJIeSSxVIYqpYcH10C8cqbYU7qS7g", "secret");

console.log(verifiedValue);