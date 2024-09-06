import Link from "next/link";
import React from "react";

import { getTopCreators } from "../../utils";

const Activity = ({ properties, totalReviews, popular }) => {
  const creators = getTopCreators(properties);
  console.log("totalReviews:", totalReviews);
  return (
    <div className="rn-activity-area rn-section-gapTop">
      <div className="container">
        <div className="row mb--30">
          <h3 className="title">All Acivities</h3>
        </div>
        <div className="row g-6 activity-direction">
          <div className="col-lg-8 mb_dec--15">
            {properties?.map((activity, i) => (
              <div key={i + 1} className="single-activity-wrapper">
                <div className="inner">
                  <div className="read-content">
                    <div className="thumbnail">
                      <a href={`/detail?property=${activity?.productId}`}>
                        <img
                          style={{
                            width: "100px",
                            height: "auto",
                          }}
                          src={activity?.image}
                          alt="Nft_Profile"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <a href={`/detail?property=${activity?.productId}`}>
                        <h6 className="title">{activity.title.slice(0, 25)}</h6>
                      </a>
                      <p>
                        {activity?.owner.slice(0, 18)}...
                        {activity?.owner.slice(activity?.owner?.length - 4)}
                      </p>
                      <div className="time-maintane">
                        <div className="time data">
                          <span>
                            {i + 1}:30 PM on {i + 3}th June,{" "}
                          </span>
                        </div>
                        <div className="user-area data">
                          <Link
                            href={{
                              pathname: `/category/${activity.category}`,
                            }}
                          >
                            {activity.category}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-4">
            <div className="filter-wrapper">
              <div className="widge-wrapper rbt-sticky-top-adjust">
                <div className="inner">
                  <h3>Analytic Stats</h3>
                  <div className="sing-filter">
                    <button>Total Property: {properties?.length}</button>
                    <button>Users: {creators?.length}</button>
                    <button>Reviews: {`${totalReviews}`}</button>
                  </div>
                </div>
                <div className="inner">
                  <h3>Category</h3>
                  <div className="sing-filter">
                    <button>Housing</button>
                    <button>Rental</button>
                    <button>Office</button>
                    <button>Commercial</button>
                    <button>Farmhouse</button>
                    <button>Country</button>
                  </div>
                </div>
                <div className="inner">
                  <h3>Popular Property</h3>
                  <div className="sing-filter">
                    <a
                      href={`/detail?property=${popular}`}
                      // href={{
                      //   pathname: `/detail`,
                      //   query: { property: `${popular}` },
                      // }}
                    >
                      Click to check
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
