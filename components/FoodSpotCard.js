const LocationButton = ({ coordinates = "50.060915,19.948066" }) => {
  return (
    <button
      aria-label={"Location"}
      onClick={() => window.open(`http://maps.apple.com/?q=${coordinates}`)}
    >
      <LocationIcon />
      <style jsx>{`
        button {
          width: 3rem;
          height: 3rem;
          padding: 0;
          margin: 0;
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
        margin: 0;
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
  <svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12.508 14.723c-.38 0-.694-.33-.694-.724V6.096l.052-1.171-.462.582-1.037 1.17a.617.617 0 0 1-.47.212.61.61 0 0 1-.619-.629c0-.196.067-.337.194-.471l2.506-2.538c.179-.188.351-.251.529-.251.187 0 .35.063.53.25l2.506 2.539a.646.646 0 0 1 .202.472.615.615 0 0 1-.627.628.63.63 0 0 1-.47-.213l-1.037-1.17-.462-.573.06 1.163v7.903a.716.716 0 0 1-.701.723ZM8.203 21c-1.61 0-2.453-.88-2.453-2.562v-7.723c0-1.688.844-2.561 2.454-2.561h2.036v1.563H8.3c-.686 0-1.066.377-1.066 1.132v7.448c0 .755.38 1.131 1.066 1.131h8.4c.678 0 1.066-.377 1.066-1.13v-7.449c0-.754-.388-1.132-1.066-1.132h-1.917V8.154h2.013c1.618 0 2.454.88 2.454 2.561v7.723c0 1.682-.836 2.562-2.454 2.562H8.203Z'
      fill='var(--text-dark)'
    />
  </svg>
);

const LocationIcon = () => (
  <svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 4c-3.225 0-7 2.676-7 7 0 2.2 1.49 4.446 3.008 6.09.77.834 1.575 1.543 2.258 2.047.34.251.659.457.933.603.137.073.27.135.395.18.119.042.26.08.406.08.145 0 .287-.038.406-.08.125-.045.258-.107.395-.18.274-.146.593-.352.933-.603a16.592 16.592 0 0 0 2.258-2.048C17.51 15.446 19 13.2 19 11c0-4.472-3.783-7-7-7Zm-6 7c0-3.676 3.225-6 6-6 2.783 0 6 2.19 6 6 0 1.8-1.26 3.804-2.742 5.41-.73.791-1.488 1.457-2.117 1.922-.316.233-.591.41-.81.525-.108.058-.196.097-.261.12a.587.587 0 0 1-.07.021.587.587 0 0 1-.07-.02 2.038 2.038 0 0 1-.262-.12 6.837 6.837 0 0 1-.809-.526 15.603 15.603 0 0 1-2.117-1.921C7.26 14.804 6 12.8 6 11Zm4 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z'
      fill='var(--text-dark)'
    />
    <path
      d='m8.008 17.09.091-.086-.091.085Zm2.258 2.047-.075.1.075-.1Zm.933.603-.059.11.059-.11Zm.395.18.042-.118-.042.117Zm.812 0-.042-.118.042.117Zm.395-.18.059.11-.059-.11Zm.933-.603.075.1-.075-.1Zm2.258-2.048.092.085-.092-.085Zm-.734-.678-.092-.085.092.085Zm-2.117 1.921-.075-.1.075.1Zm-.81.525-.058-.11.059.11Zm-.261.12.042.118-.042-.117Zm-.07.021-.027.123.027.005.027-.005-.027-.122Zm-.07-.02-.042.117.042-.117Zm-.262-.12.059-.111-.059.11Zm-.809-.526.075-.1-.075.1Zm-2.117-1.921-.091.085.091-.085ZM5.125 11c0-4.243 3.706-6.875 6.875-6.875v-.25c-3.281 0-7.125 2.72-7.125 7.125h.25Zm2.974 6.004C6.587 15.366 5.125 13.15 5.125 11h-.25c0 2.25 1.52 4.526 3.04 6.174l.184-.17Zm2.24 2.032a16.47 16.47 0 0 1-2.24-2.032l-.183.17c.775.84 1.586 1.554 2.275 2.063l.149-.2Zm.918.594a7.675 7.675 0 0 1-.917-.594l-.149.201c.344.254.668.464.95.614l.117-.221Zm.38.172a2.896 2.896 0 0 1-.38-.172l-.117.22c.14.075.28.14.412.187l.084-.235Zm.363.073a1.11 1.11 0 0 1-.364-.073l-.084.235c.125.044.282.088.448.088v-.25Zm.364-.073a1.11 1.11 0 0 1-.364.073v.25c.166 0 .323-.044.448-.088l-.084-.235Zm.378-.172c-.133.07-.26.13-.378.172l.084.235c.132-.047.271-.112.412-.186l-.117-.221Zm.918-.594c-.338.25-.65.452-.918.594l.118.22c.281-.149.605-.359.949-.613l-.149-.2Zm2.24-2.032a16.474 16.474 0 0 1-2.24 2.032l.149.201c.69-.509 1.5-1.223 2.275-2.063l-.183-.17ZM18.876 11c0 2.15-1.462 4.366-2.974 6.004l.183.17c1.521-1.648 3.041-3.925 3.041-6.174h-.25ZM12 4.125c3.163 0 6.875 2.486 6.875 6.875h.25c0-4.555-3.853-7.125-7.125-7.125v.25Zm0 .75c-2.831 0-6.125 2.369-6.125 6.125h.25c0-3.595 3.157-5.875 5.875-5.875v-.25ZM18.125 11c0-3.892-3.288-6.125-6.125-6.125v.25c2.728 0 5.875 2.148 5.875 5.875h.25Zm-2.776 5.496c.747-.81 1.44-1.72 1.946-2.658s.83-1.91.83-2.838h-.25c0 .872-.305 1.803-.8 2.719-.494.915-1.173 1.81-1.91 2.607l.184.17Zm-2.134 1.937c.636-.47 1.4-1.142 2.134-1.937l-.183-.17a15.47 15.47 0 0 1-2.1 1.905l.149.202Zm-.825.535c.225-.12.506-.3.825-.535l-.149-.201a6.69 6.69 0 0 1-.793.515l.117.22Zm-.278.127a2.16 2.16 0 0 0 .278-.127l-.117-.221a1.937 1.937 0 0 1-.245.113l.084.235Zm-.085.026a.695.695 0 0 0 .085-.026l-.084-.235a.477.477 0 0 1-.055.016l.054.245Zm-.139-.026c.041.015.07.022.085.026l.054-.245a.477.477 0 0 1-.055-.016l-.084.235Zm-.278-.127c.112.06.205.101.278.127l.084-.235a1.937 1.937 0 0 1-.245-.113l-.117.22Zm-.825-.535c.319.235.6.415.825.535l.117-.221a6.69 6.69 0 0 1-.793-.515l-.149.2Zm-2.134-1.937a15.728 15.728 0 0 0 2.134 1.937l.149-.201a15.475 15.475 0 0 1-2.1-1.906l-.183.17ZM5.875 11c0 .928.324 1.9.83 2.838.506.938 1.199 1.849 1.946 2.658l.183-.17c-.736-.798-1.415-1.692-1.909-2.607-.495-.916-.8-1.847-.8-2.719h-.25ZM12 8.875A2.125 2.125 0 0 0 9.875 11h.25c0-1.036.84-1.875 1.875-1.875v-.25ZM14.125 11A2.125 2.125 0 0 0 12 8.875v.25c1.036 0 1.875.84 1.875 1.875h.25ZM12 13.125A2.125 2.125 0 0 0 14.125 11h-.25c0 1.036-.84 1.875-1.875 1.875v.25ZM9.875 11c0 1.174.951 2.125 2.125 2.125v-.25A1.875 1.875 0 0 1 10.125 11h-.25Zm-.75 0A2.875 2.875 0 0 1 12 8.125v-.25A3.125 3.125 0 0 0 8.875 11h.25ZM12 13.875A2.875 2.875 0 0 1 9.125 11h-.25c0 1.726 1.4 3.125 3.125 3.125v-.25ZM14.875 11A2.875 2.875 0 0 1 12 13.875v.25c1.726 0 3.125-1.4 3.125-3.125h-.25ZM12 8.125A2.875 2.875 0 0 1 14.875 11h.25c0-1.726-1.4-3.125-3.125-3.125v.25Z'
      fill='var(--text-dark)'
    />
  </svg>
);

export const FoodSpotCard = ({
  style,
  index,
  onClick,
  name,
  websiteUrl,
  imageName,
  category,
  openingTime,
  closingTime,
  location,
  color,
  coordinates,
}) => {
  return (
    <article style={style} className='foodSpot' onClick={onClick}>
      <header className='controls'>
        <LocationButton coordinates={coordinates} />
        <ShareButton url={websiteUrl} title={name} text={name} />
      </header>
      {/* <picture>
        <source srcSet={"https://picsum.photos/256/360"} type='image/jpg' />
        <img
          src={"https://picsum.photos/256/360"}
          width={256}
          height={360}
          alt='Food spot'
        />
      </picture> */}

      <footer className='caption'>
        <h3>{name}</h3>
        <p>
          {category} · {location}
          <br />
          Open · {openingTime} - {closingTime}
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
        header,
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
    websiteUrl: "www.olivergreen.nl",
    imageName: "oliver-green",
    category: "Vegetarian",
    openingTime: "10:00",
    closingTime: "18:00",
    location: "Amsterdam",
    color: "#334AC0",
    coordinates: "52.367510, 4.872610",
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
