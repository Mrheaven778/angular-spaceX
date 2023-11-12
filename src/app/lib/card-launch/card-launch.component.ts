import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-launch',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-launch.component.html',
  styleUrl: './card-launch.component.css',
})
export class CardLaunchComponent {
  @Input() id!: string;
  @Input() name!: string;
  @Input() img!: string;
  @Input() success!: boolean;
  @Input() flightNumber!: number;
  @Input() details!: string;
}
