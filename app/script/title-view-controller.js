/**
 * title-view-controller.js
 * 
 * @author rinoue
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
        value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _scriptConnectionClient = require('../script/connection-client');

var _scriptConnectionClient2 = _interopRequireDefault(_scriptConnectionClient);

var TitleViewController = (function () {
        function TitleViewController(view) {
                _classCallCheck(this, TitleViewController);

                this._view = view;
                this._client = new _scriptConnectionClient2['default']();
        }

        _createClass(TitleViewController, [{
                key: 'initialize',
                value: function initialize() {
                        console.log('init');
                        this._view.getElementById('connect-button').addEventListener('click', this.onClickConnectButton.bind(this));
                        this._view.getElementById('disconnect-button').addEventListener('click', this.onClickDisconnectButton.bind(this));
                        this._view.getElementById('send-button').addEventListener('click', this.onClickSendButton.bind(this));
                }
        }, {
                key: 'onClickConnectButton',
                value: function onClickConnectButton() {
                        console.log('connect-button');
                        this._client.connect();
                }
        }, {
                key: 'onClickDisconnectButton',
                value: function onClickDisconnectButton() {
                        console.log('disconnect-button');
                        this._client.disconnect();
                }
        }, {
                key: 'onClickSendButton',
                value: function onClickSendButton() {
                        console.log('send-button');
                        this._client.send();
                }
        }]);

        return TitleViewController;
})();

exports['default'] = TitleViewController;
module.exports = exports['default'];