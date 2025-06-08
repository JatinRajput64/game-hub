import usePlatform from "@/hooks/usePlatform";
import usePlatforms, { Platforms } from "@/hooks/usePlatforms";
import { Menu, Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  setSelectedPlatform: (platform: Platforms) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  setSelectedPlatform,
  selectedPlatformId,
}: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  const selectedPlatform = usePlatform(selectedPlatformId);

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
                onClick={() => setSelectedPlatform(platform)}
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
