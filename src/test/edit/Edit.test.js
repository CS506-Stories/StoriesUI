import Edit from '../../modules/edit/Edit.js';
import renderer from 'react-test-renderer';


test('Test Edit page ui', () => {
  const tree = renderer
    .create(<Edit />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
