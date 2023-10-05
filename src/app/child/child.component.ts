import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // @Input() item1=0;
  // @Input() item2=0;
  @Output() updatedataevent = new EventEmitter<string>()
}
