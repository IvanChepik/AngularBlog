import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsData } from '../interfaces/posts-data';
import { PostService } from './posts.service';

const SERVICES = [
  { provide: PostsData, useClass: PostService },
];

@NgModule({
  imports: [CommonModule],
})
export class CommonMockModule {
  static forRoot(): ModuleWithProviders<CommonMockModule> {
    return {
      ngModule: CommonMockModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
