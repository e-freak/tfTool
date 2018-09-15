/**
 * title-view-controller-loader.js
 * 
 * @author rinoue
 */

import TitleViewContoller from '../script/title-view-controller';

global.window.addEventListener('DOMContentLoaded', function () {
        global.controller = new TitleViewContoller(global.document);
        global.controller.initialize();        
}, false);
