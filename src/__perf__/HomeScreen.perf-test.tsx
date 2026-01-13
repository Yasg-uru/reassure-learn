import React from 'react';
// increase jest timeout because Reassure runs tests multiple times
jest.setTimeout(30000);
import { measureRenders } from 'reassure';
import HomeScreen from '../screens/HomeScreen';

test('HomeScreen render performance', async () => {
  const navigation = { navigate: () => {} } as any;
  const route = { params: {} } as any;

  await measureRenders(<HomeScreen navigation={navigation} route={route} />);
});
