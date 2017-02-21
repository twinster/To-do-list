import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    try {
      let weeks = [
      {id: 0, name: 'Monday', tasks:[]},
      {id: 1, name: 'Tuesday',tasks:[]},
      {id: 2, name: 'Wednesday',tasks:[]},
      {id: 3, name: 'Thursday',tasks:[]},
      {id: 4, name: 'Friday',tasks:[]},
      {id: 5, name: 'Saturday',tasks:[]},
      {id: 6, name: 'Sunday',tasks:[]},
      {id: 7, name: 'Shopping',tasks:[]},
      {id: 8, name: 'Training',tasks:[]},
      {id: 9, name: 'Studying',tasks:[]},
      {id: 10, name: 'Relaxing',tasks:[]},
      {id: 11, name: 'Projects',tasks:[]},
      {id: 12, name: 'joni',tasks:[{}]}
      
    ];
    localStorage.setItem('originw',JSON.stringify(weeks.slice(0,7)));
    localStorage.setItem('originc',JSON.stringify(weeks.slice(7,12)));
    } catch (error) {
      
    }
    
    
    let weekw=JSON.parse(localStorage.getItem('originw'));
    let weekc=JSON.parse(localStorage.getItem('originc'));

    return {weekw,weekc};
    //return {weeks}
    
  }
}
