import "./PageLink.css";
import Button from "react-bootstrap/Button";

const PageLink = ({ page, handlepage }) => {
  return (
    <div className="page">
      <Button
        variant="secondary"
        className="bootstrap_btn"
        id={page}
        onClick={handlepage}
      >
        {page}
      </Button>
    </div>
  );
};

export default PageLink;
