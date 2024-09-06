import React, { useState, useContext, useEffect } from "react";
import { ethers } from "ethers";

//
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

//internal import
import { useStateContext } from "../context/index";
import { checkIfImage } from "../utils/index";

const indexOld = () => {
  const {
    contract,
    realEstate,
    CLIENT_BY_ME,
    activeAccount,
    createPropertyFunction,
    getPropertyDataFunction,
  } = useStateContext();
  const userAddress = activeAccount?.address;

  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  const [form, setForm] = useState({
    propertyTitle: "",
    description: "",
    category: "",
    price: "",
    images: "",
    propertyAddress: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.images, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createPropertyFunction({
          ...form,
          price: ethers.utils.parseUnits(form.price.toString(), 18),
        });
        setIsLoading(false);
      } else {
        alert("Please provide valid image URL");
        setForm({ ...form, images: "" });
      }
    });
  };

  //read data or get data
  const fetchProperties = async () => {
    setIsLoading(true);
    const data = await getPropertyDataFunction();

    setProperties(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) {
      fetchProperties();
    }
  }, [activeAccount, contract]);

  return (
    <div>
      <h1>{realEstate}</h1>
      <ConnectButton
        client={CLIENT_BY_ME}
        wallets={[
          createWallet("io.metamask"),
          createWallet("com.coinbase.wallet"),
          createWallet("me.rainbow"),
        ]}
      />
      <h1>{activeAccount?.address}</h1>

      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="propertyTitle"
            onChange={(e) => handleFormFieldChange("propertyTitle", e)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="description"
            onChange={(e) => handleFormFieldChange("description", e)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="category"
            onChange={(e) => handleFormFieldChange("category", e)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="price"
            onChange={(e) => handleFormFieldChange("price", e)}
          />
        </div>
        <div>
          <input
            type="url"
            placeholder="images"
            onChange={(e) => handleFormFieldChange("images", e)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="propertyAddress"
            onChange={(e) => handleFormFieldChange("propertyAddress", e)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default indexOld;
