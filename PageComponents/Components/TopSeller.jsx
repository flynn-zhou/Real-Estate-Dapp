import React from "react";

const TopSeller = ({ creators }) => {
  return (
    <div className="rn-top-top-seller-area nice-selector-transparent rn-section-gapTop">
      <div className="container">
        <div className="row mb--30">
          <div className="col-12 justify-sm-center d-flex">
            <h3
              className="title"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              Top Property Seller
            </h3>
          </div>
        </div>
        <div className="row justify-sm-center g-5 top-seller-list-wrapper">
          {creators.map((seller, i) => (
            <div
              key={i + 1}
              data-sal=""
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
            >
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail varified">
                    <a href="author.html">
                      <img
                        src={`/client/client-${i + 1}.png`}
                        alt="Nft_Profile"
                      />
                    </a>
                  </div>
                  <div className="top-seller-content">
                    <a href="/author">
                      <h6 className="name">
                        {seller.owner?.slice(0, 6)}...
                        {seller.owner?.slice(seller.owner?.length - 4)}
                      </h6>
                    </a>
                    <span className="count-number">{seller.total} ETH </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
