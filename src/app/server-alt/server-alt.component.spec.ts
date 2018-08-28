import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerAltComponent } from './server-alt.component';

describe('ServerAltComponent', () => {
  let component: ServerAltComponent;
  let fixture: ComponentFixture<ServerAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
