/**
 * title-view-controller.js
 * 
 * @author rinoue
 */

import ConnectionClient from '../script/connection-client';

export default class TitleViewController {
        constructor(view) {
                this._view = view;
                this._client = new ConnectionClient();
        }

        initialize() {
                console.log('init');
                this._view.getElementById('connect-button').addEventListener('click', this.onClickConnectButton.bind(this));
                this._view.getElementById('disconnect-button').addEventListener('click', this.onClickDisconnectButton.bind(this));
                this._view.getElementById('send-button').addEventListener('click', this.onClickSendButton.bind(this));
                this._view.ondragover = this._view.ondrop = function (e) { //TODO: アロー関数にしないといけない？
                        e.preventDefault();
                };
                this._view.getElementsByName('file')[0].addEventListener('drop', this.onDropfile.bind(this));
                //this._setUpOptions(); //とりあえずオプションはHTMLに直で書く
        }

        onClickConnectButton() {
                this._addLog('connect ' + this._view.getElementsByName('ip')[0].value);
                this._client.connect(
                        this._view.getElementsByName('ip')[0].value,
                        this._view.getElementsByName('name')[0].value,
                        this._view.getElementsByName('password')[0].value
                );
        }

        onClickDisconnectButton() {
                this._addLog('disconnect');
                //this._addLog(this._getOptionString()); // for debug
                this._client.disconnect();
        }

        onClickSendButton() {
                console.log('send-button');
                const filePath = this._view.getElementsByName('file')[0].value;
                if ( filePath === '') {
                        console.log('nofile');
                } else {
                        const option = this._getOptionString();
                        this._client.sendFile(filePath, option);
                        this._addLog('put ' + filePath + option);
                }
        }

        onDropfile(e) {
                console.log('drop-file');

                const file = e.dataTransfer.files[0];
                this._view.getElementsByName('file')[0].value = file.path;
                console.log(file.path);
        }

        _addLog(string = "") {
                const m = this._view.getElementById('ftp-log');
                m.value = m.value + '\n' + string;
                m.scrollTop = m.scrollHeight;
        }

        _setUpOptions() {
                const optionField = this._view.getElementById('option-field');
                const newDiv = this._view.createElement('div');
                newDiv.textContent = 'simplex duplex';
                const newCheckBox = this._view.createElement('input');
                newCheckBox.setAttribute('type', 'checkbox')
                optionField.appendChild(newDiv);
        }

        _getOptionString() {
                let options = ',filetype=rtf';
                console.log(this._view.getElementsByName('duplex'));
                if (this._view.getElementsByName('duplex')[0].checked === true) {
                        const str = this._view.getElementsByName('duplex')[1].value;
                        options = options + ',' + str;
                }
                if (this._view.getElementsByName('tray')[0].checked === true) {
                        const str = this._view.getElementsByName('tray')[1].value;
                        options = options + ',tray=' + str.slice(4);
                }
                if (this._view.getElementsByName('paper')[0].checked === true) {
                        const strSize = this._view.getElementsByName('papersize')[0].value;
                        const strKind = this._view.getElementsByName('paperkind')[0].value;
                        options = options + ',paper=' + strSize + '/' + strKind;
                }
                return ' ' + options;
        }
}