import Login from '../../modules/login/Login.js';
import renderer from 'react-test-renderer';


test('Test Login page ui', () => {
  const tree = renderer
    .create(<Login />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
