// import { useProductContext } from "../../context/ProductContext";
// // import styled from "styled-components";
// import Product from "../requiredPages/Product";

// const FeatureProduct = () => {
//   const { isLoading, featureProducts } = useProductContext();

//   if (isLoading) {
//     return <div> ......Loading </div>;
//   }

//   return (
//     <>
//       <div className="container">
//         <div className="intro-data">Check Now!</div>
//         <div className="common-heading">Our Feature Services</div>
//         <div className="grid grid-three-column">
//           {featureProducts.map((curElem) => {
//             return <Product key={curElem.id} {...curElem} />;
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeatureProduct;
