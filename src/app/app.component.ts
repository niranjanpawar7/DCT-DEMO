import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-End';
  //public show_dialog : boolean = false;
  public button_name : any = 'Show Login Form!';


  menuListClose(event){   
    event.target.parentNode.parentNode.parentElement.parentElement.parentElement.parentElement.classList.remove('custom-hide', 'show', 'navbar-collapse', 'collapse');   
  }
}

