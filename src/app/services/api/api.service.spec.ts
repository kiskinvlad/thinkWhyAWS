import {fakeAsync, TestBed} from '@angular/core/testing';

import { ApiService } from './api.service';
import {ToastrService} from 'ngx-toastr';
import { API } from 'aws-amplify';

describe('ApiService', () => {

  let apiService: ApiService;
  let toastServiceSpy: jasmine.SpyObj<ToastrService>;

  const fakeSubscriber = {
    email: 'test@mail.com',
    firstName: 'name',
    lastName: 'last name'
  };

  beforeEach(() => {
    API.get = jasmine.createSpy()
      .and.returnValue(Promise.resolve([{data: 'data'}]));
    API.post = jasmine.createSpy()
      .and.returnValue(Promise.resolve([{data: 'data'}]));
    toastServiceSpy = jasmine.createSpyObj('ToastrService', ['error', 'success']);
    apiService = new ApiService(toastServiceSpy);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('should get contacts', fakeAsync(() => {
    apiService.getContacts().subscribe(() => expect(API.get).toHaveBeenCalled());
  }));

  it('should add contact', fakeAsync(() => {
    apiService.addContact(fakeSubscriber).subscribe(() => {
        expect(API.post).toHaveBeenCalled();
      }
    );
  }));

  it('should show success message', fakeAsync(() => {
    apiService.addContact(fakeSubscriber).subscribe(() => {
        expect(toastServiceSpy.success).toHaveBeenCalled();
      }
    );
  }));

});
