import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yes,';
}

@Component({
  selector: 'titleService',
  template: `
  
  <p>
      Select a title to set on the current HTML document:
    </p>
  
    <ul>
      <li><a (click)="setTitle('Good morning!')">Good morning</a>.</li>
      <li><a (click)="setTitle('Good afternoon!')">Good afternoon</a>.</li>
      <li><a (click)="setTitle('Good evening!')">Good evening</a>.</li>
      <li><a (click)="setTitle('Yes!')">Set default</a>.</li>
    </ul>


  `,
  
  
})



export class AppaComponent{
  public constructor(private newtitle:Title ) {}

  public setTitle(title:string){
    this.newtitle.setTitle(title);
  }

  public onKey(event:any){

     this.setTitle(event.target.value);
  }
}