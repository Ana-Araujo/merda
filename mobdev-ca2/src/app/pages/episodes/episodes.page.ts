import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { ApiService } from '../../services/api.service';
=======
import { ApiService } from '../../sevices/api.service';
>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b
@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})

export class EpisodesPage implements OnInit {

  episodes: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }
  
  ngOnInit() {
      this.episodes = this.api.getEpisodes();
      this.episodes.subscribe(data => {console.log('my data: ',data);
    });
  }

  openDetail(episode){
      let episodeId = episode.episode_id;
      this.router.navigateByUrl('/tabs/episodes/${episodeId}');
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b
