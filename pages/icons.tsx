import { Nav } from "../components/Nav";
const NavItems = [
  { name: "Home", id: "" },
  { name: "Work", id: "work" },
  { name: "Icons", id: "icons" },
];

function Icons() {
  return (
    <div>
      <Nav NavItems={NavItems} />
      Icons
    </div>
  );
}

export default Icons;
