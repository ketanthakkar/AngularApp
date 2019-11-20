import { Component, OnInit } from '@angular/core';

import { PlanetService } from '../../services/planet.service';
import { Planet } from '../../entities/planet';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css'],
})
export class PlanetListComponent implements OnInit {

  public planets: Planet[];
  public totalPlanets = 0;
  public showPagination = true;
  
  public requestUrl = "";
  private previousPage = "";
  private url = "https://swapi.co/api/planets/?";

  constructor(
    private planetService: PlanetService,
    private sharedService: SharedService,
    private router: Router,
  ) {}

  ngOnInit() {
    //this.getPlanets(this.requestUrl);

    this.sharedService.planetName.subscribe(name => {
      if(name.length > 0) {
        this.showPagination = false;
        this.searchPlanet(name);
      }
      else {
        this.requestUrl = `${this.url}page=1`
        this.showPagination = true;
        this.getPlanets(this.requestUrl);
      }
    })  
  }

  private getPlanets(url: string): void {
    this.planetService.getPlanets(url).subscribe(planet => {
      console.log(planet);
      this.planets = planet.results;
      this.totalPlanets = planet.count;
      this.requestUrl = planet.next;
      this.previousPage = planet.previous;
    });
  }

  getDetail(planet:Planet) {
    var palnetId = planet.url.split(this.url).pop().split('/')[0];

    this.router.navigate([`/planet/${palnetId}`]);
  }

  getPlanetData(event?:PageEvent) {
    console.log(event);
    this.planetService.getPlanets(this.requestUrl).subscribe(planet => {
        
    });
  }

  private searchPlanet(name: string) {
    let searchUrl = `${this.url}search=${name}`
    this.getPlanets(searchUrl);
  }
}
