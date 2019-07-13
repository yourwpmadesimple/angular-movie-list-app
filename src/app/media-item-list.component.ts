import { MediaItemService } from './media-item.service';
import { Component } from "@angular/core";


@Component({
    selector: 'mw-media-item-list',
    templateUrl: 'media-item-list.component.html',
    styleUrls: ['media-item-list.component.css']
})
export class MediaItemListComponent {
    medium = '';
    mediaItems = [];

    constructor(private mediaItemService: MediaItemService){}

    ngOnInit(){
        this.getMediaItems(this.medium);
    }

    onMediaItemDelete(mediaItem) { 
      this.mediaItemService.delete(mediaItem);
    }

    getMediaItems(medium){
      this.medium = medium;
      this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
    }
      
  }