/* eslint-disable @next/next/no-img-element */
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
}) => {
  return (
    <div
      name={name}
      href={websiteUrl}
      style={style}
      className='foodSpot'
      onClick={onClick}
    >
      {/* <picture>
        <source srcSet={"https://picsum.photos/256/360"} type='image/jpg' />
        <img
          src={"https://picsum.photos/256/360"}
          width={256}
          height={360}
          alt='Food spot'
        />
      </picture> */}
      {index}
      {/* <div className='caption'>
        <h3></h3>
        <p>
          {category} · {location}
          <br />
          Open · {openingTime} - {closingTime}
        </p>
      </div> */}
      <style jsx>{`
        .foodSpot {
          background-color: ${color};
          width: 25.6rem;
          height: 36rem;
          overflow: hidden;
          border-radius: 2.1rem;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          /* 
          flex-direction: column;
          justify-content: flex-end; */
          cursor: grab;
          user-select: initial;
          user-drag: none;
          transform-origin: center bottom;
          transform-style: preserve-3d;
        }

        .foodSpot:active {
          cursor: grabbing;
        }

        picture,
        img,
        div,
        p,
        h3 {
          user-select: none;
          user-drag: none;
        }

        .caption {
          text-align: center;
          opacity: ${index === 0 ? 1 : 0};
        }

        @media (min-width: 126rem) {
          .foodSpot {
            width: 30.6rem;
            height: 43rem;
          }
        }
      `}</style>
    </div>
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
  },
  {
    name: "Entrepot",
    websiteUrl: "restaurantentrepot.nl",
    imageName: "entrepot",
    category: "Restaurant and wine bar",
    openingTime: "18:00",
    closingTime: "22:00",
    location: "Amsterdam",
    color: "#FFBB5C",
  },
  {
    name: "Alba",
    websiteUrl: "alba-amsterdam.nl",
    imageName: "alba",
    category: "Restaurant & wine bar",
    openingTime: "17:30",
    closingTime: "00:00",
    location: "Amsterdam",
    color: "#FE8AA7",
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
  // },
];
