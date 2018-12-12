import Mainfeed from '../../modules/mainfeed/Mainfeed.js';
import renderer from 'react-test-renderer';


test('Test Mainfeed page ui', () => {
  const tree = renderer
    .create(<Mainfeed />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
