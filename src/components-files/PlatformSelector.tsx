import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/Store";
import { Menu, Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatform = usePlatform(
    useGameQueryStore((s) => s.gameQuery.platformId)
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" borderRadius={10}>
          {selectedPlatform?.name || "Platform"} <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => (
              <Menu.Item
                onClick={() => setPlatformId(platform.id)}
                value={platform.id.toString()}
                key={platform.id}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
