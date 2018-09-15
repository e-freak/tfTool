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
                this._client.disconnect();
        }

        onClickSendButton() {
                console.log('send-button');
                this._client.send();
        }

        _addLog(string = "") {
                const m = this._view.getElementById('ftp-log');
                m.value = m.value + '\n' + string;
                m.scrollTop = m.scrollHeight;
        }
}