import { Component, OnInit } from '@angular/core';
import { ClusterService } from 'src/app/services/cluster.service';

@Component({
  selector: 'app-scrum-achievements',
  templateUrl: './scrum-achievements.component.html',
  styleUrls: ['./scrum-achievements.component.css']
})
export class ScrumAchievementsComponent implements OnInit {

  clusterData = [];

  constructor(
    private clusterService: ClusterService
  ) { }

  ngOnInit() {
    this.clusterService.getAll().subscribe(
      res => {
        this.clusterData = res.data;
      }, err => console.log(err)
    );
  }

  sync() {

  }

}
