import { Component } from '@angular/core';
import { ListItemService } from './listItem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ListItemService]
})
export class AppComponent {

  listItem = [];

  constructor(private listItemService: ListItemService) {}

  ngOnInit() {
    // this.listItem = this.listItemService.listItem
    // console.log(this.listItemService.getListItems())
    this.listItemService.getListItems()
      .subscribe((data) => {
        this.listItem = data.products;
        console.log(this.listItem);
      })
  }
}
