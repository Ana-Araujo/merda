import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { ApiService } from '../../services/api.service';
=======
import { ApiService } from '../../sevices/api.service';
>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b

@Component({
    selector: 'app-episode-details',
    templateUrl: './episode-details.page.html',
    styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

    episode: Observable<any>;
    episodeId = null;

    constructor(private activatedRoute: ActivatedRoute,
        private api: ApiService) { }

    ngOnInit() {
        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
            console.log(JSON.stringify(this.episodeId.episode_id));
        });
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b
