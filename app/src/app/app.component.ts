import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
      
      <li><a (click)="setTitle('Good morning!')">Good morning</a></li>
      <li><a (click)="setTitle('Good afternoon!')">Good afternoon</a></li>
      <li><a (click)="setTitle('Good evening!')">Good evening</a></li>
      <li><a (click)="setTitle('Yes!')">Set default</a></li>
      
      <li>
        <a class="noCursor">
          <label >Set custom title</label>
          <br/>
          <input type="text" [(ngModel)]="customTitle">
          <button (click)="setTitle('Yes')">Set title</button>
        </a>
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppaComponent {
  public constructor(private newtitle: Title) { }

  public customTitle:string = "";

  public setTitle(title: string) {
    if(this.customTitle){
      this.newtitle.setTitle(this.customTitle);
      this.customTitle = "";
    }
    else{
      this.newtitle.setTitle(title);
    }
  }

  public onKey(event: any) {

    this.setTitle(event.target.value);
  }
}

@Component({
  selector: 'headerText',
  template: `
    <h1>This is a page for navigation between different experiments.</h1>  
  `,
  styleUrls: ['./app.component.scss']
})

export class DefaultText {
}