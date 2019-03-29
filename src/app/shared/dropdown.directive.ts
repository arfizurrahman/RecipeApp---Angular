import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive ({
    selector: "[appDropdown]"
})

export class DropdownDirective {

    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen(eventData: Event){
        this.isOpen = !this.isOpen;
    }
   
    // @HostBinding('class') classOpen: string;

    // @HostListener('click') toggleOpen(eventData: Event){
    //     this.classOpen = this.classOpen !== '' ? '' : 'open';
    // }

    // ngOnInit() {
    //     this.classOpen = '';
    // }
}