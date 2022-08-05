import { Flex, Stack, Text } from "@chakra-ui/react";
import { formatDistanceToNow, parseISO } from "date-fns";
import { FC } from "react";
import { useAppSelector } from "../../hooks";
import { Post } from "../../redux/slices/postsSlice";

interface ISinglePostProps {
  post: Post;
}

const SinglePost: FC<ISinglePostProps> = ({ post }) => {
  const { users } = useAppSelector((state) => state.users);
  const author = users.filter((user) => user.userId === post.userId);
  const timeAgo = formatDistanceToNow(parseISO(post.createdAt));

console.log(post);
  return (
    <Stack
      p={3}
      spacing={2}
      border="1px solid"
      borderColor="gray.200"
      borderRadius={6}
    >
      <Flex justify="space-between">
        <Text fontSize="14pt" fontWeight={600}>
          {post.title}
        </Text>
        <Text fontSize="8pt">
          posted by {author[0]?.name ? author[0].name : "Unknown author"} {timeAgo}
        </Text>
      </Flex>
      <Text fontSize="10pt">{post.content}</Text>
    </Stack>
  );
};

export default SinglePost;
