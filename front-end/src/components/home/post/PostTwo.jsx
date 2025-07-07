import { Stack, Typography } from "@mui/material";
import Hello from "./Hello201x1.png";
import { FaRegHeart, FaRegComment, FaRetweet } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
const PostTwo = () => {
  return (
    <>
      <Stack flexDirection={"column"} justifyContent={"space-between"}>
        <Stack flexDirection={"column"} gap={2}>
          <Stack flexDirection={"column"}>
            <Typography variant="h6" fontSize={"1rem"} fontWeight={"bold"}>
              username
            </Typography>
            <Typography variant="h5" fontSize={"1.2rem"}>
              Hey there hows it going
            </Typography>
          </Stack>
          <img src={Hello} loading="lazy" width={"400px"} height={"auto"}></img>
        </Stack>
        <Stack flexDirection={"column"} gap={1}>
          <Stack flexDirection={"row"} gap={2}>
            <FaRegHeart size={32} />
            <FaRegComment size={32} />
            <FaRetweet size={32} />
            <IoMdSend size={32} />
          </Stack>
          <Stack flexDirection={'row'} gap={1} position={'relative'} top={-3} left={4}>
          <Typography variant="caption" color='GrayText' fontSize={'1.1rem'}> 2 likes.</Typography>
          <Typography variant="caption" color='GrayText' fontSize={'1.1rem'}> 2 comments</Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default PostTwo;
