import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
import CartList from "../../components/cart/CartList";
import { cartRemove, listCart } from "../../modules/cart";


// useSelector 는 상태 값을 가져온다
// useDispatch 는 module에 있는 액셩 함수 실행 하기 위해서
// 
const CartContainer = () => { 
    const dispatch = useDispatch();
    const { userId, loading ,error,cart } =  useSelector(
        ({ user, loading,cart }) => ({
            userId : user.user._id,
            loading : loading["cart/LIST_CART"],
            cart: cart.cart,
        })
    )
    useEffect(() => {
        dispatch(listCart(userId));
    },[dispatch, userId]);
 
  
  const onCartRemoveHandler = (productId) => {   
    dispatch(cartRemove({userId, productId}));
    window.location.reload();
    // console.log(dispatch(cartRemove({userId, productId})));
  };

    return (  
        <CartList
          loading={loading}
          error={error}
          cart={cart}
          onCartRemoveHandler={onCartRemoveHandler}
           />
    );
    };

export default CartContainer;


