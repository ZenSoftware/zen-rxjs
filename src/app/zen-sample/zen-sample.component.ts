import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable, Subject, tap, zip } from 'rxjs';

type Durum = ['flat bread', 'meat', 'sauce', 'tomato', 'cabbage'];

@Component({
  selector: 'zen-sample',
  templateUrl: './zen-sample.component.html',
})
export class ZenSampleComponent implements OnInit {
  durum$!: Observable<Durum>;

  flatBread = new Subject<'flat bread'>();
  meat = new Subject<'meat'>();
  sauce = new Subject<'sauce'>();
  tomato = new Subject<'tomato'>();
  cabbage = new Subject<'cabbage'>();

  flatBreadCount = 0;
  meatCount = 0;
  sauceCount = 0;
  tomatoCount = 0;
  cabbageCount = 0;

  ngOnInit() {
    this.durum$ = zip(
      this.flatBread.pipe(map(i => `${i}${++this.flatBreadCount}`), tap(console.log)),
      this.meat.pipe(map(i => `${i}${++this.meatCount}`), tap(console.log)),
      this.sauce.pipe(map(i => `${i}${++this.sauceCount}`), tap(console.log)),
      this.tomato.pipe(map(i => `${i}${++this.tomatoCount}`), tap(console.log)),
      this.cabbage.pipe(map(i => `${i}${++this.cabbageCount}`), tap(console.log))
    ).pipe(tap(durum => console.log('Enjoy!', durum)));

    // this.durum$ = combineLatest([
    //   this.flatBread.pipe(map(i => `${i}${++this.flatBreadCount}`), tap(console.log)),
    //   this.meat.pipe(map(i => `${i}${++this.meatCount}`), tap(console.log)),
    //   this.sauce.pipe(map(i => `${i}${++this.sauceCount}`), tap(console.log)),
    //   this.tomato.pipe(map(i => `${i}${++this.tomatoCount}`), tap(console.log)),
    //   this.cabbage.pipe(map(i => `${i}${++this.cabbageCount}`), tap(console.log))
    // ]).pipe(tap(durum => console.log('Enjoy!', durum)));
  }

  emitNoodles() {}
}
