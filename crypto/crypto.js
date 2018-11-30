var crypto = require('crypto');
var key = "kbi3gQSU@HQ0iiu271dMudN";//加密的秘钥

module.exports = {
    encrypt: function (text) {
        var cipher = crypto.createCipher('aes-256-cbc', key)
        var crypted = cipher.update(text, 'utf8', 'base64');
        crypted += cipher.final('base64');
        return crypted;
    },
    decrypt: function (text) {
        var decipher = crypto.createDecipher('aes-256-cbc', key);
        var dec = decipher.update(text, 'base64', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }
}