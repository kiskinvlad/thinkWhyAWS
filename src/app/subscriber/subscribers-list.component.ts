import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api/api.service';
import {Observable} from 'rxjs';
import {finalize, pluck, take} from 'rxjs/internal/operators';
import {ISubscriber} from './models/subscriber';

@Component({
  selector: 'app-subscribers-list',
  templateUrl: './subscribers-list.component.html',
  styleUrls: ['./subscribers-list.component.scss']
})
export class SubscribersListComponent implements OnInit {

  private subscribers$: Observable<Array<ISubscriber>>;

  public selectedSubscriber: ISubscriber;

  public showForm: boolean;
  public isLoading = true;
  public subscribers: Array<ISubscriber> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
     this.subscribers$ = this.apiService.getContacts().pipe(
      take(1),
      pluck('Items'),
    );

     this.subscribers$.pipe(
       finalize(() => this.isLoading = false)
     ).subscribe(subscribers => { this.subscribers = subscribers; });
  }

  public onSubscriberCreated(subscriber: ISubscriber): void {
    this.showForm = false;
    this.subscribers.push(subscriber);
  }

}
