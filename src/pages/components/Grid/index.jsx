import './index.scss';
import { Container, Col, Row } from 'react-bootstrap';
import CardProduct from './CardProduct';
import productList from '../Grid/assets/API';
import api from '../../../services/api'
import React, { useState, useEffect, useCallback } from 'react'

export default function CardGrid() {

  const [ products, setProducts ] = useState([]);
  const allProducts = '/products/all'
  
  const gridProducts = useCallback(async () => {
        
        try {
          const response = await api.get(allProducts);
          setProducts(response.data);
          console.log(response.data);

        } catch (e) {
          console.log(e);
        }
  })


  useEffect(() => {
    return gridProducts();
  }, []);
 
  
  return (
    <>
      <Container className='justify-content-center align-items-center pt-5 pb-5 '>
        <Row xs={1} md={2} className='g-4'>
          {products.map( product => {
            return (
              
              <Col md={3} sm={4} xs={6}>
                <CardProduct
                  key={product.id}
                  img={product.image}
                  title={product.title}
                  price={product.price}
                  category={product.category.name}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}