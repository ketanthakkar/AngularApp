import { OnInit, Component } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Planet } from '../../entities/planet';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
    selector: 'app-planet-detail',
    templateUrl: './planet-detail.component.html',
    styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
    
    public planet: Planet;

    constructor(
        private route: ActivatedRoute,
        private planetService: PlanetService,
        private sharedService: SharedService,
    ) {}

    ngOnInit() {
        this.sharedService.showBackButton();
        this.getPlanetDetail();
    }

    private getPlanetDetail(): void {
        console.log(`id ${this.route.snapshot.paramMap.get('id')}`)
        this.planetService.getPlanetDetail(this.route.snapshot.paramMap.get('id')).subscribe(planet => {
            this.planet = planet;
            console.log(this.planet);
        });
    }
}