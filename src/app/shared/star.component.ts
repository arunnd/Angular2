import { Component, OnChanges, Input, Output , EventEmitter, OnInit} from "@angular/core";
import { Subject } from "rxjs/Subject";
import { ProductService } from "../products/product.service";
import { Observable } from "rxjs/Observable";
import { debounceTime, switchMap, flatMap } from "rxjs/operators";
import { IProduct } from '../products/product';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
    
})
export class StarComponent implements OnInit{
    @Input() prod: IProduct;
    rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string>= new EventEmitter<string>();
    clickStream = new Subject<IProduct>();   

   constructor(private _productService: ProductService) {    }
    
    onClick(){
        this.rating = this.prod.starRating = this.prod.starRating>=5?1:this.prod.starRating+1;
        this.starWidth = this.rating * 86/5;
        this.clickStream.next(this.prod);
        this.ratingClicked.emit(`the rating ${this.rating} clicked`);
    }
    ngOnInit(): void {
        this.rating = this.prod.starRating;
        this.starWidth = this.rating * 86/5;
        this.clickStream.pipe(
          debounceTime(300),
          //flatMap((rate: number) => this._productService.saveRating(rate)),
          switchMap((prod: IProduct) => this._productService.saveRating(prod))
        ).subscribe();
    }

}