import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.scss']
})
export class WorkingComponent {
  @Input() titleInput: string = '';
}
