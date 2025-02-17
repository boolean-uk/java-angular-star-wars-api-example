import { Component, inject } from '@angular/core';
import { StarwarsService } from '../../starwars.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  starwarsService = inject(StarwarsService)

  people: any;

  async ngOnInit() {
    this.people = await this.starwarsService.people
  }
}
