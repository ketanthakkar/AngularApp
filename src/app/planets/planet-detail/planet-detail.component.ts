import { OnInit, Component } from '@angular/core';
import { PlanetService } from '../planet.service';
import { Planet } from '../planet';

@Component({
    selector: 'app-planet-detail',
    templateUrl: './planet-detail.component.html',
    styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
    

    constructor(
        private planetService: PlanetService
    ) {}

    ngOnInit() {
    }

    private getPlanetDetail(): void {


        // this.planetService.getPlanetDetail().subscribe(planet => {
        //     this.planet = planet;

        //     console.log(this.planets);
        // });
    }
}