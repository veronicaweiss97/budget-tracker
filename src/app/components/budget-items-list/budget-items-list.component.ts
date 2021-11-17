import { EditItemModalComponent } from './../edit-item-modal/edit-item-modal.component';
import { BudgetItem } from './../../../shared/models/budget-item.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-budget-items-list',
  templateUrl: './budget-items-list.component.html',
  styleUrls: ['./budget-items-list.component.scss']
})

export class BudgetItemsListComponent implements OnInit {

  @Input() budgetItems!: BudgetItem[]
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>()
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>()

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteItem(item: BudgetItem) {
    this.delete.emit(item)
  }
  onCardClick(item: BudgetItem) {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '25rem',
      data: item,
    })
    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        //replacing the old iy=tem with new updated item after edition (after edit submit)

       this.update.emit({
         old: item,
         new: result
       })
      }
    })
  }

}

export interface UpdateEvent {
  old: BudgetItem,
  new: BudgetItem
}
