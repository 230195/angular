import {Directive, forwardRef} from '@angular/core'
import  {Validator,  NG_VALIDATORS, FormGroup} from '@angular/forms'

@Directive({
    selector: '[validateLocation]',
    providers: [{ 
        provide: NG_VALIDATORS, 
        useExisting: LocationValidateDirective,
        multi: true}]
})
export class LocationValidateDirective implements Validator{
    validate(formGroup: FormGroup): { [key: string] : any }{
        
        let addressControl = formGroup.controls['address']
        let cityControls = formGroup.controls['city']
        let countryControls = formGroup.controls['country']
        let onlineurlControls = (<FormGroup>formGroup.root).controls['onlineurl']
        if((
                (addressControl && addressControl.value) && 
                (cityControls && cityControls.value ) && 
                (countryControls && countryControls.value) 
            ) 
            || 
            (onlineurlControls && onlineurlControls.value) ){
                return null
            }
            else{
                return {
                validateLocation: false
                }
            }

    }
}