import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { ApiService } from '../../services/api.service';
=======
import { ApiService } from '../../sevices/api.service';
>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b

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
      this.router.navigateByUrl('/tabs/deaths/${death}');
  }
}