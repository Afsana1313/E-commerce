import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ProductPage from "../components/ProductPage";
import { apiData } from "../static/apiData";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [productList, setProductList] = useState([] as any);
  const [dataLoaded, setDataLoaded] = useState(true);
  useEffect(() => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // setProductList(res);
        // setDataLoaded(true);
      });
    setProductList(apiData);
  }, []);
  return (
    <div>
      {dataLoaded ? <ProductPage productList={productList} /> : <Loader />}
    </div>
  );
};

export default Home;
