import "../404/404.scss";
import UnderConstruction from "../../assets/icons/under.gif";
import NoData from "../../assets/icons/noData.png";

const UnderConstructionPage = ({ tabText }: any) => {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-found-wrapper d-flex align-center justify-center flex-column construction">
          <div className="page-found-heading" style={{ textAlign: "center" }}>
            <img
              src={tabText ? NoData : UnderConstruction}
              alt="underConst"
              width={tabText ? 400 : 200}
            />
            <h2 className="title-color m-0 under">
              {tabText ? (
                tabText
              ) : (
                <span>
                  Under <span className="secondary-color">Construction</span>
                </span>
              )}
            </h2>
          </div>
          {!tabText && (
            <h2 className="primary-color fs-32 m-0 text-center coming">
              Coming <span className="title-color">Soon</span>
            </h2>
          )}
          {!tabText && (
            <p className="title-color fs-16 m-0 text-center d-block">
              We are preparing something amazing and exciting for you.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default UnderConstructionPage;
