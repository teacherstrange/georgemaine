import Icon from "../Icon";
import { ContactListData } from "../../../data/index";
import { AnimatePresence } from "framer-motion";
import {
  PopoverList,
  PopoverListItem,
  PopOverContainer,
  PopOverMenuItem,
} from "./style";

interface PopOverProps {
  isVisible: boolean;
}

export default function PopOver({ isVisible }: PopOverProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <PopOverContainer
          initial={{ scale: 0.92, y: -8, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.92, y: -8, opacity: 0 }}
        >
          <PopoverList>
            {ContactListData.map((data, index) => {
              return (
                <PopoverListItem key={index} tabindex={index}>
                  <PopOverMenuItem
                    href={data.url}
                    target={index === 2 ? undefined : "_blank"}
                    rel="nofollow noopener noreferrer"
                  >
                    {data.name}
                    <Icon size={20} glyph={data.name} />
                  </PopOverMenuItem>
                </PopoverListItem>
              );
            })}
          </PopoverList>
        </PopOverContainer>
      )}
    </AnimatePresence>
  );
}
