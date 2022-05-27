import { Component, OnInit } from '@angular/core';
import { combineLatest, map, mergeMap, Observable, Subject, switchMap, take, tap, zip } from 'rxjs';

type Ramen = ['broth', 'noodles', 'egg'];

interface Order {
  amount: number;
  customerId: number;
}

interface Product {
  product: Ramen;
  customerId: number;
}

let broth = 0;
let noodles = 0;
let egg = 0;

let customerId = 0;

@Component({
  selector: 'zen-sample',
  templateUrl: './zen-sample.component.html',
})
export class ZenSampleComponent implements OnInit {
  ramen$!: Observable<Ramen>;
  delivery$!: Observable<Product>;

  order = new Subject<Order>();
  broth = new Subject<'broth'>();
  noodles = new Subject<'noodles'>();
  egg = new Subject<'egg'>();

  ngOnInit() {
    // zip vs combineLatest
    this.ramen$ = zip(
      this.broth.pipe(
        map(i => `${i}${++broth}`),
        tap(console.log)
      ),
      this.noodles.pipe(
        map(i => `${i}${++noodles}`),
        tap(console.log)
      ),
      this.egg.pipe(
        map(i => `${i}${++egg}`),
        tap(console.log)
      )
    ).pipe(tap(durum => console.log('Enjoy!', durum)));

    // mergeMap vs switchMap
    this.delivery$ = this.order.pipe(
      tap(order => console.log('New order:', order)),
      switchMap(({ amount, customerId }) =>
        this.ramen$.pipe(
          take(amount),
          map(durum => ({ product: durum, customerId: customerId }))
        )
      ),
      tap(product => console.log('Delivered product:', product))
    );
  }

  dispatchOrder() {
    const amount = Math.floor(Math.random() * 3) + 1;
    ++customerId;
    this.order.next({ amount, customerId });
  }
}
