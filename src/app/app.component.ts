import { Component } from '@angular/core';

interface IBox {
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //counter to serve as unique id
  counter: number = 0
  //list of boxes
  boxes: IBox[] = [];

  activeBox: number = -1;

  isKeyboardEnabled: boolean = true;

  onAddNewBox() {
    this.counter++;
    this.boxes.push({ id: this.counter });
  }

  onBoxSelect(box: IBox) {
    this.activeBox = box.id
  }

  onDelete(index: number) {
    this.boxes.splice(index, 1);
  }

  //to optimize UI and reduce dom manipulations on change
  trackByFn(index: number, item: IBox) {
    return item.id;
  }

  onKeyboardControlChange(e: Event) {
    const isChecked = (e.target as HTMLInputElement).checked
    this.isKeyboardEnabled = isChecked;
  }
}
