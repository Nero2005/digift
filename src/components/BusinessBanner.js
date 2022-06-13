import "./BusinessBanner.css";

export const BusinessBanner = () => {
  return (
    <div className="bus-banner">
      <a className="helps">Digift helps businesses </a>
      <h1 className="bus-banner-content">
        Why do fast-growing merchant and vendor choose us?
      </h1>
      <p className="bus-banner-desc">
        Whether you’re a business looking to sell your own gift cards, a company
        looking for bulk gift card solution, digift is for you.
      </p>
      <a className="create-account">Create an account today</a>
      <div className="line"></div>
    </div>
  );
};
