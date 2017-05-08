import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-list',
  template: `      
        <h2 class="h2">List</h2>
        <div class="card"
             style="width: 40rem;">
          <div class="list-group">
            <a href="#"
               class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">first name last</h5>
                <small>2015-03-18 04:29:31</small>
              </div>
              <p class="mb-1">markus.vanveluw@example.com</p>
              <small>4190 calle de la democracia</small>
            </a>
          </div>
        </div>
  `,
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
