import { UpdateEvent } from './../budget-items-list/budget-items-list.component';
import { BudgetItem } from './../../../shared/models/budget-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>()
  totalBudget: number = 0
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem)
    this.totalBudget += newItem.amount
    console.log(newItem);

  }
  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item)
    this.budgetItems.splice(index, 1)
    this.totalBudget -= item.amount
  }

  updateItem(updateEvent: UpdateEvent) {
      this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new
      this.totalBudget -= updateEvent.old.amount
      this.totalBudget += updateEvent.new.amount
  }

}
