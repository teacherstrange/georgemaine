import { StickyNavList, StickyNav } from "./style";
import { Label } from "../Typography";
import { Button, RedButton } from "../Button";

// Declare Props
interface StickyNavProps {
  name: string;
  role: string;
  list: string[];
  button: string;
  onClick: Function;
  active: number;
}

// Create Function
export function StickyNavigation({
  name,
  role,
  list,
  button,
  onClick,
  active,
}: StickyNavProps) {
  return (
    <StickyNav>
      <div>
        <Label color="#111" align="left">
          {name}
        </Label>
        <Label color="#bbb" align="left">
          {role}
        </Label>
      </div>
      <StickyNavList
        whileHover={{ backgroundColor: "#f7f7f7" }}
        whileTap={{ backgroundColor: "#e5e5e5" }}
      >
        {list.map((ListItem, index) => {
          return (
            <li key={index} onClick={() => onClick(index)}>
              <Button style={{ opacity: index != active && 0.6 }}>
                {ListItem}
              </Button>
            </li>
          );
        })}
      </StickyNavList>
      <RedButton>{button}</RedButton>
    </StickyNav>
  );
}
