import { Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import SinglePost from "./Post";

const Posts: FC = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  return (
    <Stack p={5}>
      <Text fontSize="18pt" fontWeight={700} mb={4}>
        Posts
      </Text>
      <Stack spacing={4}>
        {posts.map((item) => (
          <SinglePost key={item.id} post={item} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Posts;
