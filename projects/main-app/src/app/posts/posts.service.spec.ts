import { mockedPosts } from '@api/mocks/posts';
import { of } from 'rxjs';

import { PostsService } from './posts.service';

describe('PostsService', () => {
  let http;
  let service: PostsService;

  beforeEach(() => {
    http = {get: () => {}};
    service = new PostsService(http);
  });

  describe('getList', () => {
    it('should make request to api', () => {
      spyOn(http, 'get').and.returnValue(of(mockedPosts));

      service.getList().subscribe(posts => {
        expect(http.get).toHaveBeenCalledWith(jasmine.stringMatching('/posts'));
        expect(posts).toContain(mockedPosts[0]);
      });
    });
  });

});
