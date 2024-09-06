import React from "react";
import Link from "next/link";
import { Loader } from "../Components";

const AuthorThree = ({ properties, author }) => {
  return (
    <div className="rn-authore-profile-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab-wrapper-one">
              <nav className="tab-button-one">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="false"
                  >
                    All Properties
                  </button>
                  <button
                    className="nav-link active"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="true"
                  >
                    Owned
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="tab-content rn-bid-content" id="nav-tabContent">
          <div
            className="tab-pane row g-5 d-flex fade"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            {properties?.length == 0 ? (
              <Loader />
            ) : (
              <>
                {properties?.map((property, i) => (
                  <div
                    key={i + 1}
                    className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                  >
                    <div className="product-style-one no-overlay with-placeBid">
                      <div className="card-thumbnail">
                        <Link href={`/detail?property=${property.productId}`}>
                          <img src={property.image} alt="NFT_portfolio" />
                        </Link>
                      </div>
                      <div className="product-share-wrapper">
                        <div className="profile-share">
                          {property.reviewers.map((el, i) => (
                            <a
                              key={i + 1}
                              className="avatar"
                              data-tooltip={`${el.slice(0, 15)}..`}
                            >
                              <img
                                src={`/client/client-${i + 1}.png`}
                                alt="Nft_Profile"
                              />
                            </a>
                          ))}
                          {property.reviewers.length !== 0 && (
                            <a className="more-author-text" href="#">
                              Interested Users
                            </a>
                          )}
                        </div>
                      </div>
                      <a href="#">
                        <span className="product-name">
                          {property.title.length >= 25
                            ? `${property.title.slice(0, 22)}...`
                            : property.title}
                        </span>
                      </a>
                      <span className="latest-bid">
                        Category: {property.category}
                      </span>
                      <div className="bid-react-area">
                        <div className="last-bid">{property.price} ETH</div>
                        <div className="react-area">
                          <svg
                            viewBox="0 0 17 16"
                            fill="none"
                            width="16"
                            height="16"
                            className="sc-bdnxRM sc-hKFxyN kBvkOu"
                          >
                            <path
                              d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                              stroke="currentColor"
                              strokeWidth="2"
                            ></path>
                          </svg>
                          <span className="number">
                            {property.reviewers.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div
            className="tab-pane row g-5 d-flex fade show active"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            {author?.length == 0 ? (
              <Loader />
            ) : (
              <>
                {author?.map((property, i) => (
                  <div
                    key={i + 1}
                    className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                  >
                    <div className="product-style-one no-overlay with-placeBid">
                      <div className="card-thumbnail">
                        <a href={`/detail?property=${property.productId}`}>
                          <img src={property.image} alt="NFT_portfolio" />
                        </a>
                        <a
                          href={`/update?property=${property.productId}`}
                          className="btn btn-primary"
                        >
                          Update
                        </a>
                      </div>
                      <div className="product-share-wrapper">
                        <div className="profile-share">
                          {property.reviewers.map((el, i) => (
                            <a
                              key={i + 1}
                              className="avatar"
                              data-tooltip={`${el.slice(0, 15)}..`}
                            >
                              <img
                                src={`/client/client-${i + 1}.png`}
                                alt="Nft_Profile"
                              />
                            </a>
                          ))}
                          {property.reviewers.length !== 0 && (
                            <a className="more-author-text" href="#">
                              Interested Users
                            </a>
                          )}
                        </div>
                      </div>
                      <a href="#">
                        <span className="product-name">
                          {property.title.length >= 25
                            ? `${property.title.slice(0, 22)}...`
                            : property.title}
                        </span>
                      </a>
                      <span className="latest-bid">
                        Category: {property.category}
                      </span>
                      <div className="bid-react-area">
                        <div className="last-bid">{property.price} ETH</div>
                        <div className="react-area">
                          <svg
                            viewBox="0 0 17 16"
                            fill="none"
                            width="16"
                            height="16"
                            className="sc-bdnxRM sc-hKFxyN kBvkOu"
                          >
                            <path
                              d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                              stroke="currentColor"
                              strokeWidth="2"
                            ></path>
                          </svg>
                          <span className="number">
                            {property.reviewers.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorThree;
