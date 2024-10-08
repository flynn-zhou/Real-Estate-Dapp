import React from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="rn-footer-one rn-section-gap bg-color--1 mt--100 mt_md--80 mt_sm--80">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="widget-content-wrapper">
              <div className="footer-left">
                <div className="logo-thumbnail logo-custom-css">
                  <a className="logo-light" href="/">
                    <img src="/logo/logo-white.png" alt="nft-logo" />
                  </a>
                  <a className="logo-dark" href="/">
                    <img src="/logo/logo-dark.png" alt="nft-logo" />
                  </a>
                </div>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/flynn-zhou/Real-Estate-FXchange"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mt: 2,
                    borderColor: "#00a3ff",
                    color: "#00a3ff",
                    "&:hover": {
                      backgroundColor: "rgba(0,163,255,0.1)",
                    },
                  }}
                >
                  FXchange - GitHub
                </Button>
                <p className="rn-footer-describe">
                  Created with the collaboration of over 60 of the world's best
                  FXchange Artists.
                </p>
              </div>
              <div className="widget-bottom mt--40 pt--40">
                <h6 className="title">Get The Latest FXchange Updates</h6>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-color--2"
                    placeholder="Your username"
                    aria-label="Recipient's username"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary-alta btn-outline-secondary"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="newsletter-dsc">
                  <p>Email is safe. We don't spam.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--40">
            <div className="footer-widget widget-quicklink">
              <h6 className="widget-title">FXchange</h6>
              <ul className="footer-list-one">
                <li className="single-list">
                  <a href="#">Protocol Explore</a>
                </li>
                <li className="single-list">
                  <a href="#">System Token</a>
                </li>
                <li className="single-list">
                  <a href="#">Otimize Time</a>
                </li>
                <li className="single-list">
                  <a href="#">Visual Checking</a>
                </li>
                <li className="single-list">
                  <a href="#">Fadeup System</a>
                </li>
                <li className="single-list">
                  <a href="#">Activity Log</a>
                </li>
                <li className="single-list">
                  <a href="#">System Auto Since</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
            <div className="footer-widget widget-information">
              <h6 className="widget-title">Information</h6>
              <ul className="footer-list-one">
                <li className="single-list">
                  <a href="#">Market Explore</a>
                </li>
                <li className="single-list">
                  <a href="#">Ready Token</a>
                </li>
                <li className="single-list">
                  <a href="#">Main Option</a>
                </li>
                <li className="single-list">
                  <a href="#">Product Checking</a>
                </li>
                <li className="single-list">
                  <a href="/blog">Blog Grid</a>
                </li>
                <li className="single-list">
                  <a href="/about">About Us</a>
                </li>
                <li className="single-list">
                  <a href="#">Fix Bug </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
            <div className="footer-widget">
              <h6 className="widget-title">Recent Sold Out</h6>
              <ul className="footer-recent-post">
                <li className="recent-post">
                  <div className="thumbnail">
                    <a href="product-details.html">
                      <img
                        src="/portfolio/portfolio-01.jpg"
                        alt="Product Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <a href="/product-details">#21 The Wonder</a>
                    </h6>
                    <p>Highest bid 1/20</p>
                    <span className="price">0.244ETH</span>
                  </div>
                </li>
                <li className="recent-post">
                  <div className="thumbnail">
                    <a href="/product-details">
                      <img
                        src="/portfolio/portfolio-02.jpg"
                        alt="Product Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <a href="product-details.html">Diamond Dog</a>
                    </h6>
                    <p>Highest bid 1/20</p>
                    <span className="price">0.022ETH</span>
                  </div>
                </li>
                <li className="recent-post">
                  <div className="thumbnail">
                    <a href="/product-details">
                      <img
                        src="/portfolio/portfolio-03.jpg"
                        alt="Product Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <a href="/product-details">Morgan11</a>
                    </h6>
                    <p>Highest bid 1/20</p>
                    <span className="price">0.892ETH</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
