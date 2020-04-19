import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { ApiService } from '../../services/api.service';
=======
import { ApiService } from '../../sevices/api.service';
>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b
@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})

export class CharactersPage implements OnInit {

    characters: Observable<any>;

    constructor(private router: Router, private api: ApiService) { }
  
  ngOnInit() {
      this.characters = this.api.getCharacters();
      this.characters.subscribe(data => {console.log('my data: ',data);
    
    });
  }
  openDetail(characters){
      let char_id = characters.name;
      this.router.navigateByUrl('/tabs/characters/${charactersId}');
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b
