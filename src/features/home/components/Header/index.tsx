import { Box, Typography } from "@mui/material";

type Props = {};
const Header = (props: Props) => {
  return (
      <Typography variant="h2" fontWeight={"600"} textAlign={"center"} mb={10}>{process.env.NEXT_PUBLIC_APP_TITLE}</Typography>
  );
};
export default Header;
