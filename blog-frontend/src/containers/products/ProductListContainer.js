import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/products/ProductList";
import  { listProducts } from "../../modules/products";
// import ProductsHome from "../components/home/ProductsHome";
// import {popularProducts} from '../../data';
// import ProductHome from '../../components/home/ProductHome';


// useSelector 는 상태 값을 가져온다
// useDispatch 는 module에 있는 액셩 함수 실행 하기 위해서

const ProductListContainer = () => {
    const dispatch = useDispatch();
    const { products, error, loading, user,number,ok } = useSelector(
        ({  loading, user, products,ok }) => ({
            products: products.products,
            error: products.error,
            loading: loading['products/LIST_PRODUCTS'],
            user: user.user,
            ok: products.ok,
        }),
    );

    // console.log(ok);
    useEffect (() => {   
        dispatch(listProducts());
    }, [dispatch]);

    // const searchList = () => {
    // const filtered = product.filter((filterList) => {
    //         return product.title.toLowerCase().includes(userInput.toLowerCase());
    //     })
    //   }
    // }
    // const fromDb = null;
    // const arr = fromDb || [];
    // const result1 = arr.filter(element => element);
    // if (Array.isArray(arr)) {
    //   const result2 = arr.filter(element => element);
    // } else {
    //   console.log('arr is not an array');
    // }


    //   const filtered =  products.filter((product) => 
    //         product.title.toLowerCase().includes(ok.toLowerCase()))
    // if (ok.product)

    // {products.filter((asd) => asd.title.toLowerCase().includes(query)).map(post => (
    //     <Product post={post} key={post._id}/>
    // ))} 환수꼬

    return (  
        <ProductList
          loading={loading}
          error={error}
            products={Array.isArray(products) && ok 
                ? products.filter((product) => 
                product.title.toLowerCase().includes(ok))
                    : products}
            // products={products}
          number={number}
          showWriteButton={user} />
    );
        }

export default ProductListContainer;


