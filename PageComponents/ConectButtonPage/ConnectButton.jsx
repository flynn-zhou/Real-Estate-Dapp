import React from "react";

import {
  StateContextProvider,
  CLIENT_BY_ME,
  CHAIN_HOLESKY,
} from "../../context/index";

import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

const MyWalletConnect = () => {
  return (
    <>
      <ConnectButton
        client={CLIENT_BY_ME}
        chain={CHAIN_HOLESKY}
        wallets={[
          createWallet("io.metamask"),
          createWallet("com.coinbase.wallet"),
          createWallet("me.rainbow"),
        ]}
      />
    </>
  );
};

export default MyWalletConnect;
