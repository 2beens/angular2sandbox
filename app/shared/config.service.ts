import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConfigService {

    private configUrl = 'app/config';
    private _env: any;
    private _config: any;

    constructor(private http: Http) {

    }

    load() {
        this.readEnvironmentConfig()
            .then(
                env => {
                this._env = env;
                console.log('Environment configuration read: ' + this._env);
            });
    }

    private readEnvironmentConfig(): Promise<any> {
        return this.http.get(this.configUrl + '/env.json')
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Todo Service: an error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getEnv(key: any) {
        return this._env[key];
    }
    
    get(key: any) {
        return this._config[key];
    }
}