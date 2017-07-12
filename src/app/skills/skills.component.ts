import { Component, OnInit } from '@angular/core';
import { Game } from '@dolan-bio/water-skills';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
    private game: Game;

    constructor() {
        this.game = new Game();
    }

    public ngOnInit(): void {
        this.game.run('skills-container', () => {
            // game.setItemsArray([]);
        });
    }

}
