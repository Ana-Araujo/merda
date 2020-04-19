<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {
    
    deaths: Observable<any>;
  
  constructor(private router: Router, private api: ApiService) { }
  
  ngOnInit() {
      this.deaths = this.api.getDeaths();
      this.deaths.subscribe(data => {console.log('my data: ',data);
  });
}

  openDetail(deaths){
      let death_count = name;
      this.router.navigateByUrl('/tabs/deaths/${death}');
   
  }
}
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeathsPageRoutingModule } from './deaths-routing.module';

import { DeathsPage } from './deaths.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeathsPageRoutingModule
  ],
  declarations: [DeathsPage]
})
export class DeathsPageModule {}
>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b
