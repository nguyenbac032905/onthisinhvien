import Product from "../../components/Product/Product";
import BannerPanel from "../../components/BannerPanel";
import "./topic.scss";
function Topic() {

  return (
    <>
      <div className="topic">
        <div className="container">
          <BannerPanel />
          <Product />
        </div>
      </div>
    </>
  );
}
export default Topic;
