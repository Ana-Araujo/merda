import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { ApiService } from '../../services/api.service';
=======
import { ApiService } from '../../sevices/api.service';
>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: Observable<any>;
    characterId = null;

    constructor(private activatedRoute: ActivatedRoute,
        private api: ApiService) { }

    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
            console.log(JSON.stringify(this.characterId.character_id));
        });
    }
}
