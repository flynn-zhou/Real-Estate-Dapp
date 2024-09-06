import React, { useContext, useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";

import {
  useSendTransaction,
  useActiveAccount,
  useReadContract,
  useWaitForReceipt,
  useAddress,
  //
  useConnect,
  metamaskWallet,
  // new hooks
  useActiveWallet,
  useSigner,
  useConnectionStatus,
  useWalletBalance,
  useActiveWalletConnectionStatus,
} from "thirdweb/react";

import {
  readContract,
  prepareEvent,
  parseEventLogs,
  createThirdwebClient,
  getContract,
  getContractEvents,
  //   sendTransaction,
  prepareContractCall,
  sendAndConfirmTransaction,
} from "thirdweb";

import { defineChain } from "thirdweb/chains";
import { getBlockNumber } from "thirdweb/extensions/multicall3";

export const CLIENT_BY_ME = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
});

export const CHAIN_HOLESKY = defineChain({
  id: process.env.NEXT_PUBLIC_HOLESKY_CHAIN_ID,
  rpc: process.env.NEXT_PUBLIC_HOLESKY_RPC_URL,
  nativeCurrency: {
    name: process.env.NEXT_PUBLIC_HOLESKY_CURRENCY_NAME,
    symbol: process.env.NEXT_PUBLIC_HOLESKY_CURRENCY_SYMBOL,
    decimals: process.env.NEXT_PUBLIC_HOLESKY_DECIMALS,
  },
});

const StateContext = React.createContext();

export const StateContextProvider = ({ children }) => {
  const contractAddress = process.env.NEXT_PUBLIC_REAL_ESTATE_ADDRESS;

  const firstAccount = useActiveAccount();
  // console.log("useActiveAccount: ", firstAccount);
  const address = firstAccount?.address;

  // const connect = useConnect();
  // const metamaskConfig = metamaskWallet();

  // hooks from Wallet
  //   autoConnect
  // connect
  // disconnect
  // getAccount
  // getChain
  // getConfig
  // id
  // subscribe
  // switchChain
  const wallet = useActiveWallet();

  wallet?.subscribe("accountsChanged", (addresses) => {
    console.log("accountsChanged addresses: ", addresses);
  });

  // console.log("wallet: ", wallet);

  //frontend
  const connectionStatus = useActiveWalletConnectionStatus();
  //let returnType: "connected" | "disconnected" | "connecting";

  // var
  const [userBalance, setUserBalance] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { data: walletBalance } = useWalletBalance({
    chain: CHAIN_HOLESKY,
    address,
    client: CLIENT_BY_ME,
  });

  const contract = getContract({
    client: CLIENT_BY_ME,
    chain: CHAIN_HOLESKY,
    address: contractAddress,
    // optional ABI
    // abi: [...],
  });

  // console.log("contract: ", contract);

  // write func
  const createPropertyFunction = async (form) => {
    try {
      const {
        category,
        description,
        images,
        price,
        propertyAddress,
        propertyTitle,
      } = form;
      //
      const transaction = prepareContractCall({
        contract,
        method:
          "function listProperty(address owner, uint256 price, string _propertyTitle, string _categpry, string _images, string _propertieyAddress, string _description) returns (uint256)",
        params: [
          address,
          price,
          propertyTitle,
          category,
          images,
          propertyAddress,
          description,
        ],
      });
      const transactionReceipt = await sendAndConfirmTransaction({
        account: firstAccount,
        transaction,
      });
      console.log("listProperty transactionReceipt: ", transactionReceipt);
    } catch (error) {
      console.log("Errot while listProperty", error);
    }
  };

  const updatePropertyFunction = async (form) => {
    try {
      const {
        productId,
        propertyTitle,
        category,
        description,
        images,
        propertyAddress,
      } = form;
      //
      const transaction = prepareContractCall({
        contract,
        method:
          "function updateProperty(address owner, uint256 productId, string _propertyTitle, string _categpry, string _images, string _propertieyAddress, string _description) returns (uint256)",
        params: [
          address,
          productId,
          propertyTitle,
          category,
          images,
          propertyAddress,
          description,
        ],
      });
      const transactionReceipt = await sendAndConfirmTransaction({
        account: firstAccount,
        transaction,
      });
      console.log("updateProperty transactionReceipt: ", transactionReceipt);
    } catch (error) {
      console.log("Errot while updateProperty", error);
    }
  };

  const updatePriceFunction = async (form) => {
    try {
      const { productId, price } = form;
      //
      const transaction = prepareContractCall({
        contract,
        method:
          "function updatePrice(address owner, uint256 productId, uint256 price) returns (string)",
        params: [address, productId, ethers.utils.parseEther(price)],
      });
      const transactionReceipt = await sendAndConfirmTransaction({
        account: firstAccount,
        transaction,
      });
      console.log("updatePrice transactionReceipt: ", transactionReceipt);
    } catch (error) {
      console.log("Errot while updatePrice", error);
    }
  };

  const buyPropertyFunction = async (buying) => {
    try {
      const { productId, amount } = buying;
      //
      const transaction = prepareContractCall({
        contract,
        method: "function buyProperty(uint256 id, address buyer) payable",
        params: [productId, address],
        value: ethers.utils.parseUnits(amount, 18),
      });
      const transactionReceipt = await sendAndConfirmTransaction({
        account: firstAccount,
        transaction,
      });
      console.log("buyProperty transactionReceipt: ", transactionReceipt);
    } catch (error) {
      console.log("Errot while updateProperty", error);
    }
  };

  const addReviewFunction = async (form) => {
    try {
      console.log("updatePropertyFunction form: ", form);
      const { productId, rating, comment } = form;
      //
      const transaction = prepareContractCall({
        contract,
        method:
          "function addReview(uint256 productId, uint256 rating, string comment, address user)",
        params: [productId, rating, comment, address],
      });

      const transactionReceipt = await sendAndConfirmTransaction({
        account: firstAccount,
        transaction,
      });
      console.log("addReview transactionReceipt: ", transactionReceipt);
    } catch (error) {
      console.log("Errot while updateProperty", error);
    }
  };

  const likeReviewFunction = async (form) => {
    try {
      const { productId, reviewIndex } = form;
      //
      const transaction = prepareContractCall({
        contract,
        method:
          "function likeReview(uint256 productId, uint256 reviewIndex, address user)",
        params: [productId, reviewIndex, address],
      });

      const transactionReceipt = await sendAndConfirmTransaction({
        account: firstAccount,
        transaction,
      });
      console.log("likeReviews transactionReceipt: ", transactionReceipt);
    } catch (error) {
      console.log("Errot while likeReviews", error);
    }
  };

  //   read func
  const getPropertyDataFunction = async () => {
    const properties = await readContract({
      contract,
      method:
        "function getAllProperties() view returns ((uint256 productId, address owner, uint256 price, string propertyTitle, string category, string images, string propertyAddress, string description, address[] reviewers, string[] reviews)[])",
      params: [],
    });
    const convertBalance =
      address && walletBalance?.value
        ? BigNumber.from(walletBalance?.value?.toString())
        : "";
    const userBalance = convertBalance
      ? ethers.utils.formatEther(convertBalance.toString())
      : "";
    setUserBalance(userBalance);

    const parsedPeoperties = properties.map((property, i) => ({
      owner: property.owner,
      title: property.propertyTitle,
      description: property.description,
      category: property.category,
      price: ethers.utils.formatEther(property.price.toString()),
      productId: Number(property.productId),
      reviewers: property.reviewers,
      reviews: property.reviews,
      image: property.images,
      address: property.propertyAddress,
    }));
    return parsedPeoperties;
  };

  const getHighestRatedProductFunction = async () => {
    const data = await readContract({
      contract,
      method: "function getHighestRatedProduct() view returns (uint256)",
      params: [],
    });
    return data;
  };

  const getProductReviewsFunction = async (productId) => {
    if (productId) {
      const data = await readContract({
        contract,
        method:
          "function getProductReviews(uint256 productId) view returns ((address reviewer, uint256 productId, uint256 rating, string comment, uint256 likes)[])",
        params: [productId],
      });
      const parseData = data?.map((el, i) => ({
        reviewer: el.reviewer,
        likes: Number(el.likes),
        comment: el.comment,
        rating: el.rating,
        productId: Number(el.productId),
        reviewIndex: el.reviewIndex ? Number(el.reviewIndex) : i,
      }));
      return parseData;
    }
  };

  const getPropertyFunction = async (id) => {
    if (id != undefined) {
      const data = await readContract({
        contract,
        method:
          "function getProperty(uint256 id) view returns (uint256, address, uint256, string, string, string, string, string)",
        params: [id],
      });
      const property = {
        productId: Number(data?.[0]),
        owner: data?.[1],
        title: data?.[3],
        category: data?.[4],
        description: data?.[7],
        price: data?.[2] ? ethers.utils.formatEther(data?.[2].toString()) : "",
        address: data?.[6],
        images: data?.[5],
      };
      return property;
    }
  };

  const getUserPropertiesFunction = async () => {
    const properties = await readContract({
      contract,
      method:
        "function getUserProperties(address user) view returns ((uint256 productId, address owner, uint256 price, string propertyTitle, string category, string images, string propertyAddress, string description, address[] reviewers, string[] reviews)[])",
      params: [address],
    });
    const parsedPeoperties = properties.map((property, i) => ({
      owner: property.owner,
      title: property.propertyTitle,
      description: property.description,
      category: property.category,
      price: ethers.utils.formatEther(property.price.toString()),
      productId: Number(property.productId),
      reviewers: property.reviewers,
      reviews: property.reviews,
      image: property.images,
      address: property.propertyAddress,
    }));
    return parsedPeoperties;
  };

  const getUserReviewsFunction = async () => {
    const data = await readContract({
      contract,
      method:
        "function getUserReviews(address user) view returns ((address reviewer, uint256 productId, uint256 rating, string comment, uint256 likes)[])",
      params: [address],
    });
    return data;
  };

  const totalPropertyFunction = async () => {
    const data = await readContract({
      contract,
      method: "function propertyIndex() view returns (uint256)",
      params: [],
    });
    return data;
  };

  const totalReviewsFunction = async () => {
    const data = await readContract({
      contract,
      method: "function reviewsCounter() view returns (uint256)",
      params: [],
    });
    return data;
  };

  // events
  const getContractEventsFunction = async () => {
    const PropertyListedEvent = prepareEvent({
      signature:
        "event PropertyListed(uint indexed id, address indexed owner, uint price)",
    });
    const blockNumber = await getBlockNumber({
      contract,
    });
    const events = await getContractEvents({
      contract: contract,
      fromBlock: 2200000n,
      toBlock: blockNumber,
      events: [PropertyListedEvent],
    });
    return events;
  };

  return (
    <StateContext.Provider
      value={{
        CLIENT_BY_ME,
        CHAIN_HOLESKY,
        // functions - write
        createPropertyFunction,
        updatePropertyFunction,
        updatePriceFunction,
        buyPropertyFunction,
        addReviewFunction,
        likeReviewFunction,
        // functions - read
        getPropertyDataFunction,
        getHighestRatedProductFunction,
        getProductReviewsFunction,
        getPropertyFunction,
        getUserPropertiesFunction,
        getUserReviewsFunction,
        totalPropertyFunction,
        totalReviewsFunction,
        //
        // connect,
        // metamaskConfig,
        //
        userBalance,
        //
        wallet,
        firstAccount,
        address,
        connectionStatus,
        //
        contract,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
