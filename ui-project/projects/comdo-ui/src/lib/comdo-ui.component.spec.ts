import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComdoUiComponent } from './comdo-ui.component';

describe('ComdoUiComponent', () => {
  let component: ComdoUiComponent;
  let fixture: ComponentFixture<ComdoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComdoUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComdoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
