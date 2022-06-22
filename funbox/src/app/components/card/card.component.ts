import { Component } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {map, Observable, startWith} from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  checked: boolean = false;
  disabled: boolean = false;
  selected: boolean = true;
  used: boolean = false;
  unmute: boolean = false;
  off: boolean = true;

  constructor(private _formBuilder: FormBuilder) {
  }

  control = new FormControl('');
  control2 = new FormControl('');
  control3 = new FormControl('');
  num: string[] = ['10 порций', '40 порций', '100 порций'];
  filteredFood: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredFood = this.control.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '')),
    );
    this.filteredFood = this.control2.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '')),
    );
    this.filteredFood = this.control3.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '')),
    );
  }

  public _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.num.filter(n => this._normalizeValue(n).includes(filterValue));
  }

  public _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  onCheckedItem(): void {
    this.checked = !this.checked
  }
  onCheckedItemTwo() :void {
    this.selected = !this.selected
  }
  onCheckedItemThree(): void {
    this.used = !this.used
  }

  onCheckedDisabled(): void {
    this.disabled = !this.disabled
  }
  onCheckedDisabledItems(): void {
    this.unmute = !this.unmute
  }

  onUnCheckedDisabled() {
    this.off = !this.off
  }
}
