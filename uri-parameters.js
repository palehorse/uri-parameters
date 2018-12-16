var UriParameters = (function(factory) {
	if (typeof require === 'function') {
		module.exports = factory;
	} else {
		return new factory;
	}
})(function(url) {
	var _parameters = {}, _url = url;

	function _init(url) {
		if (typeof url === 'string') _url = url;
		else _url = location.href;
		var sources = (typeof _url.split('?')[1] !== 'undefined') ? _url.split('?')[1].split('&') : [];
		_url = _url.replace('?' + (sources.length ? _url.split('?')[1] : ''), '');
		for (var i in sources) {
			_parameters[sources[i].split('=')[0]] = sources[i].split('=')[1];
		}
	}

	function _build(data) {
		for (var key in data) {
			_parameters[key] = data[key];
		}
	}

	function _get(key) {
		if (typeof _parameters[key] !== 'undefined') return _parameters[key];
		return '';
	}

	function _set(key, value) {
		_parameters[key] = data[key];
	}

	_init(url);

	return {
		build: function(data) {
			if (typeof data === 'object') _build.call(null, data);
			return this;
		},
		get: function(key) {
			return _get.call(null, key);
		},
		set: function(key, value) {
			_set.call(null, key, value);
			return this;
		},
		getUrl: function() {
			var querystr = '';
			for (var key in _parameters) {
				querystr += key + '=' + _parameters[key];
			}
			return _url + '?' + querystr;
		}
	}
});