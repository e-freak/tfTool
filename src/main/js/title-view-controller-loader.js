/**
 * title-view-controller-loader.js
 * 
 * @author rinoue
 */

'use strict';

import TitleViewContoller from '../script/title-view-controller';

global.window.addEventListener('DOMContentLoaded', function () {
        global.controller = new TitleViewContoller(global.document);
        global.controller.initialize();        
}, false);
