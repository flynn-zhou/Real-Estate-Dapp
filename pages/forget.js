import React from "react";

//INTERNAL IMPORT
import { Header, Footer, Copyright } from "../PageComponents/Components";
import {
  ForgetFour,
  ForgetOne,
  ForgetThree,
  ForgetTwo,
} from "../PageComponents/ForgetPage";

const forget = () => {
  return (
    <div className="template-color-1 nft-body-connect">
      <Header />
      <ForgetOne />
      <ForgetTwo />
      <ForgetThree />
      <ForgetFour />
      <Footer />
      <Copyright />
    </div>
  );
};

export default forget;
