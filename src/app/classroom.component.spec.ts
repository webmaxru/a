import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ClassroomAppComponent } from '../app/classroom.component';

beforeEachProviders(() => [ClassroomAppComponent]);

describe('App: Classroom', () => {
  it('should create the app',
      inject([ClassroomAppComponent], (app: ClassroomAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'classroom works!\'',
      inject([ClassroomAppComponent], (app: ClassroomAppComponent) => {
    expect(app.title).toEqual('classroom works!');
  }));
});
