var crypto = require('crypto');
var algorithm = 'aes-256-cbc';
var key = crypto.randomBytes(32);
var iv = crypto.randomBytes(16);
function encrypt(text) {
    var cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    var encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'),
        encryptedData: encrypted.toString('hex') };
}
var encrypted = encrypt("Hello World!");
function decrypt(text) {
    var iv = Buffer.from(text.iv, 'hex');
    var encryptedText = Buffer.from(text.encryptedData, 'hex');
    var decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
    var decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
var decrypted = decrypt(encrypted);
console.log("Decrypted Text: " + decrypted);
//# sourceMappingURL=password-hash.js.map