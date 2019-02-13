import { Component } from '@angular/core';
import {
  SzEntitySearchParams,
  SzAttributeSearchResult
} from '@senzing/sdk-components-ng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /** the current search results */
  public currentSearchResults: SzAttributeSearchResult[];
  /** the entity to show in the detail view */
  public currentlySelectedEntityId: number = undefined;
  /** the search parameters from the last search performed */
  public currentSearchParameters: SzEntitySearchParams;
  /** whether or not to show the search results panel */
  public showSearchResults = false;

  /**
   * Getter for whether or not the SzEntityDetail panel 
   * should be shown.
   */
  public get showSearchResultDetail(): boolean {
    if(this.currentlySelectedEntityId && this.currentlySelectedEntityId > 0) {
      return true;
    }
    return false;
  }

  /**
   * Event handler for when a search has been performed in 
   * the SzSearchComponent.
   */
  onSearchResults(evt: SzAttributeSearchResult[]){
    console.log('searchResults: ',evt);
    // store on current scope
    this.currentSearchResults = evt;
    // results module is bound to this property

    // show results
    this.showSearchResults = true;
  }

  /**
   * Event handler for going back to the previous screen 
   * when on the detail view
   */
  public onBackToSearchResultsClick($event): void {
    this.showSearchResults = true;
    this.currentlySelectedEntityId = undefined;
  }

  /**
   * Event handler for when a entity detail row is 
   * clicked on in the SzSearchResultsComponent
   */
  public onSearchResultClick(entityData: SzAttributeSearchResult){
    if(entityData && entityData.entityId > 0) {
      this.currentlySelectedEntityId = entityData.entityId;
      this.showSearchResults = false;
    } else {
      this.currentlySelectedEntityId = undefined;
      this.showSearchResults = true;
    }
  }

  /**
   * Event handler for when the fields in the SzSearchComponent 
   * are cleared.
   */
  public onSearchResultsCleared(searchParams: SzEntitySearchParams){
    // hide search results
    this.showSearchResults = false;
    this.currentSearchResults = undefined;
    this.currentlySelectedEntityId = undefined;
  }
  
  /**
   * Event handler for when the parameters of the search performed from 
   * the SzSearchComponent has changed. This only happens on submit button click
   */
  public onSearchParameterChange(searchParams: SzEntitySearchParams) {
    console.log('onSearchParameterChange: ', searchParams);
    this.currentSearchParameters = searchParams;
  }

}
