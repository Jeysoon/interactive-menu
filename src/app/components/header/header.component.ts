import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, ElementRef {
  constructor(nativeElement: ElementRef) {}
  nativeElement: any;
  closedClass = '';
  menuOpen = false;
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  ngOnChanges() {}

  menuButtonHandler = () => {
    this.menuOpen = !this.menuOpen;
    this.toggle.emit(this.menuOpen);
  };
}
