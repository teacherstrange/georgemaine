import styled from "styled-components";

export const A = styled.a`
  position: relative;
  display: block;
  transition: all 0.12s ease;

  &:hover {
    -webkit-transform: translate(0, -6px); /* Chrome, Safari, Opera */
    transform: translate(0, -6px);
  }

  &:hover svg path {
    fill: var(--red);
  }

  &:hover::before,
  &:hover::after {
    transform: translate(-50%, 9px);
    opacity: 1;
    pointer-events: auto;
  }

  ::before {
    bottom: 100%;
    left: 50%;
    margin: 0 0 var(--spaceXS);
    background: no-repeat
      url("data:image/svg+xml,%3Csvg width='17' height='7' viewBox='0 0 17 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H17C15.1258 0 13.3755 0.91558 12.3359 2.43988L9.81946 6.12945C8.98891 7.3472 7.13421 7.27383 6.40705 5.99445L4.45693 2.56336C3.5577 0.981234 1.85162 0 0 0Z' fill='%23fff'/%3E%3C/svg%3E");
    background-size: 100% auto;
    width: 17px;
    height: 7px;
    opacity: 0;
    pointer-events: none;
    content: "";
    position: absolute;
    z-index: 10;
    transform-origin: top;
    transform: translate(-50%, var(--spaceXS));
    transition: all 0.12s ease;
  }

  ::after {
    bottom: 100%;
    left: 50%;
    margin-bottom: 18px;
    transform: translate(-50%, var(--spaceXS));
    transition: all 0.12s ease;
    transform-origin: top;
    opacity: 0;
    pointer-events: none;
    font-size: 1.3rem;
    line-height: 1.38;
    font-weight: 600;
    letter-spacing: 0.022em;
    background: #fff;
    border-radius: 30px;
    color: #111;
    content: attr(data-tooltip);
    padding: 6px 18px;
    position: absolute;
    white-space: nowrap;
    z-index: 10;
  }
`;
