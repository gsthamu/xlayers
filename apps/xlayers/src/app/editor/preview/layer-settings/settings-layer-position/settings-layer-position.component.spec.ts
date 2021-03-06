import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsLayerPositionComponent } from './settings-layer-position.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';
import { XStore } from '../../../../core/state/state.mock';

describe('SettingsLayerPositionComponent', () => {
  let component: SettingsLayerPositionComponent;
  let fixture: ComponentFixture<SettingsLayerPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NgxsModule.forRoot([XStore]), TranslateModule.forRoot()],
      declarations: [SettingsLayerPositionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsLayerPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
