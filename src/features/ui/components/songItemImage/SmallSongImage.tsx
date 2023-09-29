import { Box } from "@mui/material";
import Image from "next/image";

type Props = {
  title?: string;
  imageSrc?: string;
};
const SmallSongImage = (props: Props) => {
  return (
    <Box mr={(theme) => theme.spacing(4)}>
      <Image
        width={60}
        height={60}
        alt={props.title || "a song"}
        src={props.imageSrc || "/images/fallbackSongImage.jpeg"}
      />
    </Box>
  );
};
export default SmallSongImage;
