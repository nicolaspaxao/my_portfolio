import { Component, OnInit } from '@angular/core';
import { socialMediasMock } from './mocks/social-medias';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.component.html',
  styleUrls: ['./introducao.component.scss']
})
export class IntroducaoComponent implements OnInit {

  public socialMediaList = socialMediasMock;

  ngOnInit(): void { }

  public downloadPdf() {
    const pdfUrl = '/assets/curriculo_nicolas__dev_flutter_junior.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'curriculo_nicolas__dev_flutter_junior.pdf';
    link.click();
  }

}
