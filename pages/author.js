import React, { useState, useEffect } from "react";

//internal import
import {
  AuthorFive,
  AuthorFour,
  AuthorOne,
  AuthorThree,
  AuthorTwo,
} from "../PageComponents/AuthorPage";
import { Header, Footer, Copyright } from "../PageComponents/Components";
import { useStateContext } from "../context";

// vidio 18
const author = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [author, setAuthor] = useState([]);

  const {
    contract,
    getUserPropertiesFunction,
    getPropertyDataFunction,
    address,
  } = useStateContext();

  //fetch data
  const fetchProperty = async () => {
    setIsLoading(true);
    const data = await getPropertyDataFunction();
    const dataAuthor = await getUserPropertiesFunction();
    setProperties(data);
    setAuthor(dataAuthor);
    setIsLoading(false);
  };

  // useEffect
  useEffect(() => {
    if (contract) {
      fetchProperty();
    }
  }, [address, contract]);

  return (
    <div className="template-color-1 nft-body-connect">
      <Header />
      <AuthorOne />
      <AuthorTwo address={address} author={author} />
      <AuthorThree properties={properties} author={author} />
      <AuthorFour />
      <AuthorFive />

      <Footer />
      <Copyright />
    </div>
  );
};

export default author;
