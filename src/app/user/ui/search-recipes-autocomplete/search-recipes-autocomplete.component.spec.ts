import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRecipesAutocompleteComponent } from './search-recipes-autocomplete.component';

describe('SearchRecipesAutocompleteComponent', () => {
  let component: SearchRecipesAutocompleteComponent;
  let fixture: ComponentFixture<SearchRecipesAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchRecipesAutocompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchRecipesAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
