import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todolist Joris De Ridder';
  list:any[] = [];

  addTask(item:string)
  {
    console.log(item);
    //shows warning on console
    //console.warn(item);
    this.list.push({id:this.list.length,name:item});
    //console.warn(this.list);
  }
  removeTask(id:number)
  {
    // console.warn(id);
    //removes current item we provide from the list because its not the same as the given id
    this.list = this.list.filter(item => item.id !== id)
  }
}
