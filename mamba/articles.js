import styled from "styled-components";
import { HelloWorld } from "../data";
import { Caption, ZoomableThumbnailMobile } from "./index";
const List = styled.ul``;
const Item = styled.li`
  display: flex;
  height: 90px;
  position: relative;
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 16px;

  p {
    &:nth-child(2) {
      margin-top: 4px;
    }
  }
`;

export function Articles() {
  return (
    <List>
      <Item>
        <ZoomableThumbnailMobile {...HelloWorld} />
        <Description>
          <Caption>
            <strong>Hello world.</strong>
          </Caption>
          <Caption>November 11, 2020</Caption>
        </Description>
      </Item>
    </List>
  );
}
