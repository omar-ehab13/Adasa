import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-label',
  imports: [],
  templateUrl: './section-label.component.html',
  styleUrl: './section-label.component.css',
})
export class SectionLabelComponent {
  @Input() labelTitle !: string;
}
