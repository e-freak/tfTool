/**
 * title-view-controller.js
 * 
 * @author rinoue
 */

'use strict';

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
                console.log('connect-button');
                this._client.connect();
        }

        onClickDisconnectButton() {
                console.log('disconnect-button');
                this._client.disconnect();
        }

        onClickSendButton() {
                console.log('send-button');
                this._client.send();
        }
}