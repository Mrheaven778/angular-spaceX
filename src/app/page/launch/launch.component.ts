import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Doc } from '../../Interface/doc';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-launch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css'],
})
export class LaunchComponent {
  launchId!: string;
  launch!: Doc;

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  async ngOnInit() {
    this.titleService.setTitle(`Lanzamiento - ${this.launchId}`);
    this.launchId = this.route.snapshot.paramMap.get('id') || '';

    if (this.launchId === '') {
      console.error('ID es undefined o vacío');
      return;
    }
    const res = await fetch(
      `https://api.spacexdata.com/v5/launches/${this.launchId}`
    );
    const launch = (await res.json()) as Doc;
    this.launch = launch;
  }
}
