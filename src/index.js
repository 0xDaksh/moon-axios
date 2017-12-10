(function () {

/**
 * Install plugin
 * @param Moon
 * @param axios
 */

const plugin = {
	init(Moon, axios) {
		if(!axios) {
			console.error('You have to install axios')
			return
		}

		Moon.axios = axios
		Object.defineProperties(Moon.prototype, {
			axios: {
				get() {
					return axios
				}
			},
                        $http: {
                                get() {
                                        return axios
                                }
                        }
		})
	}
}

if(typeof exports == "object") {
	module.exports = plugin
} else if(typeof define == "function" && define.amd) {
	define([], function(){ return plugin })
} else if(window.Moon && window.axios) {
	Moon.use(plugin, window.axios)
}


})()
