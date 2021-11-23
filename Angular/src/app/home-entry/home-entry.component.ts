import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { HomeDetailService, detail } from '../home-detail/home-detail.service';

@Component({
  selector: 'app-home-entry',
  templateUrl: './home-entry.component.html',
  styleUrls: ['./home-entry.component.css'],
})
export class HomeEntryComponent implements OnInit {
  detail: any;


  inputForm = new FormGroup({
    id: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  constructor(
    private router: Router,
    private homeDetailService: HomeDetailService,
    private commonService:CommonService
  ) {}
  ngOnInit() {}

  onSubmit() {
    // this.router.navigate(['/detail', this.inputForm.value.id]);
    this.homeDetailService.getDeatil(this.inputForm.value.id).subscribe({
      next: (respose: detail) => {
        if (!respose.title || !respose.body) {
          // this.router.navigate(['/404']);
          this.inputForm.setErrors({ isError: true });
        } else {
          this.detail = respose;
          this.router.navigate(['/detail'])
          this.commonService.sendData({title:respose.title,body:respose.body})
        }
      },
      error: (e) => {
        
        this.router.navigate(['/404']);
      },
      complete: () => console.info('complete'),
    });
  }
}
