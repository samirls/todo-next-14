import React from "react";
import { fetchTasks } from "../lib/data";
import { Box } from "@chakra-ui/react";
import Task from "./Task";
import AddTaskModal from "./modals/AddTaskModal";
import { GiCardboardBox } from "react-icons/gi";
import { auth, getUser } from "@/auth";
import Topnav from "../ui/topnav/Topnav";

async function Tasks() {

  const session = await auth();
  const userEmail = session?.user?.email;

  let allUserData;

  if (userEmail) {
    allUserData = await getUser(userEmail);
    console.log(allUserData);
  } else {
    console.log("Email não está definido na sessão.");
  }

  const fetchedTasks = await fetchTasks(allUserData?.user_id);

  console.log(fetchedTasks)


  return (
    <Box pb={{ base: "110px", lg: "150px" }} pt={{ base: "150px", lg: "170px" }}>
      <Box
        fontSize="2rem"
        fontWeight="500"
        display="flex"
        justifyContent="center"
      >
        Tasks
      </Box>
      <Box pl={{ base: "10px", lg: "100px" }} py="10px">
        <AddTaskModal user_id={allUserData?.user_id} user_name={allUserData?.name}/>
      </Box>
      <Box>
        {fetchedTasks.map((task) => (
          <Task key={task.task_id} task={task}/>
        ))}
        {fetchedTasks.length === 0 && (
          <Box display='flex' justifyContent='center' alignItems='center' flexDir='column' height='400px'>
            <Box fontSize="4rem">
              <GiCardboardBox />
            </Box>
            <Box>Empty</Box>
          </Box>
        )}
      </Box>
      <Topnav userEmail={userEmail}/>
    </Box>
  );
}

export default Tasks;
