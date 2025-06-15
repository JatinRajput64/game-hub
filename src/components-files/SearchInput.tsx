import useGameQueryStore from "@/Store";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={ref}
          borderRadius={10}
          placeholder="Search games..."
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
