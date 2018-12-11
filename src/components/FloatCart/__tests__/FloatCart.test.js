import FloatCart from '..';

import store from '../../../services/store';

describe('FloatCart', () => {
  xit('should render correctly', () => {
    const wrapper = render(
      <Provider store={store()}>
        <FloatCart />
      </Provider>
    );

    // expect(wrapper).toMatchSnapshot();
  });

  xit('should render bag__quantity with 0 products in it', () => {
    const wrapper = render(
      <Provider store={store()}>
        <FloatCart />
      </Provider>
    );

    const productQuantity = parseInt(wrapper.find('.bag__quantity').text());

    // expect(productQuantity).toEqual(0);
  });
});
