import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-bar',
  templateUrl: './error-bar.component.html',
  styleUrl: './error-bar.component.css',
})
export class ErrorBarComponent {
  @Input()
  public error?: string;
}
