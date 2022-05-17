import { useEffect, useState } from "react";

const useTooken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://afternoon-plateau-95028.herokuapp.com/users/${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem("access_token", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useTooken;
