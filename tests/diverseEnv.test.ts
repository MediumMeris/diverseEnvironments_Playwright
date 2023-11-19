import { test } from '@playwright/test';
import ENV from '../utils/env';

test('Diverse environments', async ({}) => {

  console.log(`This is base URL: ${ENV.BASE_URL}`);
  console.log(`This is username: ${ENV.USERNAME}`);
  console.log(`This is password: ${ENV.PASSWORD}`);

});

