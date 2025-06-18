import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const GameDefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading color="gray.600" as="dt">
        {term}
      </Heading>
      <dt>{children}</dt>
    </Box>
  );
};

export default GameDefinitionItem;
