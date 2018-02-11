import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';

@Injectable()
export class CvService {
    private cv$: Observable<any>;

    constructor(http: Http) {
        this.cv$ = http
            .get(`${environment.server.uri}/cv`, { responseType: ResponseContentType.Blob })
            .map((res) => res.blob())
            .do((blob) => {
                saveAs(blob, 'Dolan Miu CV.docx');
            });
    }

    public get Cv$(): Observable<any> {
        return this.cv$;
    }
}
