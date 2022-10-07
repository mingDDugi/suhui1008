import styled from 'styled-components';
import {popularProducts} from '../../data';
import ProductHome from '../../components/home/ProductHome';




const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;



const ProductsHome = () => {
  return (
    <Container>
        {popularProducts.map(item=>(
            <ProductHome item={item} key={item.id}/>
        ))}

     </Container>
  );
};

export default ProductsHome;


// const ProductsHome = () => {
//   return (
//     <Container>
//         {popularProducts.map(item=>(
//             <ProductHome item={item} key={item.id}/>
//         ))}

//      </Container>
//   );
// };

// export default ProductsHome;
