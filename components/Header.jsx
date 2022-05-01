import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightBulbIcon,
  SearchCircleIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Home" Icon={LightBulbIcon} />
        <HeaderItem title="Home" Icon={BadgeCheckIcon} />
        <HeaderItem title="Home" Icon={CollectionIcon} />
        <HeaderItem title="Home" Icon={SearchCircleIcon} />
        <HeaderItem title="Home" Icon={UserIcon} />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        className="object-contain"
        width={200}
        height={100}
        alt="logo"
      />
    </header>
  );
};

export default Header;
