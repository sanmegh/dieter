import { Injectable } from '@angular/core';
import uuid from 'uuid';

@Injectable()
export class IdGeneratorService {

    generateUniqueId(): string {
        return uuid.v4();
    }

}
