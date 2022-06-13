import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-desc">
        <div className="social">
          <svg
            className="fill-current h-8 w-8 mr-2 home-logo"
            width="30"
            height="30"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <a className="home-link">Digift</a>
          <p>Creating Happiness One Giftcard at a Time.</p>
          <div className="social-icons">
            <InstagramIcon className="instagram" />
            <FacebookIcon className="facebook" />
            <TwitterIcon className="twitter" />
            <LinkedInIcon className="linkedin" />
          </div>
        </div>
        <div className="contact">
          <div className="contact-us">
            <span className="contact-title">Contact us</span>
            <p>hello@digiftng.com</p>
          </div>
          <div className="office">
            <span className="contact-title">Office</span>
            <p>226, Awolowo road, Ikoyi, Lagos State, Nigeria</p>
          </div>
          <div className="footer-links">
            <a className="footer-link">
              Our privacy policy <ChevronRightIcon />
            </a>
            <a className="footer-link">
              Terms and Conditions <ChevronRightIcon />
            </a>
          </div>
        </div>
        <div className="outline">
          <div className="company">
            <div className="outline-title">Company</div>
            <div className="outline-link">Careers</div>
            <div className="outline-link">FAQ</div>
          </div>
          <div className="products">
            <div className="outline-title">Products</div>
            <div className="outline-link">Personal</div>
            <div className="outline-link">Business</div>
            <div className="outline-link">Vendor</div>
          </div>
          <div className="contact-links">
            <div className="outline-title">Contact</div>
            <div className="outline-link">Instagram</div>
            <div className="outline-link">Twitter</div>
            <div className="outline-link">LinkedIn</div>
            <div className="outline-link">Facebook</div>
          </div>
        </div>
      </div>
      <div className="owner">
        <div className="owner-link">
          <ArrowUpwardIcon className="arrow-up" />
        </div>
        <p>
          The website www.digiftng.com is owned and operated by Blinksky Nigeria
          Limited, a company duly registered under the Laws of the Federal
          Republic of Nigeria with RC Number: 1656204. Trademark to all logos of
          Giftcards are owned by their respective brands and Blinksky Nigeria
          Limited doesn’t claim ownership of these trademarks. All Giftcards
          dominated in USD are provided in conjunction with BlinkSky Inc. Users
          must have valid US account and in some cases a valid US address before
          purchasing.
        </p>
        <div className="copyright">
          Copyright © 2022 Blinksky Nigeria Limited
        </div>
      </div>
    </div>
  );
};
