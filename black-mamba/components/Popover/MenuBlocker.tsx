import { AnimatePresence } from "framer-motion";
import * as style from "./style";

interface PopOverMenuBlockerProps {
  isVisible: boolean;
  onClick: Function;
}

export default function PopOverMenuBlocker({
  isVisible,
  onClick,
}: PopOverMenuBlockerProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <style.PopoverMenuBlocker
          onClick={onClick}
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </AnimatePresence>
  );
}
