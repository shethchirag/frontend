import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Orange } from "./../components/Layout/constants/Color";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { MatBlack } from "./../components/Layout/constants/Color";
import { useNavigate } from "react-router-dom";
import { memo, useState } from "react";
import { LinkComponent } from "../components/style/VisuallyHidden";
import AvatarCard from "./../components/shared/AvatarCard";
import { sampleChats } from "./../components/Layout/constants/SampleData";

const Groups = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const navigateBack = () => {
    navigate("/");
  };
  const handleMobile = () => {
    setIsMobile((isMobile) => !isMobile);
  };
  const handleMobileClose = () => {
    setIsMobile(false);
  };
  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            top: "1rem",
            right: "1rem",
          },
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: MatBlack,
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );
  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        bgcolor={"bisque"}
        sm={4}
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        <GroupList myGroups={sampleChats} chatId={"ksjcnjksdkc"} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconBtns}
      </Grid>
      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
        open={isMobile}
        onClose={handleMobileClose}
      >
        <GroupList myGroups={sampleChats} chatId={"ksjcnjksdkc"} w={"50vw"} />
      </Drawer>
    </Grid>
  );
};

const GroupList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <Stack width={w}>
      {myGroups.length > 0 ? (
        myGroups.map((group) => (
          <GroupListItem key={group._id} group={group} chatId={chatId} />
        ))
      ) : (
        <Typography textAlign="center" padding={"1rem"}>
          No groups yet
        </Typography>
      )}
    </Stack>
  );
};

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <LinkComponent
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) {
          e.preventDefault();
        }
      }}
    >
      <Stack padding={"1rem"} direction={"row"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography textAlign="center">{name}</Typography>
      </Stack>
    </LinkComponent>
  );
});
GroupListItem.displayName = "GroupListItem";

export default Groups;
