import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    private adminId = '5a6511308518e320347ad539';
    public isAdminLoggedIn() {
        return localStorage.getItem('userId') === this.adminId;
    }

    public isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    public onLogout() {
        localStorage.clear();
    }
}
