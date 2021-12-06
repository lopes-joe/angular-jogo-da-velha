import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { JogoDaVelhaModule } from './modules/jogo-da-velha';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        JogoDaVelhaModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
});
