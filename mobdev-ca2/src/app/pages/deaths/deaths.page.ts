import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { ApiService } from '../../services/api.service';
=======
import { ApiService } from '../../sevices/api.service';

>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b
@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
<<<<<<< HEAD

export class DeathsPage implements OnInit {

    deaths: Observable<any>;

    constructor(private router: Router, private api: ApiService) { }
=======
export class DeathsPage implements OnInit {
    
    deaths: Observable<any>;
  
  constructor(private router: Router, private api: ApiService) { }
>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b
  
  ngOnInit() {
      this.deaths = this.api.getDeaths();
      this.deaths.subscribe(data => {console.log('my data: ',data);
<<<<<<< HEAD
    
    });
  }
  openDetail(deaths){
      let death_count = name;
      this.router.navigateByUrl('/tabs/deaths/${death}');
=======
  });
}

  openDetail(deaths){
      let death_count = name;
      this.router.navigateByUrl('/tabs/deaths/${death}');
   
>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b
  }
}