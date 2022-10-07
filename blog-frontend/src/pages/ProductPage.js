import HeaderContainer from "../containers/common/HeaderContainer";
import Announcement from "../components/home/Announcement";
import ProductViewerContainer from "../containers/product/ProductViewerContainer";
import Footer from "../components/home/Footer";


const ProductPage = () => {
    return(
        <>
         <Announcement />
         <HeaderContainer/>
         <ProductViewerContainer/>
         <Footer/>
        </>
    )
};

export default ProductPage;