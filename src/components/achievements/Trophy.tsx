
import { Award } from "lucide-react";

interface TrophyProps extends React.ComponentProps<typeof Award> {}

export const Trophy = (props: TrophyProps) => {
  return <Award {...props} />;
};
