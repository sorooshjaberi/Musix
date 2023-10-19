import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { GoHomeFill } from "react-icons/go";
import { BsSearch, BsPlusSquare } from "react-icons/bs";
import Link from "next/link";
import { ReactNode } from "react";
type Props = {};
type BottomNavigation = {
  link: string;
  label: string;
  icon: ReactNode;
};
const navigationData: BottomNavigation[] = [
  {
    icon: <GoHomeFill />,
    label: "Home",
    link: "/",
  },
  {
    icon: <BsSearch />,
    label: "Search",
    link: "/",
  },
  {
    icon: <BsPlusSquare />,
    label: "Add",
    link: "/",
  },
];
const Navigation = (props: Props) => {
  return (
    <Paper>
      <BottomNavigation className="flex items-center justify-between">
        {navigationData.map((navigation, index) => (
          <Link
            href={navigation.link}
            key={index}
            className="h-full flex-1 text-center"
          >
            <BottomNavigationAction
              sx={{
                fontSize: 25,
                "& .MuiBottomNavigationAction-label": {
                  opacity: 1,
                },
              }}
              className="w-full"
              label={
                <Typography
                  component={"span"}
                  sx={{ fontSize: ".9rem !important" }}
                >
                  {navigation.label}
                </Typography>
              }
              icon={navigation.icon}
            />
          </Link>
        ))}
      </BottomNavigation>
    </Paper>
  );
};
export default Navigation;
