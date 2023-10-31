import { Pipe, PipeTransform } from '@angular/core';
import { Image } from 'src/app/core/models/image.model';
import { AppConfigService } from 'src/app/core/services/app-config.service';


@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {
    private searchableFields: string[] = [];

    constructor(private appConfigService: AppConfigService) {
        this.searchableFields = this.appConfigService.defaultImageSearchableFields;
    }
    transform(images: Image[], search?: string) {
        if (typeof search === 'undefined' || search.length === 0) {
            return images;
        } else {
            return images.filter(image => this.isTextInSearchableFields(image, search));
        }
    }

    private isTextInSearchableFields(image: Image, search: string) {
        return this.searchableFields.some(searchableField => {
            const searchableFieldText = String(image[searchableField as keyof typeof Image]);
            return searchableFieldText.includes(search);
        });
    }
}