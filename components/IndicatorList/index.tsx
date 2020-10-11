import { IndicatorListContainer, IndicatorListItem } from "./style";
import { useEffect } from "react";

export function IndicatorList({ list, current }) {
  // Make current match work slides index
  const convertedCurrent =
    current === 1
      ? 0
      : current === 2
      ? 1
      : current === 3
      ? 2
      : current === 4
      ? 3
      : current;

  return (
    <IndicatorListContainer>
      {list.map((Page, index) => {
        return (
          <IndicatorListItem
            key={index}
            index={index}
            current={convertedCurrent}
          />
        );
      })}
    </IndicatorListContainer>
  );
}
