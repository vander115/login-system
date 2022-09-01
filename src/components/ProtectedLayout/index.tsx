import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  console.log("Aqui estão os dados");
  console.log(auth);
  if (!auth.email) {
    return <h1>Você não tem acesso</h1>;
  }

  return children;
};
