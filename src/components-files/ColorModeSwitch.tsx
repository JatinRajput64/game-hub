import { useColorMode } from "@/components/ui/color-mode";
import { HStack, IconButton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <IconButton
        onClick={toggleColorMode}
        variant="outline"
        size="sm"
        borderRadius={10}
      >
        {colorMode === "dark" ? <LuMoon /> : <LuSun />}
      </IconButton>
    </HStack>
  );
};

export default ColorModeSwitch;
