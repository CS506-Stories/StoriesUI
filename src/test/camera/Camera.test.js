import Camera from '../../modules/camera/Camera.js';
import renderer from 'react-test-renderer';


test('Test Camera page ui', () => {
  const tree = renderer
    .create(<Camera />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
