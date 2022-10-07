import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { readProduct, unloadProduct } from "../../modules/product";
import ProductViewer from "../../components/product/ProductViewer";
import { cartAdd } from "../../modules/cart";



const ProductViewerContainer = () => {
    //처음 마운트될 때 포스트 읽기 API 요청
    const [quantity, setquantity ] = useState(0);
    const [size, setsize] = useState(0);
    const { productId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { product, error, loading, user } = useSelector(({ product, loading, user }) => ({
        product: product.product,
        error: product.error,
        loading: loading['products/READ_PRODUCT'],
        user: user.user,
    })) ;

    const handleClick = (op) => {
      if(op === "+"){
        setquantity(quantity + 1);
      }else {
        if(quantity === 1) {
          return;
        }else {
          setquantity(quantity - 1);
        }
      } 
    }

    useEffect(() => {
        dispatch(readProduct(productId));
        //언마운트될 때 리덕스에서 포스트 데이터 없애기
        return () => {
            dispatch(unloadProduct());
        };
    }, [dispatch, productId]);
    
    
    // console.log("product : " + JSON.stringify(product));
    // console.log("productId : " + productId);
    // console.log("user : " +     JSON.stringify(user));

    const onCartAddHandler = () => {
        const userId = user._id;
        dispatch(cartAdd({userId, productId, product, quantity, size}));
        navigate("/cart");
        // console.log(addCart({userId, productId, product}));
        
        // navigate('/cart');
        // userId,productId,title,price,image,quantity,size,color 
        // console.log() 이용해서 전부 다 출력하게 하기
        // console.log("user : " +  JSON.stringify(user._id));
        // console.log("productId : " + (productId));
        // console.log("product title: " + JSON.stringify(product.title));
        // console.log("product price: " + JSON.stringify(product.price));
        // console.log("product image: " + JSON.stringify(product.image));
        // console.log("product quantity: " + JSON.stringify(product.quantity));
        // console.log("product size: " + JSON.stringify(product.size));
        // console.log("product color: " + JSON.stringify(product.color));
    };

    const onSizeHandler = (size) => {
      setsize(size);
    }

    // sizeClick = () => {
    //   this.state.size;
    //   this.setState({ 
    //   });
    // };

    // handleChange = (e) => {
    //   this.setState({
    //     [e.target.size]: e.target.value
    //   });
    // };

   return (
    <ProductViewer
      product={product}
      quantity={quantity}
      loading={loading}
      error={error}
      onCartAddHandler={onCartAddHandler}
      handleClick={handleClick}
      onSizeHandler={onSizeHandler}
      // handleChange={handleChange}
      // sizeClick={sizeClick}
    />

  );
};

export default ProductViewerContainer;