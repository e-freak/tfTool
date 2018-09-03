/**
 * connection-client.js
 * 
 * @author rinoue
 */

export default class ConnectionClient {
        constructor() {
                const Client = require('ftp');
                this._client = new Client();
        }

        connect() {
                this._client.connect({
                        host: '10.247.83.78',
                        name: 'name',
                        password: '',
                });

                this._client.on('ready', () => {
                        console.log('ok');
                })

                this._client.on('error', err => {
                        console.log(err);
                })
        }

        disconnect() {
                this._client.end();
        }

        send() {
                this._client.put();
        }
}