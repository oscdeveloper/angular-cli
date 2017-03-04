import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    title: string = '';

    constructor(
        private configService: ConfigService,
        private titleService: Title
    ) {}

    ngOnInit() {
        this.title = this.configService.getAppTitle();
        this.titleService.setTitle( this.title );
    }
    

}
