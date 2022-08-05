import { Stack } from "@chakra-ui/react";
import { FC } from "react";
import Posts from "./components/Posts";
import AddPostForm from "./components/Posts/AddPostForm";

const App: FC = () => {
  return (
    <>
      <Stack>
        <AddPostForm />
        <Posts />
      </Stack>
    </>
  );
};

export default App;
