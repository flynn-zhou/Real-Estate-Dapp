import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import {
  Header,
  Footer,
  Copyright,
  Loader,
} from "../PageComponents/Components";
import {
  DetailEight,
  DetailFive,
  DetailFour,
  DetailOne,
  DetailSeven,
  DetailSix,
  DetailThree,
  DetailTwo,
} from "../PageComponents/DetailPage";

import { useStateContext } from "../context";

const detail = () => {
  const [property, setProperty] = useState();
  const [parsedReviews, setParsedReviews] = useState();
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updatePriceLoading, setUpdatePriceLoading] = useState(false);
  const [commentLoading, setCommentLoading] = useState(false);
  const [buyLoading, setBuyLoading] = useState(false);

  const {
    // functions - write
    buyPropertyFunction,
    addReviewFunction,
    likeReviewFunction,
    updatePriceFunction,
    // functions - read
    getPropertyDataFunction,
    getProductReviewsFunction,
    getPropertyFunction,
    getUserPropertiesFunction,
    getUserReviewsFunction,
    //
    address,
    contract,
  } = useStateContext();

  // get url query
  const router = useRouter();
  const { query } = router;

  //get property data
  const fetchProperty = async () => {
    const data = await getPropertyFunction(query.property);
    const dataReviews = await getProductReviewsFunction(query.property);
    const dataProperties = await getPropertyDataFunction(query.property);

    setProperty(data);
    setParsedReviews(dataReviews);
    setProperties(dataProperties);
    setIsLoading(false);
  };

  // useEffect
  useEffect(() => {
    if (contract) {
      fetchProperty();
    }
  }, [address, contract]);

  const [review, setReview] = useState({
    productId: "",
    rating: 4,
    comment: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setReview({
      ...review,
      [fieldName]: e.target.value,
    });
  };

  const createReview = async () => {
    setCommentLoading(true);
    const data = await addReviewFunction({
      ...review,
      productId: property.productId,
    });

    setCommentLoading(false);
  };

  const [likeReviews, setLikeReviews] = useState({
    productId: "",
    reviewIndex: "",
  });

  const likeReviewCall = async (productId, reviewIndex) => {
    await likeReviewFunction({
      productId: productId,
      reviewIndex: reviewIndex,
    });
  };

  const buying = {
    productId: property?.productId,
    amount: property?.price,
  };

  const buyingProperty = async () => {
    setBuyLoading(true);
    const data = await buyPropertyFunction(buying);
    setBuyLoading(false);
  };

  const [updatePropertyPrice, setUpdatePropertyPrice] = useState({
    productId: property?.productId,
    price: "",
  });

  const updatePrice = async () => {
    setUpdatePriceLoading(true);
    const data = await updatePriceFunction({
      ...updatePropertyPrice,
      productId: property?.productId,
    });
    setUpdatePriceLoading(false);
    window.location.reload();
  };

  return (
    <div className="template-color-1 nft-body-connect">
      <Header />
      <DetailOne />
      <DetailTwo
        property={property}
        parsedReviews={parsedReviews}
        setLikeReviews={setLikeReviews}
        likeReviews={likeReviews}
        likeReviewCall={likeReviewCall}
        buyingProperty={buyingProperty}
        address={address}
        isLoading={isLoading}
        buyLoading={buyLoading}
      />
      <DetailThree properties={properties} />
      <DetailFour />
      <DetailFive />
      <DetailSix />
      <DetailSeven
        property={property}
        setUpdatePropertyPrice={setUpdatePropertyPrice}
        updatePropertyPrice={updatePropertyPrice}
        updatePriceLoading={updatePriceLoading}
        updatePrice={updatePrice}
      />
      <DetailEight
        createReview={createReview}
        handleFormFieldChange={handleFormFieldChange}
        commentLoading={commentLoading}
      />
      <Footer />
      <Copyright />
    </div>
  );
};

export default detail;
