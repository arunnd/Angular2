import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Subject }    from 'rxjs/Subject';

import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})
export class SearchComponent implements OnInit {
  private searchTerms = new Subject<string>();
  @Output() filter: EventEmitter<string>= new EventEmitter<string>();
  constructor() {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map((term: string) => this.filter.emit(term))
    ).subscribe();
  }
}
