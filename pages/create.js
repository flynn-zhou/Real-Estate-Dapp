import React from "react";

//internal import
import {
  CreateOne,
  CreateThree,
  CreateTwo,
} from "../PageComponents/CreatePage";
import { Header, Footer, Copyright } from "../PageComponents/Components";

const create = () => {
  return (
    <div className="template-color-1 nft-body-connect">
      <Header />
      <CreateOne title="Create Property" />
      <CreateTwo />
      <Footer />
      <Copyright />
    </div>
  );
};

export default create;
