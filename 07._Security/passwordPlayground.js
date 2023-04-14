// passwords aldrig som plain text
// enkrypter passwords
// enkryptering er ikke nødvendigvis sikker

import bcrypt from "bcrypt"
const passwordPlainText = "hunter42"
const passwordPlainText2 = "notHunter"
const hashedPassword = "$2b$12$Y.kFuqowjzvqtNP6WonXBu1XxdbENJhRdfZ8Vum7k0KKbgQTvxg9C";

const encryptedPassword = await bcrypt.hash(passwordPlainText, 12);
console.log(encryptedPassword);

const isSame = await bcrypt.compare(passwordPlainText2, hashedPassword);
console.log(isSame);