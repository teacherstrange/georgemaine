const LocationButton = ({ coordinates, appleMapsUrl }) => {
  return (
    <button
      aria-label={"Location"}
      onClick={() => {
        const ua = navigator.userAgent.toLowerCase();
        const isAndroid = ua.indexOf("android") > -1;
        if (isAndroid) {
          window.location = `geo:${coordinates}`;
        } else {
          window.location = appleMapsUrl;
        }
      }}
    >
      <LocationIcon />
      <style jsx>{`
        button {
          width: 3rem;
          height: 3rem;
          padding: 0;
          margin: 0.9rem 0.6rem 0;
          border: 0;
          background: transparent;
          user-select: initial;
          user-drag: initial;
          pointer-events: initial;
        }
      `}</style>
    </button>
  );
};
const ShareButton = ({ url, title, text }) => {
  const shareData = {
    title: title,
    text: text,
    url: url,
  };

  return (
    <button
      aria-label={"Share"}
      onClick={async () => {
        try {
          await navigator.share(shareData);
        } catch (err) {}
      }}
    >
      <ShareIcon />
      <style jsx>{`
        width: 3rem;
        height: 3rem;
        padding: 0;
        margin: 0.9rem 0.6rem 0;
        border: 0;
        background: transparent;
        user-select: initial;
        user-drag: initial;
        pointer-events: initial;
      `}</style>
    </button>
  );
};

const ShareIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.5 5.89622C11.5 5.11328 12.359 4.63404 13.0253 5.04528L19.7942 9.22359C20.7437 9.80967 20.7437 11.1903 19.7942 11.7764L13.0253 15.9547C12.359 16.366 11.5 15.8867 11.5 15.1038V14.0012C8.86164 14.0872 6.92205 15.4615 6.54152 17.7872C6.47498 18.194 6.14717 18.4297 5.84542 18.4855C5.53268 18.5434 5.10105 18.4231 4.94847 17.9751C4.65766 17.1212 4.5 16.2053 4.5 15.2533C4.5 11.0725 7.53588 7.67713 11.5 7.06012V5.89622Z'
      fill='var(--text-dark)'
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5 11C5 6.67561 8.77471 4 12 4C15.2175 4 19 6.52803 19 11C19 13.1993 17.5092 15.4459 15.9924 17.0891C15.222 17.9238 14.4173 18.6326 13.7344 19.1367C13.3936 19.3882 13.0755 19.5944 12.8012 19.7403C12.6641 19.8132 12.5307 19.8749 12.4057 19.9195C12.2872 19.9617 12.1451 20 12 20C11.8549 20 11.7128 19.9617 11.5943 19.9195C11.4693 19.8749 11.3359 19.8132 11.1988 19.7403C10.9245 19.5944 10.6064 19.3882 10.2656 19.1367C9.58271 18.6326 8.77803 17.9238 8.0076 17.0891C6.49077 15.4459 5 13.1993 5 11ZM12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8Z'
      fill='var(--text-dark)'
    />
  </svg>
);

export const FoodSpotCard = ({
  name,
  websiteUrl,
  category,
  location,
  color,
  coordinates,
  appleMapsUrl,
}) => {
  return (
    <article className='foodSpot'>
      <footer className='caption'>
        <h3>{name}</h3>
        <p>
          {category} · {location}
        </p>
        <div className='controls'>
          <LocationButton
            coordinates={coordinates}
            appleMapsUrl={appleMapsUrl}
          />
          <ShareButton url={websiteUrl} title={name} text={name} />
        </div>
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
          padding: 1.5rem;
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
    websiteUrl: "www.olivergreen.nl",
    imageName: "oliver-green",
    category: "Vegetarian",
    openingTime: "10:00",
    closingTime: "18:00",
    location: "Amsterdam",
    color: "#334AC0",
    coordinates: "52.367510, 4.872610",
    appleMapsUrl:
      "https://maps.apple.com/?address=Kinkerstraat%2074A,%201053%20EA%20Amsterdam,%20Netherlands&auid=4073900982404076927&ll=52.367510,4.872610&lsp=9902&q=Oliver%20Green%20-%20Kinkerstraat&_ext=CisKBQgEELABCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRAQCgQIWRADEiYpPI9AY3cuSkAx6gUgIAV2E0A5umRmv50vSkBBAkeB0xWFE0BQBA%3D%3D",
  },
  {
    name: "Cafe Binnenvisser",
    websiteUrl: "binnenvisser.nl",
    imageName: "binnen-visser",
    category: "Pub",
    openingTime: "12:00",
    closingTime: "03:00",
    location: "Amsterdam",
    color: "#70B1FF",
    coordinates: "52.371520, 4.870400",
    appleMapsUrl:
      "https://maps.apple.com/?address=Bilderdijkstraat%2036,%201052%20NB%20Amsterdam,%20Netherlands&auid=17794993742627290052&ll=52.371520,4.870400&lsp=9902&q=Cafe%20Binnenvisser&_ext=CiwKBQgEELABCgQIBRADCgUIBhChAgoECAoQAAoECFIQAQoECFUQDwoECFkQAhImKVg9u8j6LkpAMfpTuJzBcxNAOdYS4SQhMEpAQd4tu6nSghNAUAQ%3D",
  },
  {
    name: "manamana",
    websiteUrl: "mana-mana.nl",
    imageName: "mana-mana",
    category: "Street food",
    openingTime: "12:00",
    closingTime: "22:00",
    location: "Amsterdam",
    color: "#47CAD2",
    coordinates: "52.354091, 4.890330",
    appleMapsUrl:
      "https://maps.apple.com/?address=Eerste%20Jan%20Steenstraat%2085,%201072%20NE%20Amsterdam,%20Netherlands&auid=13884656007536624109&ll=52.354091,4.890330&lsp=9902&q=manamana&_ext=CisKBQgEELABCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRAPCgQIWRACEiYp/9YE+L8sSkAxld25CSOIE0A5fawqVOYtSkBBMyqDkTKXE0BQBA%3D%3D",
  },
  {
    name: "Dutch dabbawala",
    websiteUrl: "dutchdabbawala.nl",
    imageName: "dutch-dabbawala",
    category: "Indian cuisine",
    openingTime: "12:00",
    closingTime: "22:00",
    location: "Amsterdam",
    color: "#269CA3",
    coordinates: "52.369110, 4.878650",
    appleMapsUrl:
      "https://maps.apple.com/?address=Elandsgracht%20140,%201016%20VC%20Amsterdam,%20Netherlands&auid=12944322373495361966&ll=52.369110,4.878650&lsp=9902&q=Dutch%20Dabbawala&_ext=CisKBQgEELABCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRARCgQIWRAEEiYpdGUG0asuSkAx2m3IZzR8E0A58josLdIvSkBBNp3sPkWLE0BQBA%3D%3D",
  },
  {
    name: "Collins",
    websiteUrl: "littlecollins.nl",
    imageName: "collins",
    category: "Lunch & wine",
    openingTime: "11:00",
    closingTime: "15:00",
    location: "Amsterdam",
    color: "#6CE194",
    coordinates: "52.355850, 4.898070",
    appleMapsUrl:
      "https://maps.apple.com/?address=Elandsgracht%20140,%201016%20VC%20Amsterdam,%20Netherlands&auid=12944322373495361966&ll=52.369110,4.878650&lsp=9902&q=Dutch%20Dabbawala&_ext=CisKBQgEELABCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRARCgQIWRAEEiYpdGUG0asuSkAx2m3IZzR8E0A58josLdIvSkBBNp3sPkWLE0BQBA%3D%3D",
  },
  {
    name: "Dumplings",
    websiteUrl: "dumplings-chinese.nl",
    imageName: "collins",
    category: "Chinese cuisine",
    openingTime: "10:00",
    closingTime: "22:00",
    location: "Amsterdam",
    color: "#FFD84E",
    coordinates: "52.385450, 4.880990",
    appleMapsUrl:
      "https://maps.apple.com/?address=Nassauplein%2060,%201052%20AH%20Amsterdam,%20Netherlands&auid=5272656909465088602&ll=52.385450,4.880990&lsp=9902&q=Dumplings-Chinese&_ext=CisKBQgEELABCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRAPCgQIWRACEiYpYjThPsMwSkAx4VDSG5l+E0A54AkHm+kxSkBBJYJeYKuNE0BQBA%3D%3D",
  },
  {
    name: "Entrepot",
    websiteUrl: "restaurantentrepot.nl",
    imageName: "entrepot",
    category: "Restaurant & wine",
    openingTime: "18:00",
    closingTime: "22:00",
    location: "Amsterdam",
    color: "#FFBB5C",
    coordinates: "52.369660, 4.911910",
    appleMapsUrl:
      "https://maps.apple.com/?address=Entrepotdok%207,%201018%20AD%20Amsterdam,%20Netherlands&auid=18342859674901941754&ll=52.369660,4.911910&lsp=9902&q=Entrepot&_ext=CisKBQgEELABCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRAPCgQIWRACEiYpILmQk38uSkAxtBf/DtijE0A5no6276UvSkBBCC32x+iyE0BQBA%3D%3D",
  },
  {
    name: "Alba",
    websiteUrl: "alba-amsterdam.nl",
    imageName: "alba",
    category: "Restaurant & wine",
    openingTime: "17:30",
    closingTime: "00:00",
    location: "Amsterdam",
    color: "#FE8AA7",
    coordinates: "52.356040, 4.911880",
    appleMapsUrl:
      "https://maps.apple.com/?address=Wibautstraat%20105,%201091%20GL%20Amsterdam,%20Netherlands&auid=6316978368221374287&ll=52.356040,4.911880&lsp=9902&q=Alba&_ext=CisKBQgEELABCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRAQCgQIWRADEiYp8B3rif8sSkAxPf5YBTyeE0A5bvMQ5iUuSkBBywR2uEutE0BQBA%3D%3D",
  },
  {
    name: "Restaurant de kas",
    websiteUrl: "restaurantdekas.nl",
    imageName: "restaurant-de-kas",
    category: "Organic restaurant",
    openingTime: "18:30",
    closingTime: "22:00",
    location: "Amsterdam",
    color: "#FF7673",
    coordinates: "52.352189, 4.930541",
    appleMapsUrl:
      "https://maps.apple.com/?address=Kamerlingh%20Onneslaan%203,%201097%20DE%20Amsterdam,%20Netherlands&auid=16408420672603052247&ll=52.352189,4.930541&lsp=9902&q=Restaurant%20De%20Kas&_ext=CisKBQgEELABCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRANCgQIWRABEiYpTpMZYIEsSkAxDTpCHVexE0A5zGg/vKctSkBBh2ljembAE0BQBA%3D%3D",
  },
  {
    name: "Pacomer traiteur",
    websiteUrl: "pacomertraiteur.nl",
    imageName: "pacomer-traiteur",
    category: "Spanish delicacies",
    openingTime: "10:00",
    closingTime: "18:00",
    location: "Amsterdam",
    color: "#AB6EF9",
    coordinates: "52.355490, 4.891130",
    appleMapsUrl:
      "https://maps.apple.com/?address=Gerard%20Doustraat%2066,%201072%20VV%20Amsterdam,%20Netherlands&auid=16412172694752059081&ll=52.355490,4.891130&lsp=9902&q=Pacomer%20Traiteur&_ext=CisKBQgEELABCgQIBRADCgQIBhAOCgQIChAACgQIUhABCgQIVRAQCgQIWRADEiYpTRwvhO0sSkAxJMWPjvyIE0A5y/FU4BMuSkBBFBtkNQyYE0BQBA%3D%3D",
  },
  // {
  //   name: "Alberto Pozzetto",
  //   websiteUrl: "alberto-pozzetto.business.site",
  //   imageName: "alberto-pozzetto",
  //   category: "Italian delicacies",
  //   openingTime: "10:00",
  //   closingTime: "18:00",
  //   location: "Amsterdam",
  //   color: "rgb(254, 134, 159)",
  //   coordinates: "52.354860, 4.893610",
  // },
  // {
  //   name: "Jen’s Bing",
  //   websiteUrl: "jensbing.nl",
  //   imageName: "jens-bing",
  //   category: "Taiwanese food",
  //   openingTime: "11:00",
  //   closingTime: "18:00",
  //   location: "Amsterdam",
  //   color: "rgb(254, 134, 159)",
  // coordinates: "52.367958, 4.865997",
  // },
  // {
  //   name: "Levain et le vin",
  //   websiteUrl: "levainetlevin.nl",
  //   imageName: "levain-et-le-vin",
  //   category: "Bakery & natural wine",
  //   openingTime: "08:30",
  //   closingTime: "17:00",
  //   location: "Amsterdam",
  //   color: "rgb(254, 134, 159)",
  // coordinates: "52.361130, 4.864810",
  // },
];
