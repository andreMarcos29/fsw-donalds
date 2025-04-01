import { redirect } from "next/navigation";

const HomePage = () => {
  redirect("/fsw-donalds")
  return <h1>Hello word!</h1>;
};

export default HomePage;
