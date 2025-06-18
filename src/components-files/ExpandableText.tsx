import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>;

  const text = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {text}
      <Button
        size="xs"
        colorPalette="yellow"
        marginX={1}
        variant="surface"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
