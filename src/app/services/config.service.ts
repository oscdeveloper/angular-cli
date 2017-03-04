import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  title: string = 'Test App'; 

  constructor() { }

  getAppTitle(): string {
    return this.title;
  }

}
