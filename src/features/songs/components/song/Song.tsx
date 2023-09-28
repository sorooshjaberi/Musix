import DetailedThreeDots from "@features/ui/components/detailedThreeDots";
import Like from "@features/ui/components/like";
import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import { BsShare } from "react-icons/bs";
import Image from "next/image";
import { ReactNode, useState } from "react";

type Props = {
  imageSrc?: string;
  title?: string;
  artist?: string;
  liked?: boolean;
};
const Song = (props: Props) => {
  const [liked, setLiked] = useState<boolean>(!!props.liked);
  const menuItems: ReactNode[] = [
    <>
      <Box>
        <BsShare />
      </Box>
    </>,
  ];
  return (
    <ButtonBase className="block">
      <Box
        sx={{
          padding: (theme) => theme.spacing(2),
        }}
        className="flex items-center"
      >
        <Box mr={(theme) => theme.spacing(4)}>
          <Image
            width={60}
            height={60}
            alt={props.title || "a song"}
            src={props.imageSrc || "/images/fallbackSongImage.jpeg"}
          />
        </Box>

        <Stack rowGap={1} alignItems={"flex-start"}>
          <Typography variant="subtitle1">{props.title || "A Song"}</Typography>
          <Typography variant="caption">
            {props.artist || "Unknown Artist"}
          </Typography>
        </Stack>

        <Box className={"ml-auto flex items-center"} sx={{gap : ({spacing})=>spacing(2)}}>
          <Like {...{ liked, onLikeChange: setLiked }} />
          <DetailedThreeDots menuItems={menuItems} />
        </Box>
      </Box>
    </ButtonBase>
  );
};
export default Song;
