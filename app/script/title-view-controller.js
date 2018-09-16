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
                        this._view.ondragover = this._view.ondrop = function (e) {
                                e.preventDefault();
                        };
                        this._view.getElementsByName('file')[0].addEventListener('drop', this.onDropfile.bind(this));
                }
        }, {
                key: 'onClickConnectButton',
                value: function onClickConnectButton() {
                        this._addLog('connect ' + this._view.getElementsByName('ip')[0].value);
                        this._client.connect(this._view.getElementsByName('ip')[0].value, this._view.getElementsByName('name')[0].value, this._view.getElementsByName('password')[0].value);
                }
        }, {
                key: 'onClickDisconnectButton',
                value: function onClickDisconnectButton() {
                        this._addLog('disconnect');
                        this._client.disconnect();
                }
        }, {
                key: 'onClickSendButton',
                value: function onClickSendButton() {
                        console.log('send-button');
                        var filePath = this._view.getElementsByName('file')[0].value;
                        if (filePath == '') {
                                console.log('nofile');
                        } else {
                                this._client.sendFile(filePath);
                                this._addLog('put ' + filePath);
                        }
                }
        }, {
                key: 'onDropfile',
                value: function onDropfile(e) {
                        console.log('drop-file');

                        var file = e.dataTransfer.files[0];
                        this._view.getElementsByName('file')[0].value = file.path;
                        console.log(file.path);
                }
        }, {
                key: '_addLog',
                value: function _addLog() {
                        var string = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];

                        var m = this._view.getElementById('ftp-log');
                        m.value = m.value + '\n' + string;
                        m.scrollTop = m.scrollHeight;
                }
        }]);

        return TitleViewController;
})();

exports['default'] = TitleViewController;
module.exports = exports['default'];