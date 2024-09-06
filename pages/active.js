import React, { useState, useEffect } from "react";

//internal import
import { Activity } from "../PageComponents/ActivityPage";

import { Header, Footer, Copyright } from "../PageComponents/Components";
import { useStateContext } from "../context";

const active = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [totalReviews, setTotalReviews] = useState();
  const [highestRated, setHighestRated] = useState();
  //
  const {
    address,
    contract,
    getPropertyDataFunction,
    totalReviewsFunction,
    getHighestRatedProductFunction,
  } = useStateContext();

  //fetch data
  const fetchProperty = async () => {
    setIsLoading(true);
    //1
    const data = await getPropertyDataFunction();
    setProperties(data);

    //2
    const reviewLength = await totalReviewsFunction();
    setTotalReviews(reviewLength);

    // 3
    const highestRatedProduct = await getHighestRatedProductFunction();
    setHighestRated(highestRatedProduct);

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
      <Activity
        properties={properties}
        totalReviews={totalReviews}
        popular={highestRated ? Number(highestRated) : ""}
      />
      <Footer />
      <Copyright />
    </div>
  );
};

export default active;
