import React from "react";
import Link from "next/link";

const Banner = ({ properties }) => {
  let housing = 0;
  let rental = 0;
  let farmhouse = 0;
  let office = 0;
  let commercial = 0;
  let country = 0;

  let housingCounter = 0;
  let rentalCounter = 0;
  let farmhouseCounter = 0;
  let officeCounter = 0;
  let commercialCounter = 0;
  let countryCounter = 0;

  properties?.map((el, i) => {
    if (el.category === "Rental") {
      rental = rental + el.price * 1;
      rentalCounter++;
    } else if (el.category === "Farmhouse") {
      farmhouse += el.price * 1;
      farmhouseCounter++;
    } else if (el.category === "Office") {
      office += el.price * 1;
      officeCounter++;
    } else if (el.category === "Commercial") {
      commercial += el.price * 1;
      commercialCounter++;
    } else if (el.category === "Country") {
      country += el.price * 1;
      countryCounter++;
    } else if (el.category === "Housing") {
      housingCounter++;
      housing += el.price * 1;
    }
  });
  const category = [
    {
      name: "Housing",
      link: "/housing",
      worth: `${housingCounter} items ${housing}`,
    },
    {
      name: "Office",
      link: "/office",
      worth: `${officeCounter} items ${office}`,
    },
    {
      name: "Farmhouse",
      link: "/farmhouse",
      worth: `${farmhouseCounter} items ${farmhouse}`,
    },
    {
      name: "Rental",
      link: "/rental",
      worth: `${rentalCounter} items ${rental}`,
    },
    {
      name: "Commercial",
      link: "/commercial",
      worth: `${commercialCounter} items ${commercial}`,
    },
    {
      name: "Country",
      link: "/country",
      worth: `${countryCounter} items ${country}`,
    },
  ];

  return (
    <div className="banner-three slider-style-3 pt--70">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="wrapper">
              <div className="slider ">
                <div className="slider-thumbnail thumbnail-overlay">
                  <a>
                    <img
                      className="w-100"
                      src="/portfolio/portfolio-11.jpg"
                      alt="NFT_portfolio"
                    />
                  </a>
                  <div className="read-wrapper">
                    <h5>
                      <a>@CryptoVentureInnovators</a>
                    </h5>
                    <span>Join Membership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row g-4">
              {category.map((el, i) => (
                <div key={i + 1} className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="slide-small-wrapper">
                    <div className="thumbnail thumbnail-overlay">
                      <Link
                        href={{
                          pathname: `/category${el.link}`,
                          query: { name: `${el.name}` },
                        }}
                      >
                        <img
                          className="w-100"
                          src={`/portfolio/portfolio-${i + 12}.jpg`}
                          alt="Nft_Profile"
                        />
                      </Link>
                    </div>
                    <div className="read-wrapper">
                      <h5 className="title">
                        <Link href="#">{el.name}</Link>
                      </h5>
                      <span>{el.worth} ETH</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
