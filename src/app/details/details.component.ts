import { Component, OnInit } from '@angular/core';

/*importing services*/
import { DealsService } from '../deals.service'



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public selectedItem;
  public details;

  constructor(public dealsHttpService : DealsService) { 
    console.log('List component constructor is called');
  }

  ngOnInit() {
    console.log('Details component onInit called');
    
   
  }

 

}
