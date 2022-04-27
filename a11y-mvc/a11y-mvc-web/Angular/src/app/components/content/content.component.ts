import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TocModel } from '../../models/toc-model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less'],
})
export class ContentComponent implements OnInit {
  constructor() {}
  tocs: TocModel[];

  ngOnInit() {
    this.tocs = new Array<TocModel>();
    this.initTocs();
  }

  initTocs() {
    for (let i = 1; i < 4; i++) {
      const model = new TocModel();
      model.DisplayLabel = 'Page ' + i;
      model.Link = '/content/page/' + i;
      this.tocs.push(model);
    }
  }
}
