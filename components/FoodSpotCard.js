export const FoodSpotCard = ({ name, category, location, color }) => {
  return (
    <article className='foodSpot'>
      <footer className='caption'>
        <h3>{name}</h3>
        <p>
          {category} · {location}
        </p>
      </footer>
      <div className='cardOverlay' />
      <style jsx>{`
        article {
          background-color: ${color};
          width: 25.6rem;
          height: 36rem;
          overflow: hidden;
          border-radius: 2.1rem;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          cursor: grab;
          user-select: initial;
          user-drag: none;
          transform-origin: center bottom;
          transform-style: preserve-3d;
        }

        article:active {
          cursor: grabbing;
        }
        header {
          margin: 1.2rem 1.2rem auto auto;
        }

        picture,
        img,
        div,
        p,
        h3 {
          user-select: none;
          user-drag: none;
          pointer-events: none;
        }

        .cardOverlay {
          border-radius: 2.1rem;
          background-color: var(--dark-border);
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
        }

        .caption {
          text-align: center;
          display: flex;
          width: 100%;
          margin-top: auto;
          flex-direction: column;
          padding: 2.1rem;
        }

        h3,
        p {
          margin: 0;
          padding: 0;
          line-height: 1.35;
        }

        @media (min-width: 126rem) {
          .foodSpot,
          img {
            width: 30.6rem;
            height: 43rem;
          }
          .foodspot,
          .cardOverlay {
            border-radius: 2.4rem;
          }
        }
      `}</style>
    </article>
  );
};

export const foodSpots = [
  {
    name: "Oliver Green",
    imageName: "oliver-green",
    category: "Vegetarian",
    location: "Amsterdam",
    color: "rgb(255, 59, 48)",
    appleMapsUrl:
      "https://maps.apple.com/?address=Kinkerstraat%2074A,%201053%20EA%20Amsterdam,%20Netherlands&auid=4073900982404076927&ll=52.367510,4.872610&lsp=9902&q=Oliver%20Green%20-%20Kinkerstraat&_ext=CisKBQgEELABCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRAQCgQIWRADEiYpPI9AY3cuSkAx6gUgIAV2E0A5umRmv50vSkBBAkeB0xWFE0BQBA%3D%3D",
    googleMapsUrl: "https://goo.gl/maps/ThdHkeYvfF8R5wwJ9",
  },
  {
    name: "Cafe Binnenvisser",
    imageName: "binnen-visser",
    category: "Pub",
    location: "Amsterdam",
    color: "rgb(255, 149, 0)",
    appleMapsUrl:
      "https://maps.apple.com/?address=Bilderdijkstraat%2036,%201052%20NB%20Amsterdam,%20Netherlands&auid=17794993742627290052&ll=52.371520,4.870400&lsp=9902&q=Cafe%20Binnenvisser&_ext=CiwKBQgEELABCgQIBRADCgUIBhChAgoECAoQAAoECFIQAQoECFUQDwoECFkQAhImKVg9u8j6LkpAMfpTuJzBcxNAOdYS4SQhMEpAQd4tu6nSghNAUAQ%3D",
    googleMapsUrl: "https://goo.gl/maps/RcJYakUBA3zgz1su6",
  },
  {
    name: "manamana",
    imageName: "mana-mana",
    category: "Street food",
    location: "Amsterdam",
    color: "rgb(255, 204, 0)",
    appleMapsUrl:
      "https://maps.apple.com/?address=Eerste%20Jan%20Steenstraat%2085,%201072%20NE%20Amsterdam,%20Netherlands&auid=13884656007536624109&ll=52.354091,4.890330&lsp=9902&q=manamana&_ext=CisKBQgEELABCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRAPCgQIWRACEiYp/9YE+L8sSkAxld25CSOIE0A5fawqVOYtSkBBMyqDkTKXE0BQBA%3D%3D",
    googleMapsUrl: "https://goo.gl/maps/CUTHcP1Gx5ZNLPgs9",
  },
  {
    name: "Dutch dabbawala",
    imageName: "dutch-dabbawala",
    category: "Indian cuisine",
    location: "Amsterdam",
    color: "rgb(52, 199, 89)",
    appleMapsUrl:
      "https://maps.apple.com/?address=Elandsgracht%20140,%201016%20VC%20Amsterdam,%20Netherlands&auid=12944322373495361966&ll=52.369110,4.878650&lsp=9902&q=Dutch%20Dabbawala&_ext=CisKBQgEELABCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRARCgQIWRAEEiYpdGUG0asuSkAx2m3IZzR8E0A58josLdIvSkBBNp3sPkWLE0BQBA%3D%3D",
    googleMapsUrl:
      "https://maps.google.com?q=Dutch%20Dabbawala,%20Elandsgracht%20140h,%201016%20VC%20Amsterdam&ftid=0x47c609a47bcaec59:0x7e1cb90e1c4c2e2&hl=en-NL&gl=nl&entry=gps&lucs=s2se",
  },
  {
    name: "Collins",
    imageName: "collins",
    category: "Lunch & wine",
    location: "Amsterdam",
    color: "rgb(0,199, 190)",
    appleMapsUrl:
      "https://maps.apple.com/?address=Eerste%20Sweelinckstraat%2019F,%201073%20CL%20Amsterdam,%20Netherlands&auid=12602993295205223492&ll=52.355850,4.898070&lsp=9902&q=Little%20Collins&_ext=CisKBQgEELABCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRAPCgQIWRACEiYpuHk+T/ksSkAxBAcP0heQE0A5Nk9kqx8uSkBBUh/tgCefE0BQBA%3D%3D",
    googleMapsUrl: "https://goo.gl/maps/4y9LLot1Cw2W7wen7",
  },
  {
    name: "Dumplings",
    imageName: "collins",
    category: "Chinese cuisine",
    location: "Amsterdam",
    color: "rgb(48, 176, 199)",
    appleMapsUrl:
      "https://maps.apple.com/?address=Nassauplein%2060,%201052%20AH%20Amsterdam,%20Netherlands&auid=5272656909465088602&ll=52.385450,4.880990&lsp=9902&q=Dumplings-Chinese&_ext=CisKBQgEELABCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRAPCgQIWRACEiYpYjThPsMwSkAx4VDSG5l+E0A54AkHm+kxSkBBJYJeYKuNE0BQBA%3D%3D",
    googleMapsUrl: "https://goo.gl/maps/2JgBtcfig1H3hpog8",
  },
  {
    name: "Entrepot",
    imageName: "entrepot",
    category: "Restaurant & wine",
    location: "Amsterdam",
    color: "rgb(50, 173, 230)",
    appleMapsUrl:
      "https://maps.apple.com/?address=Entrepotdok%207,%201018%20AD%20Amsterdam,%20Netherlands&auid=18342859674901941754&ll=52.369660,4.911910&lsp=9902&q=Entrepot&_ext=CisKBQgEELABCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRAPCgQIWRACEiYpILmQk38uSkAxtBf/DtijE0A5no6276UvSkBBCC32x+iyE0BQBA%3D%3D",
    googleMapsUrl: "https://goo.gl/maps/xXP7hdXWjayd5fHP8",
  },
  {
    name: "Alba",
    imageName: "alba",
    category: "Restaurant & wine",
    location: "Amsterdam",
    color: "rgb(0,122,255)",
    appleMapsUrl:
      "https://maps.apple.com/?address=Wibautstraat%20105,%201091%20GL%20Amsterdam,%20Netherlands&auid=6316978368221374287&ll=52.356040,4.911880&lsp=9902&q=Alba&_ext=CisKBQgEELABCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRAQCgQIWRADEiYp8B3rif8sSkAxPf5YBTyeE0A5bvMQ5iUuSkBBywR2uEutE0BQBA%3D%3D",
    googleMapsUrl: "https://goo.gl/maps/FXKRAbweRYdbRbDf8",
  },
  {
    name: "Restaurant de kas",
    imageName: "restaurant-de-kas",
    category: "Organic restaurant",
    location: "Amsterdam",
    color: "rgb(88, 86, 214)",
    appleMapsUrl:
      "https://maps.apple.com/?address=Kamerlingh%20Onneslaan%203,%201097%20DE%20Amsterdam,%20Netherlands&auid=16408420672603052247&ll=52.352189,4.930541&lsp=9902&q=Restaurant%20De%20Kas&_ext=CisKBQgEELABCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRANCgQIWRABEiYpTpMZYIEsSkAxDTpCHVexE0A5zGg/vKctSkBBh2ljembAE0BQBA%3D%3D",
    googleMapsUrl: "https://goo.gl/maps/dYS2H2AHPQqQaJ8R8",
  },
  {
    name: "Pacomer traiteur",
    imageName: "pacomer-traiteur",
    category: "Spanish delicacies",
    location: "Amsterdam",
    color: "rgb(175, 82, 222)",
    appleMapsUrl:
      "https://maps.apple.com/?address=Gerard%20Doustraat%2066,%201072%20VV%20Amsterdam,%20Netherlands&auid=16412172694752059081&ll=52.355490,4.891130&lsp=9902&q=Pacomer%20Traiteur&_ext=CisKBQgEELABCgQIBRADCgQIBhAOCgQIChAACgQIUhABCgQIVRAQCgQIWRADEiYpTRwvhO0sSkAxJMWPjvyIE0A5y/FU4BMuSkBBFBtkNQyYE0BQBA%3D%3D",
    googleMapsUrl: "https://goo.gl/maps/eYizqgJnEj3qwizJA",
  },
  {
    name: "Alberto Pozzetto",
    imageName: "alberto-pozzetto",
    category: "Italian delicacies",
    location: "Amsterdam",
    color: "rgb(255, 45, 85)",
    appleMapsUrl:
      "https://maps.apple.com/?address=Gerard%20Doustraat%2066,%201072%20VV%20Amsterdam,%20Netherlands&auid=16412172694752059081&ll=52.355490,4.891130&lsp=9902&q=Pacomer%20Traiteur&_ext=CisKBQgEELABCgQIBRADCgQIBhAOCgQIChAACgQIUhABCgQIVRAQCgQIWRADEiYpTRwvhO0sSkAxJMWPjvyIE0A5y/FU4BMuSkBBFBtkNQyYE0BQBA%3D%3D",
    googleMapsUrl: "https://goo.gl/maps/nHXg1nbSBPLvgSxWA",
  },
  {
    name: "Jen’s Bing",
    imageName: "jens-bing",
    category: "Taiwanese food",
    location: "Amsterdam",
    color: "rgb(162, 132, 94)",
    appleMapsUrl:
      "https://maps.apple.com/?address=Jan%20Hanzenstraat%2021A,%201053%20SK%20Amsterdam,%20Netherlands&auid=533841271534204172&ll=52.367958,4.865997&lsp=9902&q=Jen's%20Bing-Amsterdam&_ext=CiwKBQgEELABCgQIBRADCgUIBhDBAgoECAoQAAoECFIQAQoECFUQEAoECFkQAxImKedzSSGGLkpAMX4ZzFwrbxNAOWVJb32sL0pAQdyEOxo8fhNAUAQ%3D",
    googleMapsUrl: "https://goo.gl/maps/ikr3bq2jmuvmmNvaA",
  },
  {
    name: "Levain et le vin",
    imageName: "levain-et-le-vin",
    category: "Bakery & natural wine",
    location: "Amsterdam",
    color: "rgb(142, 142, 147)",
    appleMapsUrl:
      "https://maps.apple.com/?address=Gerard%20Doustraat%2066,%201072%20VV%20Amsterdam,%20Netherlands&auid=16412172694752059081&ll=52.355490,4.891130&lsp=9902&q=Pacomer%20Traiteur&_ext=CisKBQgEELABCgQIBRADCgQIBhAOCgQIChAACgQIUhABCgQIVRAQCgQIWRADEiYpTRwvhO0sSkAxJMWPjvyIE0A5y/FU4BMuSkBBFBtkNQyYE0BQBA%3D%3D",
    googleMapsUrl: "https://goo.gl/maps/XdB5LRWYGqzYjiaA9",
  },
];
