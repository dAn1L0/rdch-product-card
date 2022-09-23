import * as React from 'react';
import renderer from 'react-test-renderer'
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

const { act } = renderer

describe('Pruebas en el <ProductCard/>', () => {

  test('debe mostrar el componente correctamente', () => { 
    const wrapper = renderer.create(
      <ProductCard
        product={product1}
      >
        {
          () => (
            <h1>{ product1.title }</h1>
          )
        }
      </ProductCard>
    )

    expect( wrapper.toJSON() ).toMatchSnapshot();
    
  })

  test('debe incrementar el contador del producto', () => {
    const wrapper = renderer.create(
      <ProductCard
        product={product1}
      >
        {
          ({count, increaseBy}) => (
            <>
              <h1>{ product1.title }</h1>
              <span>{count}</span>
              <button onClick={() => increaseBy(1)} > +1</button>
            </>
          )
        }
      </ProductCard>
    )

    let tree = wrapper.toJSON()
    expect( tree ).toMatchSnapshot();

    act( () => {
      (tree as any).children[2].props.onClick();
    })

    tree = wrapper.toJSON();

    expect( (tree as any).children[1].children[0] ).toEqual("1")
    
  })


})