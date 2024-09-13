# Projeto de Criptografia em Node.js: RSA e AES

Este projeto demonstra a implementação de criptografias assimétrica (RSA) e simétrica (AES) em Node.js, utilizando a biblioteca nativa `crypto` do Node para ambas as implementações. Abaixo, você encontrará uma explicação detalhada de cada método de criptografia, exemplos de código e uma comparação entre os dois algoritmos.

## Criptografia Assimétrica (RSA)

A criptografia RSA (Rivest-Shamir-Adleman) envolve a geração de um par de chaves: uma chave **pública** e uma chave **privada**. A chave pública é usada para criptografar dados, enquanto a chave privada é usada para descriptografá-los. Esse método é amplamente utilizado para garantir a segurança da comunicação em redes.

### Como funciona a Criptografia Assimétrica?

Na criptografia assimétrica, duas chaves são matematicamente relacionadas: a chave pública, que pode ser compartilhada abertamente, e a chave privada, que é mantida secreta. Quando uma mensagem é criptografada com a chave pública de um destinatário, apenas o destinatário que possui a chave privada correspondente pode descriptografá-la. Esse método é considerado seguro porque, mesmo que a chave pública seja conhecida, é praticamente impossível derivar a chave privada a partir dela.

### Implementação de RSA em Node.js

O código para a implementação da criptografia RSA pode ser encontrado [aqui](./asymmetric-encryption-rsa.js). Nele, os dois usuários (Fernando Alonso e Lewis Hamilton) trocam mensagens criptografadas usando suas respectivas chaves públicas e privadas.

## Criptografia Simétrica (AES)

Na criptografia AES (Advanced Encryption Standard), uma única chave secreta é usada tanto para criptografar quanto para descriptografar dados. Esse método é amplamente utilizado para proteger dados em repouso e em movimento devido à sua alta eficiência e velocidade.

### Como funciona a Criptografia Simétrica?

Na criptografia simétrica, o mesmo segredo ou chave é utilizado tanto para a criptografia quanto para a descriptografia de dados. AES é um algoritmo de chave simétrica de 128, 192, ou 256 bits, amplamente utilizado para criptografia de dados devido à sua segurança e eficiência. A principal vantagem da criptografia simétrica é a velocidade; no entanto, o desafio está na distribuição segura da chave secreta.

### Implementação de AES em Node.js

O código para a implementação da criptografia AES pode ser encontrado [aqui](./symmetric-encryption-aes.js). No exemplo, uma mensagem é criptografada e depois descriptografada usando a mesma chave secreta.

## Comparação de Algoritmos

### 1. Qual algoritmo é mais rápido?

- **AES é significativamente mais rápido que RSA**. Isso ocorre porque AES é um algoritmo de chave simétrica e, por isso, o processo de criptografia e descriptografia é computacionalmente mais simples e eficiente. No exemplo de código, criptografar e descriptografar uma mensagem com AES leva uma fração do tempo que levaria com RSA.

### 2. Em que situação você utilizaria criptografia assimétrica?

- A criptografia assimétrica é utilizada em situações onde a troca segura de chaves é crucial, como em comunicações seguras via HTTPS, assinaturas digitais, e troca de chaves para criptografia simétrica. Ela é ideal para garantir que a comunicação entre duas partes não possa ser interceptada por terceiros.

### 3. Quando a criptografia simétrica é mais adequada?

- A criptografia simétrica é mais adequada para o armazenamento seguro de dados e para a transmissão de grandes volumes de dados, onde a velocidade e a eficiência são importantes. Exemplo: criptografia de arquivos, bases de dados, e backups.

### 4. Como os dois algoritmos podem ser combinados (modelo híbrido)?

- Um modelo híbrido utiliza ambos os algoritmos para maximizar segurança e desempenho. A chave simétrica (AES) é usada para criptografar dados devido à sua velocidade, enquanto a chave assimétrica (RSA) é usada para criptografar a chave simétrica ao transmiti-la de maneira segura. Esse modelo é comumente usado em protocolos como SSL/TLS.

## Conclusão

Nesse projeto, exploramos os conceitos e implementações de criptografia assimétrica (RSA) e simétrica (AES) em Node.js. Enquanto a criptografia RSA oferece uma maneira segura de trocar chaves em redes inseguras, AES proporciona uma solução eficiente para a criptografia de grandes volumes de dados. Ambos os métodos têm suas próprias vantagens e são frequentemente usados em conjunto em sistemas de criptografia modernos para garantir tanto segurança quanto desempenho.
