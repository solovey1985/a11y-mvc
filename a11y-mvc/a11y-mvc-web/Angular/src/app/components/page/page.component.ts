import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent {

  param: number;
  constructor(private route: ActivatedRoute, private router: Router, private element: ElementRef) {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.param = params['id'];
      }
    });
  }

  ngAfterViewInit() {
    this.focusOnFirstElement()
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.focusOnFirstElement();
    });
  }

  private focusOnFirstElement() {
    const firstElement = this.element.nativeElement.querySelectorAll("a,input"); //TODO: find a way to identify first focusable element
    console.log(firstElement);
    if (firstElement.length) {
      firstElement[0].focus();
    }
  }
}