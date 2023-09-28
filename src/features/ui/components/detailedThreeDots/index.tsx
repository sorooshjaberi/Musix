import ThreeDots from "@features/ui/components/threeDots";
import { Box, Menu, MenuItem, MenuProps } from "@mui/material";
import { ReactNode, useRef, useState } from "react";

type Props = {
  menuProps?: MenuProps;
  menuItems?: ReactNode[];
};
const DetailedThreeDots = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <Box>
      <ThreeDots onClick={handleClick} />
      <Menu
        {...{
          anchorEl,
          onClick: handleClose,
          onClose: handleClose,
          open: !!anchorEl,
          transformOrigin: { horizontal: "right", vertical: "bottom" },
          anchorOrigin: { horizontal: "left", vertical: "top" },
          disablePortal: true,
          disableScrollLock: true,
          ...props.menuProps,
        }}
      >
        {props.menuItems?.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
export default DetailedThreeDots;
