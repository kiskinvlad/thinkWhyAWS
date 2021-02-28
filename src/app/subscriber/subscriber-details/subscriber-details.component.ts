import {Component, Input} from '@angular/core';
import {ISubscriber} from '../models/subscriber';

@Component({
  selector: 'app-subscriber-details',
  templateUrl: './subscriber-details.component.html',
  styleUrls: ['./subscriber-details.component.scss']
})
export class SubscriberDetailsComponent {

  @Input() subscriber: ISubscriber;

}
