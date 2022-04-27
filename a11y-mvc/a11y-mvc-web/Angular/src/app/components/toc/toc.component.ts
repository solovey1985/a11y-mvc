import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TocModel } from '../../models/toc-model';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.less'],
})
export class TocComponent implements OnInit {
  @Input()
  model: TocModel;

  constructor(private router: Router) {}

  ngOnInit() {}

  onClick() {
    this.router.navigateByUrl(this.model.Link, { skipLocationChange: true });
  }
}
