import { useContext } from "react";
import { NavigationContext } from "../context/Navigation";
function useNavigationContext() {
  return useContext(NavigationContext);
}
export default useNavigationContext;
