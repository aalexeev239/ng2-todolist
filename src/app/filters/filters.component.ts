import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Filter} from '../shared/constants';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  filter = Filter;

  @Input() currentFilter: number;
  @Output() change: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setFilter(value: number) {
    this.change.emit(value);
  }

  isActive(filter: number) {
    return this.currentFilter === filter;
  }

}
