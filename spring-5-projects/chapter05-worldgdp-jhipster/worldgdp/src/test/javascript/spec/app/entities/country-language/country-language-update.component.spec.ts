import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { WorldgdpTestModule } from '../../../test.module';
import { CountryLanguageUpdateComponent } from 'app/entities/country-language/country-language-update.component';
import { CountryLanguageService } from 'app/entities/country-language/country-language.service';
import { CountryLanguage } from 'app/shared/model/country-language.model';

describe('Component Tests', () => {
  describe('CountryLanguage Management Update Component', () => {
    let comp: CountryLanguageUpdateComponent;
    let fixture: ComponentFixture<CountryLanguageUpdateComponent>;
    let service: CountryLanguageService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [WorldgdpTestModule],
        declarations: [CountryLanguageUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(CountryLanguageUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CountryLanguageUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CountryLanguageService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new CountryLanguage(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new CountryLanguage();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
