import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router,
                private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(1)
      .subscribe( resp => {
        if (resp.id) {
          this.router.navigate(['/heroes']);
        }
      })


  }

}
