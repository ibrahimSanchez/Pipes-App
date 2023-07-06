import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {


  public nameLower: string = 'ibrahim';
  public nameUpper: string = 'IBRAHIM';
  public fullName:  string = 'iBrAhIm MáRqUez sÁnChEz';


  public customDate: Date = new Date();

}
