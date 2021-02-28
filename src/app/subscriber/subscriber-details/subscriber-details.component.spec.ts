import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberDetailsComponent } from './subscriber-details.component';
import {ApiService} from '../../services/api/api.service';
import {of} from 'rxjs';
import {ISubscriber} from '../models/subscriber';

describe('SubscriberDetailsComponent', () => {
  let component: SubscriberDetailsComponent;
  let fixture: ComponentFixture<SubscriberDetailsComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ SubscriberDetailsComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
