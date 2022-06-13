import { Filters } from "./Filters";
import { Giftcard } from "./Giftcard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Arrivals.css";

export const Arrivals = () => {
  return (
    <div className="arrivals">
      <h1 className="arrivals-title">Latest Arrivals</h1>
      <div className="arrivals-content">
        <Filters />
        <div className="giftcard-list">
          <Giftcard />
          <Giftcard />
          <Giftcard />
        </div>
      </div>
      <div className="load-more">
        Load more products <ChevronRightIcon />
      </div>
    </div>
  );
};
