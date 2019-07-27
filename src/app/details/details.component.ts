import { Component, OnInit } from '@angular/core';

/*importing services*/
import { DealsService } from '../deals.service'





@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public myResponse;

  constructor(public dealsHttpService: DealsService) {
    console.log('Details component constructor is called');
  }

  ngOnInit() {
    console.log('Details component onInit called');

    this.myResponse = JSON.parse(localStorage.getItem('details'));
    console.log(this.myResponse)
    return this.myResponse;


  }
  //reverse function 
  public reverseString(str) {
    str = str.split(''); //string to array
    str = str.reverse(); //reverse the order 
    str = str.join(''); //then join the reverse order values
    return str;
  }



}
