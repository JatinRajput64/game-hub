import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platforms } from "@/hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { SiAtari } from "react-icons/si";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { SiSega } from "react-icons/si";
import { SiD3Dotjs } from "react-icons/si";
import { LiaNeos } from "react-icons/lia";

interface Props {
  platforms: Platforms[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    atari: SiAtari,
    "commodore-amiga": LiaCheckDoubleSolid,
    sega: SiSega,
    "3do": SiD3Dotjs,
    "neo-geo": LiaNeos,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.500"
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
