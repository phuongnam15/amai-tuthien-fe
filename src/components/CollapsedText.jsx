import { useState } from "react";
import useCheckScreen from "../utils/hooks/useCheckScreen";

const CollapsedText = ({ collapseText, textArray, styleText }) => {
  const { isMobileScreen } = useCheckScreen();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => setIsExpanded((prev) => !prev);

  return (
    <p className={styleText}>
      {isMobileScreen && !isExpanded
        ? collapseText
        : textArray.map((item, index) => {
            return index === textArray.length - 1 ? (
              item
            ) : (
              <>
                <>{item}</>
                <br />
                <br />
              </>
            );
          })}
      {isMobileScreen && (
        <span
          onClick={toggleText}
          className="font-semibold underline text-primary-4 ml-1"
        >
          {isExpanded ? "Ẩn bớt" : "Xem thêm"}
        </span>
      )}
    </p>
  );
};

export default CollapsedText;
