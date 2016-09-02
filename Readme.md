# request-x-ray
[![Build Status](https://travis-ci.org/Crazometer/request-x-ray.svg?branch=master)](https://travis-ci.org/Crazometer/request-x-ray)

Simple [request](https://github.com/request/request) driver for [x-ray](https://github.com/lapwinglabs/x-ray). Useful for storing cookies, setting custom headers, and changing HTTP methods.

## Installation

```
npm install x-ray
```

## Usage

```js
const xray = require('x-ray')()
const makeDriver = require('request-x-ray')

const options = {
	method: "GET", 						//Set HTTP method
	jar: true, 							//Enable cookies
	headers: {							//Set headers
		"User-Agent": "Firefox/48.0"
	}
}

const driver = makeDriver(options)

const x = xray.driver(driver)

r("http://www.google.com", "title")(function(err, res) {
	console.log("Page retrieved with request!")
})
```
## API

### makeDriver([opts|fn])

Creates a driver to be used by `xray.driver()`. Possible arguments are a request [options object](https://github.com/request/request#requestoptions-callback) or a `request` instance e.g. `request.defaults()`.

## License

MIT License

Copyright (c) 2016 Justin Sprigg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.