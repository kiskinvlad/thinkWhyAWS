import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import {environment} from '../../../environments/environment';
import {ISubscriber} from '../../subscriber/models/subscriber';
import {from, Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {catchError, tap} from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private options = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    }
  };

  constructor(private toastr: ToastrService) {
  }

  public getContacts(): Observable<Array<ISubscriber>> {
    return from(API.get(environment.apiName, '/subscriber', this.options)).pipe(
      catchError((e) => {
        this.toastr.error('Cannot get contacts', 'Get Contact Error');
        return null;
      })
    );
  }

  public addContact(body: ISubscriber): Observable<ISubscriber> {
    return from(API.post(environment.apiName, '/subscriber', {
      ...this.options,
      body
    })).pipe(
      tap((data) => this.toastr.success(`Successfully created contact ${data.recordID}`, 'Create Contact Success!')),
      catchError(() => {
        this.toastr.error('Cannot create contact', 'Create Contact Error');
        return null;
      })
    );
  }
}
