"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {

	/**
  * Install plugin
  * @param Moon
  * @param axios
  */

	var plugin = {
		init: function init(Moon, axios) {
			if (!axios) {
				console.error('You have to install axios');
				return;
			}

			Moon.axios = axios;
			Object.defineProperties(Moon.prototype, {
				axios: {
					get: function get() {
						return axios;
					}
				},
				$http: {
					get: function get() {
						return axios;
					}
				}
			});
		}
	};

	if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object") {
		module.exports = plugin;
	} else if (typeof define == "function" && define.amd) {
		define([], function () {
			return plugin;
		});
	} else if (window.Moon && window.axios) {
		Moon.use(plugin, window.axios);
	}
})();