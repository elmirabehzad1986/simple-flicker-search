import { FlickerDetail } from './flicker-details.model';

export class FlickerSearchResult {

  constructor(
    public searchItems: FlickerDetail[],
    public tags: string[]
  ){}
}
