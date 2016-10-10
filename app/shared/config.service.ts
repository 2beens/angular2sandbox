import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConfigService {

    private configUrl = 'app/config';
    private _env: any;
    private _config: any;

    constructor(private http: Http) { }

    load(): void {
        this.loadSync();
        //this.loadAsync();
    }

    private loadSync(): void {
        console.log('Config Service: Loading configuration synchronously.');
        this._env = {};
        this._config = {};
        this._env.env = 'dev';
        this._config.todosServerBaseUrl = 'http://localhost:3100';
        this._config.todosServerPath = '/todos';
    }

    private loadAsync(): void {
        console.log('Config Service: Loading configuration asynchronously.');
        this.readEnvironmentConfig()
            .then(
                env => {
                this._env = env;
                console.log('Environment configuration read: ' + JSON.stringify(this._env));
            })
            .then(() => {
                this.readConfig(this._env.env)
                    .then(configData => {
                        this._config = configData;
                        console.log('Main configuration read: ' + this._env.env);
                        console.log(JSON.stringify(this._config));
                    });
            });
    }

    private readEnvironmentConfig(): Promise<any> {
        return this.http.get(this.configUrl + '/env.json')
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    private readConfig(configType: string): Promise<any> {
        return this.http.get(this.configUrl + '/' + configType + '.json')
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Todo Service: an error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getEnv(key: string): string {
        return this._env[key];
    }
    
    get(key: string): string {
        return this._config[key];
    }
}