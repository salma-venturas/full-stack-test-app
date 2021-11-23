import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeDetailService, detail } from './home-detail.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  providers: [HomeDetailService],
})
export class HomeDetailComponent implements OnInit {
  detail: any;
  isError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private homeDetailService: HomeDetailService,
    private commonService:CommonService
  ) {}

  ngOnInit(): void {
    this.commonService.getData().subscribe({
      next:(value)=>{this.detail=value}
    })
  }

  onClick() {
    this.router.navigate(['/']);
  }
}
