// Importando o módulo crypto
const crypto = require('crypto');

// Função para gerar um par de chaves RSA
function generateRSAKeyPair() {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048, // Tamanho da chave
  });
  return { publicKey, privateKey };
}

// Função para criptografar uma mensagem usando a chave pública
function encryptMessageRSA(publicKey, message) {
  const encryptedMessage = crypto.publicEncrypt(publicKey, Buffer.from(message));
  return encryptedMessage.toString('base64');
}

// Função para descriptografar uma mensagem usando a chave privada
function decryptMessageRSA(privateKey, encryptedMessage) {
  const decryptedMessage = crypto.privateDecrypt(privateKey, Buffer.from(encryptedMessage, 'base64'));
  return decryptedMessage.toString();
}

// Gerando pares de chaves para dois usuários
const user1 = generateRSAKeyPair();
const user2 = generateRSAKeyPair();

// Mensagem de Fernando Alonso para Lewis Hamilton
const messageFromAlonso = "Lewis, minha estratégia será parar na volta 20. Vamos ver quem chega na frente!";
const encryptedForHamilton = encryptMessageRSA(user2.publicKey, messageFromAlonso);
console.log("Mensagem criptografada de Fernando Alonso para Lewis Hamilton:", encryptedForHamilton);

const decryptedForHamilton = decryptMessageRSA(user2.privateKey, encryptedForHamilton);
console.log("Mensagem descriptografada por Lewis Hamilton:", decryptedForHamilton);

// Mensagem de Lewis Hamilton para Fernando Alonso
const messageFromHamilton = "Fernando, estou de olho nos seus tempos de volta. Prepare-se para uma batalha até o final!";
const encryptedForAlonso = encryptMessageRSA(user1.publicKey, messageFromHamilton);
console.log("Mensagem criptografada de Lewis Hamilton para Fernando Alonso:", encryptedForAlonso);

const decryptedForAlonso = decryptMessageRSA(user1.privateKey, encryptedForAlonso);
console.log("Mensagem descriptografada por Fernando Alonso:", decryptedForAlonso);
