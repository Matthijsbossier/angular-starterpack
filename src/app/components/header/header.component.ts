// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html'
// })
// export class HeaderComponent implements OnInit {

//   title = 'Angular2 Starter';

//   constructor() { }

//   ngOnInit() {
//   }

// }

import {Component, EventEmitter, Output  
} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html' 

})
export class HeaderComponent{
@Output() featureSelected = new EventEmitter<string>();

onSelect(feature: string)  {
    this.featureSelected.emit(feature);
    }
}