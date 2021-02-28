import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribersListComponent } from './subscribers-list.component';
import {RouterModule, Routes} from '@angular/router';
import { SubscriberDetailsComponent } from './subscriber-details/subscriber-details.component';
import { SubscriberAddComponent } from './subscriber-add/subscriber-add.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: SubscribersListComponent },
];

@NgModule({
  declarations: [SubscribersListComponent, SubscriberDetailsComponent, SubscriberAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class SubscriberModule { }
