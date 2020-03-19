import { IContent, LibraryCardTypes, ICardClick } from './../models';
import { Component, Input, OnInit, EventEmitter, Output, TemplateRef, AfterViewInit } from '@angular/core';
import { staticContent } from './library-card.data';

@Component({
    selector: 'sb-library-card',
    templateUrl: './library-card.component.html',
    styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent implements OnInit, AfterViewInit {

    @Input() content: IContent = staticContent;
    @Input() isMobile = false;
    @Input() isOffline = false;
    // @Input() defaultImg = '';
    // @Input() offlineImg = '';
    @Input() cardImg = '';
    @Input() type: LibraryCardTypes = LibraryCardTypes.DESKTOP_TEXTBOOK;
    @Input() moreInfoLabel = 'Medium';
    @Input() section = '';
    @Input() isLoading:boolean;
    // @Input() hoverData;
    @Input('hover-template') gridTemplate: TemplateRef<any>;

    @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();

    get LibraryCardTypes() { return LibraryCardTypes; }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }

    onClick(event: MouseEvent) {
        this.cardClick.emit({ event: event, data: this.content });
    }

    test() {

    }
}
