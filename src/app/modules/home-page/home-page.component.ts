import { Component } from '@angular/core';
import { socialMediasMock } from './mocks/social-medias';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public socialMediaList = socialMediasMock;

  public downloadPdf() {
    const pdfUrl = '/assets/curriculo_nicolas__dev_flutter_junior.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'curriculo_nicolas__dev_flutter_junior.pdf';
    link.click();
  }
}
