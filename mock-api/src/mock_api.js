import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const delayMs = 2000;


function delayedResponse(delay, response) {
  return new Promise(resolve => setTimeout(() => resolve(response), delay));
}


mock.onPost('/posts').reply(() => delayedResponse(delayMs, [200, {
  id: 1,
  title: 'Hello World',
  content: 'This is a mock post!',
}]));

mock.onGet('/posts').reply(() => delayedResponse(delayMs, [200, [
  {
    id: 1,
    title: 'Hello World',
    content: 'This is a mock post!',
  },
  {
    id: 2,
    title: 'Hello World 2',
    content: 'This is another mock post!',
  },
]]));