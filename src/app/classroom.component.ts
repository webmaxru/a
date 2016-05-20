import { Component, Inject } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire, FirebaseRef} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'classroom-app',
  template: `
    <ul *ngFor="let item of items | async">
      <li class="text">
        {{item}}
      </li>
    </ul>
  `,
  styles: [],
  providers: [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://classroom.firebaseio.com/')
  ],
  directives: [APP_SHELL_DIRECTIVES]
})
export class ClassroomAppComponent {
  title = 'classroom works!';

  items: Observable<any[]>;

  constructor(angularFire: AngularFire, @Inject(FirebaseRef) private ref) {
    this.items = angularFire.list('/items');

    this.ref.push({ foo: 'bar' });
  }
}
