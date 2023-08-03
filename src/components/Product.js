import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './store/cartSlice';
// import {getProducts} from './store/productSlice';
import { fetchData } from './store/data';

const Product = () => {

    const dispatch = useDispatch();

    // const {data: products, status} = useSelector(state => state.products);
    const { data } = useSelector(state=> state.data);

    useEffect(() => {

        // dispatch(getProducts());
        dispatch(fetchData());

    }, [])

    // if(status === 'loading'){
    //     return <p> Loading... </p>
    // } 
    
    // if(status === 'error'){
    //     return <p> Something went wrong! Try again later </p>
    // }

    const addToCart = (product) => {
        // dispatch 
        dispatch(add(product))
    }


    // const card = products.map(product => (
    //     <div className="col-md-3" style={{ marginBottom: '20px' }}>
    //         <Card key={product.id} className="h-100">
    //             <div className="text-center">
    //                 <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
    //             </div>
    //             <Card.Body>
    //                 <Card.Title>{product.title}</Card.Title>
    //                 <Card.Text>
    //                     R {product.price}
    //                 </Card.Text>
    //             </Card.Body>
    //             <Card.Footer>
    //                 <Button variant="primary" onClick={() => addToCart(product)}>Add To Card</Button>
    //             </Card.Footer>
    //         </Card>
    //     </div>
    // ))
    console.log("Data", data)
    const items = data.map(product => (
        <div className="col-md-3" style={{ marginBottom: '20px' }}>
            <Card key={product.id} className="h-100">
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Title>{product.productDescription}</Card.Title>
                    <Card.Text>
                        R {product.productPrice}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add To Card</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

    return (
        <div className="product-wrapper">
            <h1>Products</h1>
            <div className="row">
                {/* {card} */}
                {items}
            </div>
        </div>
    )
}

export default Product