import React from "react";
import { signOut } from "@/auth";
import { Button } from "@chakra-ui/react";


async function Logout() {

  return (
    <form
       action={async () => {
        "use server";
        await signOut();
      }} 
      style={{display: 'flex', justifyContent: 'center'}}
    >
      <Button type="submit">
        Click here to Logout
      </Button>

    </form>
  );
}

export default Logout;
