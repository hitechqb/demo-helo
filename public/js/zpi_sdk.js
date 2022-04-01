/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
(function _() {
	function inIframe() {
		try {
			return window.self !== window.top;
		} catch (e) {
			return true;
		}
	}
	var DOMAIN_ENV = {
		develop: 'https://scdn.zalopay.vn/zst/zpi-spa/sdk',
		sandbox: 'https://scdn.zalopay.vn/zst/zpi-spa/sdk',
		staging: 'https://scdn.zalopay.vn/zst/zpi-spa/sdk',
		production: 'https://scdn.zalopay.vn/zst/zpi-spa/sdk',
	};
	var core = {
		__buffer: {
			replay: function (SDKFuncs) {
				for (var action in this.calls) {
					if (SDKFuncs[action]) {
						this.calls[action](SDKFuncs[action]);
					}
				}
				this.calls = {};
			},
			registerCallback: function (key, value) {
				this.calls[key] = value;
			},
			calls: {},
			env: '',
		},
		getProfile: function getProfile(zpAppID) {
			var _this = this;
			return new Promise(function (resolve) {
				_this.__buffer.registerCallback('getProfile', function (func) {
					func(zpAppID).then(resolve);
				});
			});
		},
		getOTTToken: function getOTTToken() {
			var _this = this;
			return new Promise(function (resolve) {
				_this.__buffer.registerCallback('getOTTToken', function (func) {
					func().then(resolve);
				});
			});
		},
		showOrderPopup: function showOrderPopup(_a, callback) {
			var zpTransToken = _a.zpTransToken,
				zpAppID = _a.zpAppID;
			this.__buffer.registerCallback('showOrderPopup', function (func) {
				return func({ zpTransToken: zpTransToken, zpAppID: zpAppID }, callback);
			});
		},
		openOrderPopup: function showOrderPopup(_a, callback) {
			var zpTransToken = _a.zpTransToken,
				zpAppID = _a.zpAppID;
			this.__buffer.registerCallback('showOrderPopup', function (func) {
				return func({ zpTransToken: zpTransToken, zpAppID: zpAppID }, callback);
			});
		},
		showFriendList: function showFriendList(callback) {
			this.__buffer.registerCallback('showFriendList', function (func) {
				return func(callback);
			});
		},
		navigateTo: function navigateTo(path) {
			this.__buffer.registerCallback('navigateTo', function (func) {
				return func(path);
			});
		},
		setTitle: function setTitle(title) {
			this.__buffer.registerCallback('setTitle', function (func) {
				return func(title);
			});
		},
		scrollTo: function scrollTo(xCoord, yCoord) {
			this.__buffer.registerCallback('scrollTo', function (func) {
				return func(xCoord, yCoord);
			});
		},
		getLocation: function getLocation() {
			this.__buffer.registerCallback('getLocation', function (func) {
				return func();
			});
		},
		handleBlurInput: function handleBlurInput() {
			this.__buffer.registerCallback('handleBlurInput', function (func) {
				return func();
			});
		},
		tracking: function tracking(data) {
			this.__buffer.registerCallback('tracking', function (func) {
				return func(data);
			});
		},
		closeApp: function closeApp() {
			this.__buffer.registerCallback('closeApp', function (func) {
				return func();
			});
		},
		init: function init(env, version) {
			return new Promise(function (resolve) {
				if (!inIframe()) {
					resolve && resolve({ error: -1, message: 'Not in iframe' });
					return;
				}
				var domain = DOMAIN_ENV[env];
				if (!domain) {
					resolve && resolve({ error: -1, message: 'Invalid domain' });
					return;
				}
				core.__buffer.env = env;
				var script = document.createElement('script');
				var scriptID = 'ZPI_SPA_SDK';
				if (document.getElementById(scriptID)) {
					resolve && resolve({ error: -1, message: 'SDK already exist' });
					return;
				}
				var src = domain + '/' + version + '/zpi-spa-sdk.js';
				script.id = scriptID;
				script.src = src;
				if (resolve) {
					script.onload = function () {
						resolve({ error: 1, message: 'Init SDK successfully' });
					};
					script.onerror = function () {
						resolve({ error: -1, message: 'Init SDK failed' });
					};
				}
				try {
					var bodyElement = document.getElementsByTagName('body')[0] || document.body;
					if (bodyElement) {
						bodyElement.appendChild(script);
					} else {
						var firstScriptElement = document.getElementsByTagName('script')[0];
						firstScriptElement.parentNode &&
							firstScriptElement.parentNode.insertBefore(script, firstScriptElement);
					}
				} catch (error) {
					resolve({ error: -1, message: 'Init SDK failed' });
				}
				return;
			});
		},
	};
	window.ZPI_SPA_SDK = core;
})();
