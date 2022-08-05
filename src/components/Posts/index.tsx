import { ScaleFade, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import SinglePost from "./Post";

const Posts: FC = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const orderedPosts = posts.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  
  const dispatch = useAppDispatch();

  return (
    <Stack p={5}>
      <Text fontSize="18pt" fontWeight={700} mb={4}>
        Posts
      </Text>
      <Stack spacing={4}>
        {orderedPosts?.map((item) => (
          <ScaleFade key={item.id} initialScale={0.1} in >
            <SinglePost post={item} />
          </ScaleFade>
        ))}
      </Stack>
    </Stack>
  );
};

export default Posts;
