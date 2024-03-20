import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import { PropTypes } from "prop-types";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  console.log(avatar);
  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup max={max}>
        <Box width={"5rem"} height={"3rem"}>
          {avatar.map((src, index) => (
            <Avatar
              key={Math.random() * 100}
              src={src}
              alt={`Avatar ${index}`}
              style={{
                width: "3rem",
                height: "3rem",
                position: "absolute",
                left: {
                  xs: `${0.5 + index}rem`,
                  sm: `${index}rem`,
                },
                border: "2px solid white",
              }}
            />
          ))}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};
AvatarCard.propTypes = {
  avatar: PropTypes.arrayOf(PropTypes.string),
  max: PropTypes.number,
};

export default AvatarCard;
