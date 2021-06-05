import { useEffect, useState } from "react";
import Icon from "./Icon";
import styles from "./styles.module.css";
const portfolio = [
  {
    title: "Mobile apps for Mollie Payments",
    body: "Product Design · 2019-2020",
    id: "Mobile Apps",
  },
  {
    title: "Promo Video for Mollie Payments",
    body: "Design & Video · 2019",
    id: "Promo Video",
  },
  {
    title: "Checkout for Mollie Payments",
    body: "Product Design & Development · 2019",
    id: "Checkout",
  },
  {
    title: "Launch video for Mollie Payments ",
    body: "Design & Video · 2018",
    id: "Launch Video",
  },
];

const PortfolioMenu = ({ onBtnClick, portfolioItem }) => {
  const [page, setPage] = useState();
  const setInitialPage = () =>
    portfolio.map((item, index) => portfolioItem === item.id && setPage(index));

  const handleNavigation = (i) => {
    if (i < 0) i = 0;
    else if (i > portfolio.length - 1) i = portfolio.length - 1;
    setPage(i);
    onBtnClick(portfolio[i].id);
  };
  useEffect(() => {
    setInitialPage();
  }, []);

  return (
    <footer className={styles.portfolioMenu}>
      {portfolio.map((item, i) => {
        return (
          <div
            key={item.id}
            style={{
              display: i === page ? "block" : "none",
            }}
            className={styles.portfolioMenuTextBlock}
          >
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      })}

      <nav
        style={{
          display: "flex",
        }}
      >
        <button
          className={styles.bubbleBtn}
          onClick={() => handleNavigation(page - 1)}
          disabled={page === 0 ? true : false}
        >
          <Icon string={"ArrowBack"} />
        </button>
        <button
          className={styles.bubbleBtn}
          onClick={() => handleNavigation(page + 1)}
          disabled={page === portfolio.length - 1 ? true : false}
        >
          <Icon string={"ArrowNext"} />
        </button>
      </nav>
    </footer>
  );
};

export { PortfolioMenu };
