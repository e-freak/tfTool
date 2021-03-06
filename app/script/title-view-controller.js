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
                                //TODO: アロー関数にしないといけない？
                                e.preventDefault();
                        };
                        this._view.getElementsByName('file')[0].addEventListener('drop', this.onDropfile.bind(this));
                        //this._setUpOptions(); //とりあえずオプションはHTMLに直で書く
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
                        //this._addLog(this._getOptionString()); // for debug
                        this._client.disconnect();
                }
        }, {
                key: 'onClickSendButton',
                value: function onClickSendButton() {
                        console.log('send-button');
                        var filePath = this._view.getElementsByName('file')[0].value;
                        if (filePath === '') {
                                console.log('nofile');
                        } else {
                                var option = this._getOptionString();
                                this._client.sendFile(filePath, option);
                                this._addLog('put ' + filePath + option);
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
        }, {
                key: '_setUpOptions',
                value: function _setUpOptions() {
                        var optionField = this._view.getElementById('option-field');
                        var newDiv = this._view.createElement('div');
                        newDiv.textContent = 'simplex duplex';
                        var newCheckBox = this._view.createElement('input');
                        newCheckBox.setAttribute('type', 'checkbox');
                        optionField.appendChild(newDiv);
                }
        }, {
                key: '_getOptionString',
                value: function _getOptionString() {
                        var optionNameArray = ['autotray', 'direction', 'duplex', 'resolution', 'negaposi', 'centering', 'fit', 'tifffit', 'errormessage', 'printarea', 'diskbuffer', 'magprocess']; // そのままオプションになるタイプ
                        var optionNameArray2 = ['filetype', 'bin', 'copies', 'mag', 'leftspace', 'rightspace', 'topspace', 'bottomspace', 'xoffset', 'yoffset', 'xmargin', 'ymargin', 'multicols', 'multirows', 'xmag', 'ymag', 'brightness', 'contrast', 'orientation', 'autoreduce']; // option=選択肢 になるタイプ

                        var options = '';
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                                for (var _iterator = optionNameArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                        var optionString = _step.value;

                                        if (this._view.getElementsByName(optionString)[0].checked === true) {
                                                var str = this._view.getElementsByName(optionString)[1].value;
                                                options = options + ',' + str;
                                        }
                                }
                        } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                        } finally {
                                try {
                                        if (!_iteratorNormalCompletion && _iterator['return']) {
                                                _iterator['return']();
                                        }
                                } finally {
                                        if (_didIteratorError) {
                                                throw _iteratorError;
                                        }
                                }
                        }

                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                                for (var _iterator2 = optionNameArray2[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                        var optionString = _step2.value;

                                        if (this._view.getElementsByName(optionString)[0].checked === true) {
                                                var str = this._view.getElementsByName(optionString)[1].value;
                                                options = options + ',' + optionString + '=' + str;
                                        }
                                }
                        } catch (err) {
                                _didIteratorError2 = true;
                                _iteratorError2 = err;
                        } finally {
                                try {
                                        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                                                _iterator2['return']();
                                        }
                                } finally {
                                        if (_didIteratorError2) {
                                                throw _iteratorError2;
                                        }
                                }
                        }

                        if (this._view.getElementsByName('tray')[0].checked === true) {
                                var str = this._view.getElementsByName('tray')[1].value;
                                options = options + ',tray=' + str.slice(4);
                        }
                        if (this._view.getElementsByName('paper')[0].checked === true) {
                                var strSize = this._view.getElementsByName('papersize')[0].value;
                                var strKind = this._view.getElementsByName('paperkind')[0].value;
                                options = options + ',paper=' + strSize + '/' + strKind;
                        }
                        if (this._view.getElementsByName('autopaper')[0].checked === true) {
                                var strSize = this._view.getElementsByName('autopapersize')[0].value;
                                var strKind = this._view.getElementsByName('autopaperkind')[0].value;
                                var strTrans = this._view.getElementsByName('autopapertrans')[0].value;
                                options = options + ',paper=' + strSize + '/' + strKind + '/' + strTrans;
                        }
                        if (this._view.getElementsByName('freesize')[0].checked === true) {
                                //TODO
                                var strWidth = '210';
                                var strHeight = '297';
                                options = options + ',freesize=' + strWidth + 'x' + strHeight;
                        }
                        return ' ' + options;
                }
        }]);

        return TitleViewController;
})();

exports['default'] = TitleViewController;
module.exports = exports['default'];