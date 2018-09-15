/**
 * connection-client.js
 * 
 * @author rinoue
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
        value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ConnectionClient = (function () {
        function ConnectionClient() {
                _classCallCheck(this, ConnectionClient);

                var Client = require('ftp');
                this._client = new Client();
        }

        _createClass(ConnectionClient, [{
                key: 'connect',
                value: function connect(host, name, password) {
                        if (name === undefined) name = "defaultname";

                        this._client.connect({
                                host: host,
                                user: name,
                                password: password
                        });

                        this._client.on('ready', function () {
                                console.log('ok');
                        });

                        this._client.on('error', function (err) {
                                console.log(err);
                        });
                }
        }, {
                key: 'disconnect',
                value: function disconnect() {
                        this._client.end();
                }
        }, {
                key: 'send',
                value: function send() {
                        this._client.put();
                }
        }]);

        return ConnectionClient;
})();

exports['default'] = ConnectionClient;
module.exports = exports['default'];