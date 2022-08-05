import { Button, FormControl, FormLabel, Input, Select, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { postAdded } from "../../redux/slices/postsSlice";

const AddPostForm: FC = () => {
  const [author, setAuthor] = useState("");
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const { users } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  const onAddNewPost = () => {
    if (post.title.trim() && post.content.trim()) {
      dispatch(postAdded(post, author));
      setPost({ title: "", content: "" });
    }
  };

  const onSelectAuthor = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "Select Author") return;
    setAuthor(event.target.value)
  }

  return (
    <Stack p={5}>
      <FormControl isRequired>
        <FormLabel>Post Title</FormLabel>
        <Input
          value={post.title}
          transition="all .5s"
          _hover={{ bg: "gray.100", color: "gray.600" }}
          _focus={{
            color: "gray.600",
            outline: "none",
            border: "2px",
            bg: "gray.100",
            borderColor: "gray.100",
          }}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Post Text</FormLabel>
        <Input
          value={post.content}
          transition="all .5s"
          _hover={{ bg: "gray.100", color: "gray.600" }}
          _focus={{
            color: "gray.600",
            outline: "none",
            border: "2px",
            bg: "gray.100",
            borderColor: "gray.100",
          }}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        />
      </FormControl>
      <FormControl pb={3}>
        <FormLabel>Author</FormLabel>
        <Select onChange={(e: ChangeEvent<HTMLSelectElement>) => onSelectAuthor(e)}>
          <option value="Select Author">Select Author</option>
          {users.map(user => (
            <option key={user.userId} value={user.userId}>{user.name}</option>
          ))}
        </Select>
      </FormControl>
      <Button color="gray.600" onClick={onAddNewPost}>
        Save Post
      </Button>
    </Stack>
  );
};

export default AddPostForm;
