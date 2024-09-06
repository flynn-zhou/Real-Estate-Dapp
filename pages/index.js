import React, { useState, useEffect } from "react";

//internal import
import {
  Header,
  Banner,
  Live,
  Service,
  Product,
  TopSeller,
  Collection,
  Footer,
  Copyright,
} from "../PageComponents/Components";

import { useStateContext } from "../context";
import { getTopCreators } from "../utils";

const index = () => {
  //useContext
  const {
    contract,
    CLIENT_BY_ME,
    address,
    createPropertyFunction,
    getPropertyDataFunction,
  } = useStateContext();
  //var
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  //data
  const fetchPropertyData = async () => {
    setIsLoading(true);
    const data = await getPropertyDataFunction();
    setProperties(data);
    setIsLoading(false);
  };

  // useEffect
  useEffect(() => {
    if (contract) {
      fetchPropertyData();
    }
  }, [address, contract]);

  //devide categorys
  const housing = [];
  const rental = [];
  const farmhouse = [];
  const office = [];
  const commercial = [];
  const conntry = [];

  if (!isLoading) {
    properties.map((el, i) => {
      if (el.category === "Rental") {
        rental.push(el);
      } else if (el.category === "Farmhouse") {
        farmhouse.push(el);
      } else if (el.category === "Office") {
        office.push(el);
      } else if (el.category === "Commercial") {
        commercial.push(el);
      } else if (el.category === "Conntry") {
        conntry.push(el);
      } else if (el.category === "Housing") {
        housing.push(el);
      }
    });
  }

  // get creator and amount
  const creators = getTopCreators(properties);

  return (
    <div className="template-color-1 nft-body-connect">
      <Header />
      <Banner properties={properties} />
      <Live properties={properties} />
      <Service />
      <Product />
      <TopSeller creators={creators} />
      <Collection
        housing={housing?.length}
        rental={rental?.length}
        farmhouse={farmhouse?.length}
        office={office?.length}
      />

      <Footer />
      <Copyright />
    </div>
  );
};

export default index;
