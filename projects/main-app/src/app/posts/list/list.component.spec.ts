import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mockedPosts } from '@api/mocks/posts';
import { MockService } from '@testing/mock-helpers';
import { TestingModule } from '@testing/testing.module';
import { of } from 'rxjs';
import { PostsService } from '../posts.service';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let fixture: ComponentFixture<ListComponent>;
  let service: PostsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TestingModule ],
      providers: [ MockService(PostsService) ],
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(PostsService);
    spyOn(service, 'getList').and.returnValue(of(mockedPosts));
    fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
  });

  it('should render posts', () => {
    expect(fixture.nativeElement.textContent).toContain(mockedPosts[0].title);
  });
});
