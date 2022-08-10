import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
              AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log("Pagina1: constructor");
  }

  ngOnInit(): void {
    console.log("Pagina1: ngOnInit");

  }

  ngDoCheck(): void {
    console.log("Pagina1: ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("Pagina1: ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("Pagina1: ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("Pagina1: ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("Pagina1: ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("Pagina1: ngOnDestroy");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Pagina1: ngOnChanges");
  }
}
