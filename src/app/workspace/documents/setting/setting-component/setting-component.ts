import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommonComponent} from "../../CommonLib";

@Component({
    moduleId: module.id,
    selector: 'setting-component',
    templateUrl: 'setting-component.html'
})

export class SettingComponent extends CommonComponent implements OnInit{

    constructor(router: Router) {
        super();
        this.router = router;
    }

    router: Router;

    ngOnInit() {
    }
    
}
