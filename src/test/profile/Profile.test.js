import Profile from '../../modules/profile/Profile.js';
import renderer from 'react-test-renderer';


test('Test Profile page ui', () => {
  const tree = renderer
    .create(<Profile />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
