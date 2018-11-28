import {FormControl} from '@angular/forms'

export function restrictedWords(words) {
    return (control: FormControl): { [key: string]: any } => {
        debugger
        if(!words)
        return null
        // check for the restricted words one by one using map function
        var invalidWords = words
        .map(w=>control.value.includes(w) ? w : null)
        .filter(w => w != null)
        //
        return invalidWords && invalidWords.length > 0
            ? { 'restrictedWords': invalidWords.join(', ') }
            : null
    }
}