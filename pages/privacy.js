import React from "react";

//INTERNAL IMPORT
import { Header, Footer, Copyright } from "../PageComponents/Components";
import { PrivacyOne, PrivacyTwo } from "../PageComponents/PrivacyPage";

const privacy = () => {
  return (
    <div className="template-color-1 nft-body-connect">
      <Header />
      <PrivacyOne />
      <PrivacyTwo />
      <Footer />
      <Copyright />
    </div>
  );
};

export default privacy;
