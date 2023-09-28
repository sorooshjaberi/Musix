import { Box, Icon } from "@mui/material";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

type Props = {
  liked?: boolean;
  onLikeChange?: (liked: boolean) => void;
};
const Like = (props: Props) => {
  return (
    <Box
      fontSize={"30px"}
      onClick={(e) => {
        e.stopPropagation();
        props.onLikeChange?.(!props.liked);
      }}
    >
      {props.liked ? (
        <Icon>
          <AiFillHeart />
        </Icon>
      ) : (
        <Icon>
          <AiOutlineHeart />
        </Icon>
      )}
    </Box>
  );
};
export default Like;
