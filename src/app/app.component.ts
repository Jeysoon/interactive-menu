import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  status = false;
  title = 'interactive-menu';

  toggleSidebar(status: boolean) {
    this.status = status;
  }
}
