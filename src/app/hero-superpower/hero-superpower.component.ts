import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-superpower',
  templateUrl: './hero-superpower.component.html',
  styleUrls: ['./hero-superpower.component.scss']
})
export class HeroSuperpowerComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  newSuperpower(): void {
    if(this.hero?.superpowers != undefined){
      this.hero?.superpowers?.push("");
      return;
    }
    this.hero!.superpowers = [""];
  }

  rmSuperpower(superpower: string): void {
    this.hero?.superpowers?.forEach((element,index)=>{
      if(element==superpower) this.hero?.superpowers?.splice(index,1);
   });
  }

  identify(index: number, item: String){
    return index;
  }
}
