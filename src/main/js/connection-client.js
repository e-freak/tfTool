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

        connect(host, name = "defaultname", password) {
                this._client.connect({
                        host: host,
                        user: name,
                        password: password,
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

        sendFile(filePath, option) {
                const slice = filePath.split('\\');
                console.log('put ' + slice[slice.length - 1] + option);
                this._client.put(filePath, slice[slice.length - 1] + option, err => {
                        if (err) throw err;
                });
        }
}