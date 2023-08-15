import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "../api";
import { addProducts } from "../services/productSlice";
import Card from "./Card";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  console.log(products);
  const getProductsData = async () => {
    const data = await getData("/products");
    dispatch(addProducts(data));
  };

  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <div className="my-5 d-flex justify-content-center flex-wrap gap-5">
        {(products?.map((product) => (
        <Card key={product.id} product={product} />
      ))) }
      
    </div>
  );
};

export default Products;
