import useNavigationContext from "../hooks/use-navigation";
const Route = ({ path, component }) => {
  const { currentPath } = useNavigationContext();
  if (currentPath === path) return component;
  return null;
};

export default Route;
