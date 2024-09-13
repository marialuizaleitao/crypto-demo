// Importando o módulo crypto
const crypto = require('crypto');

// Definindo o algoritmo de criptografia
const algorithm = 'aes-256-cbc';
const secretKey = crypto.randomBytes(32); // Gerando uma chave secreta de 256 bits
const iv = crypto.randomBytes(16); // Vetor de inicialização

// Função para criptografar uma mensagem usando AES
function encryptMessageAES(message) {
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  let encrypted = cipher.update(message, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Função para descriptografar uma mensagem usando AES
function decryptMessageAES(encryptedMessage) {
  const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
  let decrypted = decipher.update(encryptedMessage, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
}

// Mensagem para criptografia
const messageAES = "Essa é uma mensagem usando AES.";
const encryptedMessageAES = encryptMessageAES(messageAES);
console.log("Mensagem criptografada (AES):", encryptedMessageAES);

const decryptedMessageAES = decryptMessageAES(encryptedMessageAES);
console.log("Mensagem descriptografada (AES):", decryptedMessageAES);
