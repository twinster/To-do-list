import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Week } from './week';
import { weekservice } from './week.service';
import { InMemoryDataService }  from './weekmemory';

@Component ({
    moduleId: module.id,
    selector: 'my-week',
    templateUrl : './weekly.components.html',
    styleUrls: [ './weekly.components.css' ]
})

export class CategoryComponent implements OnInit {
    //weeks: Week[] = [];
    selectedWeek:Week;
    check='';
    type='Other';
    weeks=JSON.parse(localStorage.getItem('originc'));
    


    constructor(private weekService: weekservice) { }

    ngOnInit(): void {
        this.weekService.getWeeks()
        .then( weekc => this.weeks = weekc.slice(7,12));
    }
    onSelect(week: Week): void 
    {
    this.selectedWeek=week;
    }

    onEnter(value: any) 
    {   
        let task={ name: value, type:this.type};
        if(value){
            this.weeks[this.selectedWeek.id-7].tasks.push(task);
            localStorage.setItem('originc',JSON.stringify(this.weeks));
        }
        
     }

     onselect1(check: string){
         this.check=check;
     }
     
     add (value: any){
        
        let task={ name: value, type: this.type};
        if(value){
            this.weeks[this.selectedWeek.id-7].tasks.push(task);
            localStorage.setItem('originc',JSON.stringify(this.weeks));
        }
     }

     delete(index : number){
        this.weeks[this.selectedWeek.id-7].tasks.splice(index,1);
        localStorage.setItem('originc',JSON.stringify(this.weeks));
     }
     

}