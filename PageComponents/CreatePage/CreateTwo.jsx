import React, { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

//INTERNAL IMPORT
import { Loader, GlobalLoder } from "../Components";
import { CreateThree } from ".";
import { useStateContext } from "../../context";
import { checkIfImage } from "../../utils";

const categories = [
  "Housing",
  "Rental",
  "Farmhouse",
  "Office",
  "Commercial",
  "Country",
];

import { pinata } from "../../utils";

const CreateTwo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [file, setFile] = useState(null);
  const [showImg, setShowImg] = useState(null);
  const [fileName, setFileName] = useState("Upload Image");

  const {
    firstAccount,
    createPropertyFunction,
    // notifySuccess,
    // notifyError,
  } = useStateContext();

  const [form, setForm] = useState({
    propertyTitle: "",
    description: "",
    category: "",
    price: "",
    images: "",
    propertyAddress: "",
  });

  const handleFormFieldChange = (fileName, e) => {
    setForm({ ...form, [fileName]: e.target.value });
  };

  //NEW
  const handleSubmit = async () => {
    // checkIfImage(form.images, async (exists) => {
    // if (exists) {
    setIsLoading(true);
    await createPropertyFunction({
      ...form,
      price: ethers.utils.parseUnits(form.price, 18),
    });
    setIsLoading(false);
    // } else {
    //   alert("Provide valid image URL");
    //   setForm({ ...form, images: "" });
    // }
    // });
  };

  const onHandleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  // test url: https://chocolate-perfect-dragonfly-557.mypinata.cloud/files/bafkreielvzadkg2ztwjt4luf27aawr3dchqtv2r372zfp5sogcl7idw7mm?X-Algorithm=PINATA1&X-Date=1725471405&X-Expires=30&X-Method=GET&X-Signature=350e1d95520952f61d651e207065bdc1d58615a20eb7adcf070528545ab50e49
  // test url 2: https://chocolate-perfect-dragonfly-557.mypinata.cloud/ipfs/QmU49q8DFiWBC8HfT1XgFztyfcgnRorKFDXugps7cJezLo
  const handleIPFS = async () => {
    setFileName("Image Uploading...");
    if (file) {
      try {
        const upload = await pinata.upload.file(file);
        console.log("handleIPFS upload return upload: ", upload);
        const signedUrl = await pinata.gateways.createSignedURL({
          cid: upload.cid,
          expires: 60,
        });

        setForm({ ...form, images: signedUrl });
        setFileName("Image Uploaded");
        setFile(null);
        alert("Successfully Image Uploaded");

        return signedUrl;
      } catch (error) {
        console.log("Unable to upload image: ", error);
        alert("Unable to upload image to pinata");
      }
    }
  };

  const handleUploadIPFS = async () => {
    if (file) {
      // setLoader(true);
      setFileName("Image Uploading");
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
            pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_KEY,
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("pinata response: ", response);
        const ImgURL = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
        console.log("pinata ImgURL: ", ImgURL);
        setForm({ ...form, images: ImgURL });

        alert("Successfully Image Uploaded");
        setFileName("Image Uploaded");
        setFile(null);

        // notifySuccess("Successfully uploaded");
        // setLoader(false);
        return ImgURL;
      } catch (error) {
        console.log("Unable to upload image: ", error);
        alert("Unable to upload image to pinata");
        // setLoader(false);
        // notifyError("Unable to upload image to Pinata, Check API Key");
      }
    }
  };

  return (
    <>
      <div className="creat-collection-area pt--80">
        <div className="container">
          <div className="row g-5 ">
            <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
              <div className="collection-single-wized banner">
                <label className="title required">Property image</label>

                <div className="create-collection-input logo-image">
                  <div className="logo-c-image logo">
                    <img
                      id="rbtinput1"
                      src={showImg || "/profile/profile-01.jpg"}
                      alt="Profile-NFT"
                    />
                    <label htmlFor="fatima" title="No File Choosen">
                      <span className="text-center color-white">
                        <i className="feather-edit"></i>
                      </span>
                    </label>
                  </div>
                  <div className="button-area">
                    <div className="brows-file-wrapper">
                      <input
                        name="fatima"
                        id="fatima"
                        type="file"
                        onChange={(e) => onHandleImageChange(e)}
                      />
                    </div>
                  </div>
                </div>
                {file && (
                  <a
                    onClick={() => handleIPFS()}
                    className="btn btn-primary-alta btn-large"
                  >
                    {fileName}
                  </a>
                )}
              </div>

              <div className="collection-single-wized banner">
                <label className="title">Cover Image</label>
                <div className="create-collection-input feature-image">
                  <div className="logo-c-image feature">
                    <img
                      id="rbtinput2"
                      src="/profile/cover-04.png"
                      alt="Profile-NFT"
                    />
                    <label htmlFor="nipa" title="No File Choosen">
                      <span className="text-center color-white">
                        <i className="feather-edit"></i>
                      </span>
                    </label>
                  </div>
                  <div className="button-area">
                    <div className="brows-file-wrapper">
                      <input name="nipa" id="nipa" type="file" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="collection-single-wized banner">
                <label className="title">Featured image</label>
                <div className="create-collection-input feature-image">
                  <div className="logo-c-image feature">
                    <img
                      id="createfileImage"
                      src="/profile/cover-03.jpg"
                      alt="Profile-NFT"
                    />
                    <label htmlFor="createinputfile" title="No File Choosen">
                      <span className="text-center color-white">
                        <i className="feather-edit"></i>
                      </span>
                    </label>
                  </div>
                  <div className="button-area">
                    <div className="brows-file-wrapper">
                      <input
                        name="createinputfile"
                        id="createinputfile"
                        type="file"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="create-collection-form-wrapper">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="collection-single-wized">
                      <label htmlFor="name" className="title required">
                        Property Title
                      </label>
                      <div className="create-collection-input">
                        <input
                          id="name"
                          className="name"
                          type="text"
                          required
                          placeholder="propertyTitle"
                          onChange={(e) =>
                            handleFormFieldChange("propertyTitle", e)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="collection-single-wized">
                      <label htmlFor="url" className="title">
                        Image
                      </label>
                      <div className="create-collection-input">
                        <input
                          id="url"
                          className="url"
                          type="text"
                          required
                          placeholder="images"
                          value={form?.images}
                          onChange={(e) => handleFormFieldChange("images", e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="collection-single-wized">
                      <label className="title">Category</label>
                      <div className="create-collection-input">
                        <div className="nice-select mb--30" tabIndex="0">
                          <span className="current">Add Category</span>
                          <ul className="list">
                            {categories.map((el, i) => (
                              <li
                                key={i + 1}
                                onClick={() =>
                                  setForm({
                                    ...form,
                                    category: el,
                                  })
                                }
                                data-value="Housing"
                                className="option"
                              >
                                {el}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="collection-single-wized">
                      <label htmlFor="description" className="title">
                        Description
                      </label>
                      <div className="create-collection-input">
                        <textarea
                          id="description"
                          className="text-area"
                          placeholder="description"
                          onChange={(e) =>
                            handleFormFieldChange("description", e)
                          }
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="collection-single-wized">
                      <label htmlFor="earning" className="title">
                        Price
                      </label>
                      <div className="create-collection-input">
                        <input
                          id="earning"
                          className="url"
                          type="number"
                          placeholder="price"
                          onChange={(e) => handleFormFieldChange("price", e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="collection-single-wized">
                      <label htmlFor="wallet" className="title">
                        Property Address
                      </label>
                      <div className="create-collection-input">
                        <input
                          id="wallet"
                          className="url"
                          type="text"
                          placeholder="propertyAddress"
                          onChange={(e) =>
                            handleFormFieldChange("propertyAddress", e)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="nuron-information mb--30">
                      <div className="single-notice-setting">
                        <div className="input">
                          <input
                            type="checkbox"
                            id="themeSwitch"
                            name="theme-switch"
                            className="theme-switch__input"
                          />
                          <label
                            for="themeSwitch"
                            className="theme-switch__label"
                          >
                            <span></span>
                          </label>
                        </div>
                        <div className="content-text">
                          <p>Explicit & sensitive content</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="button-wrapper">
                      <a
                        href="#"
                        className="btn btn-primary btn-large mr--30"
                        data-bs-toggle="modal"
                        data-bs-target="#collectionModal"
                      >
                        Preview
                      </a>
                      <a
                        onClick={() => handleSubmit()}
                        className="btn btn-primary-alta btn-large"
                      >
                        {isLoading ? <Loader /> : "Create"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateThree data={form} />
      {/* {isLoading && <GlobalLoder />} */}
    </>
  );
};

export default CreateTwo;
