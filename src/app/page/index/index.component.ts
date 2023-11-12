import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLaunchComponent } from '../../lib/card-launch/card-launch.component';
import { getLatestLaunches } from '../../services/space';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, CardLaunchComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  launches!: any;
  async ngOnInit() {
    this.launches = await getLatestLaunches();
  }
}
