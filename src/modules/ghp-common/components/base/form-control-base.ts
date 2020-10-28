/* eslint-disable 
  @typescript-eslint/no-explicit-any,
  @typescript-eslint/explicit-module-boundary-types
*/

//#region imports
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, } from "@angular/forms";
//#endregion

//#region local types
type formControl = {
  [key: string]: any,
}
//#endregion

@Component({ template: '' })
export abstract class FormControlBase implements OnInit {
  //#region Template Properties
  @Output() valueChanged = new EventEmitter();

  @Input() public disabled: boolean = false;
  @Input() public required: boolean = false;
  @Input() Label: string = "";
  @Input("controlName") set cn(cn: string) {
    this.controlName = cn;
  }

  @Input("parentForm") set parentForm(fg: FormGroup) {
    this.formGroup = fg;
  }
  //#endregion

  //#region public members
  public formGroup: FormGroup;
  public controlName: string = "ghp-form-control";
  public flatLabel: boolean = false;
  //#endregion

  //#region Properties
  protected get _controlInfo(): any {
    return this.formGroup['controls'][this.controlName];
  }

  get pristine(): boolean {
    return this._controlInfo.pristine;
  }

  get touched(): boolean {
    return this._controlInfo.touched;
  }

  get status(): string {
    return this._controlInfo.status;
  }

  get isValid(): boolean {
    return this._controlInfo.status === "VALID";
  }

  get value(): any {
    return this._controlInfo.value;
  }

  set value(v: any) {
    this.formGroup.patchValue(v);
  }
  //#endregion 

  //#region CTOR & Lifecycle Hooks
  constructor(private formBuilder: FormBuilder) {
    const ctrl: formControl = {};
    ctrl[this.controlName] = [];
    this.formGroup = this.formBuilder.group({ ...ctrl });

    this.formGroup.valueChanges.subscribe(v => {
      this.valueChanged.emit(v[this.controlName]);
    })
  }

  ngOnInit(): void {
    this.setValue = this.setValue.bind(this);
    this.setDisabled = this.setDisabled.bind(this);
  }
  //#endregion

  //#region restricted Functions
  protected clearValue() {
    const patch: formControl = {};
    patch[this.controlName] = {};
    this.formGroup.patchValue(patch);
  }
  //#endregion

  //#region public Functions
  public setValue(v: any) {
    const patch: formControl = {};
    patch[this.controlName] = v;
    this.value = patch;
  }

  public setDisabled(d: boolean): void {
    this.disabled = d;
  }
  //#endregion
}
