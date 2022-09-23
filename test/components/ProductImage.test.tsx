import * as React from 'react';
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('Pruebas en el <ProductImage/>', () => {

  test('debe mostrar el componente correctamente con el img personalizado', () => { 
    const wrapper = renderer.create(
      <ProductImage img='https://prueba.jpg' />
    )

    expect( wrapper.toJSON() ).toMatchSnapshot();
    
  })

  test('debe mostrar el componente con el "img" del producto', () => {
    const wrapper = renderer.create(
      <ProductCard
        product={product2}
      >
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot();
  })

})