import Image from "next/image";
import NavBar from "../app/components/Navbar/page";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>This is the Home Page</h1>
    </div>
  );
}
