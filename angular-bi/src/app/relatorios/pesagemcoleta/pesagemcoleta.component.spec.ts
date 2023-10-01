import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesagemcoletaComponent } from './pesagemcoleta.component';

describe('PesagemcoletaComponent', () => {
  let component: PesagemcoletaComponent;
  let fixture: ComponentFixture<PesagemcoletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesagemcoletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesagemcoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
