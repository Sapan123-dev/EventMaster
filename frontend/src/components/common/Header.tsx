import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { useState } from "react";

const StyledTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  textDecoration: "none",
  color: "white",
}));

const StyledMenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const StyledNavButtons = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const StyledFullList = styled("div")(({ theme }) => ({
  width: "auto",
}));

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Movies", path: "/movies" },
    { text: "Events", path: "/events" },
  ];

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const list = () => (
    <StyledFullList
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </StyledFullList>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <StyledMenuButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </StyledMenuButton>
          )}
          <StyledTitle variant="h6">ShowBooker</StyledTitle>
          <StyledNavButtons>
            {menuItems.map((item) => (
              <Button key={item.text} color="inherit">
                {item.text}
              </Button>
            ))}
          </StyledNavButtons>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </motion.div>
  );
};

export default Header;
