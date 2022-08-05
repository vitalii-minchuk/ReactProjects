import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { formatDistanceToNow, parseISO } from "date-fns";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Post, reactionAdded, Reactions } from "../../redux/slices/postsSlice";

const emoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

interface ISinglePostProps {
  post: Post;
}

const SinglePost: FC<ISinglePostProps> = ({ post }) => {
  const { users } = useAppSelector((state) => state.users);
  const author = users.filter((user) => user.userId === post.userId);
  const timeAgo = formatDistanceToNow(parseISO(post.createdAt));

  const dispatch = useAppDispatch();

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
          posted by {author[0]?.name ? author[0].name : "Unknown author"}{" "}
          {timeAgo}
        </Text>
      </Flex>
      <Text fontSize="10pt">{post.content}</Text>
      <Flex gap={1}>
        {Object.entries(emoji).map(([key, value]) => (
          <Button
            border="1px solid"
            borderColor="transparent"
            bg="transparent"
            _hover={{ border: "1px solid", borderColor: "gray.50" }}
            _active={{ color: "gray.500", bg: "gray.50" }}
            key={key}
            onClick={() => post?.id && dispatch(reactionAdded({id: post.id, reaction: key as keyof Reactions}))}
          >
            {value} {post.reactions[key as keyof Reactions]}
          </Button>
        ))}
      </Flex>
    </Stack>
  );
};

export default SinglePost;
