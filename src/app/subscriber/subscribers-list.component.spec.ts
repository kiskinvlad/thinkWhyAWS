import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscribersListComponent } from './subscribers-list.component';
import {ApiService} from '../services/api/api.service';
import {ISubscriber} from './models/subscriber';
import {of} from 'rxjs';

describe('SubscribersListComponent', () => {
  let component: SubscribersListComponent;
  let fixture: ComponentFixture<SubscribersListComponent>;
  const apiServiceMock = jasmine.createSpyObj('ApiService', ['getContacts']);
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

    await TestBed.configureTestingModule({
      declarations: [ SubscribersListComponent ],
      providers: [
        {provide: ApiService, useValue: apiServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update subscribers list', () => {
    const lengthBefore = component.subscribers.length;
    component.onSubscriberCreated(mockContacts[0]);
    expect(component.showForm).toBeFalse();
    expect(component.subscribers.length).toBeGreaterThan(lengthBefore);
  });
});
