import useGameQueryStore from "@/Store";
import { Menu, Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);

  const selectedOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" borderRadius={10}>
          Order by: {selectedOrder?.label || "Relevance"} <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((sortOrder) => (
              <Menu.Item
                onClick={() => setSortOrder(sortOrder.value)}
                key={sortOrder.value}
                value={sortOrder.value}
              >
                {sortOrder.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
