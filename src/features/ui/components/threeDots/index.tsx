import { Box, Icon } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
type Props = {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  ref?: any;
};
const ThreeDots = (props: Props) => {
  return (
    <Box onClick={props.onClick}>
      <Icon>
        <BsThreeDotsVertical />
      </Icon>
    </Box>
  );
};
export default ThreeDots;
