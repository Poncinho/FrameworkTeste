import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrameworkTest';
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router 
  ){

  }

  public postagens(): void{
    this.router.navigate(['postagens'], { relativeTo: this.activatedRoute });
  }

  public albuns(): void{
    this.router.navigate(['albuns'], { relativeTo: this.activatedRoute });
  }

  public todos(): void{
    this.router.navigate(['todos'], { relativeTo: this.activatedRoute });
  }
}
