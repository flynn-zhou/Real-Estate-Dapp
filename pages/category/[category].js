import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Title, Collection } from "../../PageComponents/CollectionPage";
import { Header, Footer, Copyright } from "../../PageComponents/Components";

//
import { useStateContext } from "../../context";

const collection = () => {
  const router = useRouter();
  const { query } = router;

  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  const { contract, address, getPropertyDataFunction } = useStateContext();

  //fetch data
  const fetchProperty = async () => {
    setIsLoading(true);
    //1
    const data = await getPropertyDataFunction();
    setProperties(data);

    setIsLoading(false);
  };

  // useEffect
  useEffect(() => {
    if (contract) {
      fetchProperty();
    }
  }, [address, contract]);

  const category = [];
  if (!isLoading) {
    properties.map((el, i) => {
      if (el.category === query.category || el.category === query.name) {
        category.push(el);
      }
    });
  }

  return (
    <div className="template-color-1 nft-body-connect">
      <Header />
      <Title title={query.category} />
      <Collection category={category} isLoading={isLoading} />
      <Footer />
      <Copyright />
    </div>
  );
};

export default collection;
