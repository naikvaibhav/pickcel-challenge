/*this list component calls api to fetch deals from amazon*/
import { Component, OnInit } from '@angular/core';

/*importing services*/
import { DealsService } from '../deals.service'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  public deals;

  constructor(public dealsHttpService: DealsService) {
    console.log('List component constructor is called');
  }

  ngOnInit() {
    console.log('List component onInit called');
    /*subscribing to observables*/
    this.dealsHttpService.getAmazonDeals().subscribe(
      data => {
        console.log('logging data');
        this.deals = data["data"];
        console.log(this.deals)
      },
      /*handle error if not subscribed*/
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }








}
