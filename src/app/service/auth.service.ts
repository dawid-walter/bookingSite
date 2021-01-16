import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _isUserAuth = false;

    constructor() {
    }

    get isUserAuth(): boolean {
        return this._isUserAuth;
    }

    login(): void {
        this._isUserAuth = true;
    }

    logout(): void {
        this._isUserAuth = false;
    }
}
