import Checkbox from '..';

describe('Checkbox', () => {
  xit('should render correctly', () => {
    const wrapper = shallow(
      <Checkbox label="M" handleCheckboxChange={() => {}} />
    );

    // expect(wrapper).toMatchSnapshot();
  });

  xit('should have innerText equals label propertie', () => {
    const label = 'M';
    const wrapper = mount(
      <Checkbox label={label} handleCheckboxChange={() => {}} />
    );

    const text = wrapper.find('span').text();

    // expect(text).toEqual(label);
  });
});
