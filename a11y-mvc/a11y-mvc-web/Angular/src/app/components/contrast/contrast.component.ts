import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contrast',
  templateUrl: './contrast.component.html',
  styleUrls: ['./contrast.component.less'],
})
export class ContrastComponent implements OnInit {
  param: number;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log(params);
      if (params['id']) {
        this.param = params['id'];
      }
    });
  }

  ngOnInit(): void {}
}
