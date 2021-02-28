import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ISubscriber} from '../models/subscriber';
import {tap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-subscriber-add',
  templateUrl: './subscriber-add.component.html',
  styleUrls: ['./subscriber-add.component.scss']
})
export class SubscriberAddComponent implements OnInit {

  @Output() onClose: EventEmitter<null> = new EventEmitter<null>();
  @Output() onCreated: EventEmitter<ISubscriber> = new EventEmitter<ISubscriber>();

  public form: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  public addSubscriber(): void {
    this.apiService.addContact(this.form.getRawValue()).pipe(
      tap(newSubscriber => this.onCreated.next(newSubscriber))
    ).subscribe();
  }

  public closeForm(): void {
    this.onClose.emit();
  }

}
