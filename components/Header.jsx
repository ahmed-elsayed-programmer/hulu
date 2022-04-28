import Image from "next/image";

const Header = () => {
  return (
    <header>
      <h2>hello this is a header </h2>

      <Image
        src="https://links.papareact.com/ua6"
        className="object-contain"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
