import styled from 'styled-components'
import {popularProducts} from './../data'
import Product from './Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #fff;

`

const Products = () => {
  return (
    <Container>
        {
            popularProducts.map(product => (
                <Product item={product} key={product.id}/>
            ))
        }
    </Container>
  )
}

export default Products     