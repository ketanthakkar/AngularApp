import { Component, OnInit } from '@angular/core';

import { PlanetService } from '../planet.service';
import { Planet } from '../planet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  planets: Planet[];
  totalPlanets = 0;
  nextPage = "";
  previousPage = "";

  private url = "https://swapi.co/api/planets/";

  constructor(
    private planetService: PlanetService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getPlanets();
  }

  private getPlanets(): void {
    console.log("called");
    this.planetService.getPlanets().subscribe(planet => {
      console.log(planet);
      this.planets = planet.results;
      this.totalPlanets = planet.count;
      this.nextPage = planet.next;
      this.previousPage = planet.previous;

      console.log(this.planets);
    });
  }

  getDetail(planet:Planet) {
    console.log(planet.url.split(this.url).pop().split('/')[0]);
    var palnetId = planet.url.split(this.url).pop().split('/')[0];

    this.router.navigate([`/planet/${palnetId}`]);
  }
}
