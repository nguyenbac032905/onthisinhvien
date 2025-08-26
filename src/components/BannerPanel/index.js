import { Carousel } from "antd";
import { Link } from "react-router-dom";
import "./bannerPanel.scss";

function BannerPanel() {
  return (
    <>
      <div className="banner">
        <Carousel className="banner__slide">
          <div className="banner__box">
            <Link to="">
              <img
                src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F887410077-1737682909722-bannerwesbiteonthisinhvien.jpg&w=1920&q=75"
                alt="Banner 1"
              />
            </Link>
          </div>
          <div className="banner__box">
            <Link to="">
              <img
                src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F459198803-1734323778130-bannerwesbiteonthisinhvien9.png&w=1920&q=75"
                alt="Banner 2"
              />
            </Link>
          </div>
          <div className="banner__box">
            <Link to="">
              <img
                src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F254979781-1747476231066-otsv-bannerwebsite.png&w=1920&q=75"
                alt="Banner 3"
              />
            </Link>
          </div>
          <div className="banner__box">
            <Link to="">
              <img
                src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F173056320-1747476284828-otsv-170502025.png&w=1920&q=75"
                alt="Banner 4"
              />
            </Link>
          </div>
          <div className="banner__box">
            <Link to="">
              <img
                src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F843545715-1732516506051-snapedit_1732516500682.jpeg&w=1920&q=75"
                alt="Banner 5"
              />
            </Link>
          </div>
          <div className="banner__box">
            <Link to="">
              <img
                src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F698094967-1692418255600-snapedit_1692418052943.jpeg&w=1920&q=75"
                alt="Banner 6"
              />
            </Link>
          </div>
          <div className="banner__box">
            <Link to="">
              <img
                src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F595523070-1692418114394-snapedit_1692418022206.jpeg&w=1920&q=75"
                alt="Banner 7"
              />
            </Link>
          </div>
          <div className="banner__box">
            <Link to="">
              <img
                src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F930784037-1692418652948-suar.jpeg&w=1920&q=75"
                alt="Banner 8"
              />
            </Link>
          </div>
          <div className="banner__box">
            <Link to="">
              <img
                src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F121696223-1692418207497-snapedit_1692418059166.jpeg&w=1920&q=75"
                alt="Banner 9"
              />
            </Link>
          </div>
        </Carousel>
      </div>
    </>
  );
}
export default BannerPanel;
