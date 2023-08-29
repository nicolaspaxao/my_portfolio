import { Component } from '@angular/core';
import { stackListMock } from './stack-list';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  public stackList = stackListMock;
}
