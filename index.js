var Request = require('request')

function makeDriver(opts) {
	if (typeof opts === "function") {
		var request = opts
	} else {
		var request = Request.defaults(opts)
	}	

	return function driver(context, callback) {
		var url = context.url

		request(url, function(err, response, body) {
			return callback(err, body)
		})
	}
}

module.exports = makeDriver