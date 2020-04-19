import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})

export class QuotesPage implements OnInit {

    quotes: Observable<any>;

    constructor(private router: Router, private api: ApiService) { }
  
  ngOnInit() {
      this.quotes = this.api.getQuotes();
      this.quotes.subscribe(data => {console.log('my data: ',data);
    
    });
  }
  openDetail(deaths){
      let quotes_author = name;
      this.router.navigateByUrl('/tabs/quotes/${quotesAuthor}');
  }
}
=======

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b
