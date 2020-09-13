import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer>
      <div className="copyright">
        Made with{" "}
        <FontAwesomeIcon icon={faHeart} color="red" className="fa-heart" /> by
        Tyler Harper
      </div>
    </footer>
  );
};
