import {Component, OnInit,trigger,state,style,transition,animate,keyframes, group} from '@angular/core';
//import initDemo = require('../../../assets/js/init/charts.js');
//import initVectorMap = require('../../../assets/js/init/initVectorMap.js');
//import initNotify = require('../../../assets/js/init/notify.js');


declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'home-cmp',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{
    ngOnInit() {
        // Init Tooltips
        //$('[rel="tooltip"]').tooltip();
        //initDemo();
        //initVectorMap();
        //initNotify();
    }
}
