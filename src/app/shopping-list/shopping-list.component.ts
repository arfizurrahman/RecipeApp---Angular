import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromShoppingList from './store/shopping-list.reducers';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  constructor(private shoppinglistService: ShoppingListService, private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.shoppinglistService.startedEditng.next(index);
  }



}
