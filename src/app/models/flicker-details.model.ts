export class FlickerDetail {
    imageUrl: string;
    author: string[];
    tags: string;
    thumbnailUrl: string;
 
    constructor(obj?: any) {
        this.imageUrl = obj && obj.imageUrl || null;
        this.author = obj && obj.author || null;
        this.tags = obj && obj.tags || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
    }
}