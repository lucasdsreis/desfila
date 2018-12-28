var crypto = require('crypto');
var buffer = require('buffer').Buffer;

class Crypto {
	constructor(key) {
		this.key = key
	}

	base(content) {
		return crypto.createHmac('sha1', this.key).update(content).digest().toString('base64')
	}

	hex(content) {
		return crypto.createHmac('sha1', this.key).update(content).digest().toString('hex')
	}

	baseToHex(content) {
		return new buffer(content, 'base64').toString('hex')
	}

	hexToBase(content) {
		return new buffer(content, 'hex').toString('base64')
	}
}

module.exports = Crypto;