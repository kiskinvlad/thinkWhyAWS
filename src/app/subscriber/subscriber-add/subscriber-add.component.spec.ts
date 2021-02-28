import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberAddComponent } from './subscriber-add.component';
import {ISubscriber} from '../models/subscriber';
import {of} from 'rxjs';
import {ApiService} from '../../services/api/api.service';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

describe('SubscriberAddComponent', () => {
  let component: SubscriberAddComponent;
  let fixture: ComponentFixture<SubscriberAddComponent>;
  const apiServiceMock = jasmine.createSpyObj('ApiService', ['getContacts', 'addContact']);
  const mockContacts: Array<ISubscriber> = [
    {
      reportID: '123',
      email: 'test@email.com',
      firstName: 'name',
      lastName: 'last name'
    }
  ];

  beforeEach(async () => {
    apiServiceMock.getContacts.and.returnValue(of({Items: mockContacts}));
    apiServiceMock.addContact.and.returnValue(of(mockContacts));

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ SubscriberAddComponent ],
      providers: [
        FormBuilder,
        {provide: ApiService, useValue: apiServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call add new contact', () => {
    component.addSubscriber();
    expect(apiServiceMock.addContact).toHaveBeenCalled();
  });

  it('should emit close form', () => {
    const spyOnObj = spyOn(component.onClose, 'emit');
    component.closeForm();
    expect(spyOnObj).toHaveBeenCalled();
  });
});
