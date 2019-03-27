import { Component, OnInit } from '@angular/core';

import { Week } from './week';
import { weekservice } from './week.service';
import { InMemoryDataService }  from './weekmemory';


@Component({
    moduleId:module.id,
    selector:'my-week',
    templateUrl:'./weekly.components.html',
    styleUrls:['./weekly.components.css']
})
export class WeeklyComponent implements OnInit{
    // weeks: Week[] = [];
    selectedWeek: Week;
    check=''; 
    type='Others';  
    typeid:any;
    weeks=JSON.parse(localStorage.getItem('originw'));
    

    constructor(private weekService: weekservice) { }

    ngOnInit(): void {
        this.weekService.getWeeks()
        .then( weekw => this.weeks = weekw.slice(0,7));
    }

    onSelect(week: Week): void 
    {   
        this.selectedWeek=week;  
            
    }
    

    onEnter(value: any) 
    {   
        let task={name: value, type:this.type};
        if(value){
            this.weeks[this.selectedWeek.id].tasks.push(task);    
            localStorage.setItem('originw',JSON.stringify(this.weeks));

        }
     }

     onselect(event:any, id:any){
         this.type=event;
         this.typeid=id;
         console.log(id);
     }

     onselect1(check: string){
         this.check=check;
     }

     add (value: any){
        let task={ name: value, type:this.type};
        if(value){
            this.weeks[this.selectedWeek.id].tasks.push(task); 
            localStorage.setItem('originw',JSON.stringify(this.weeks));
            
            console.log(this.typeid);     
        }          
     }

     delete(index : number){
        this.weeks[this.selectedWeek.id].tasks.splice(index,1);
        localStorage.setItem('originw',JSON.stringify(this.weeks));
     }
    
}