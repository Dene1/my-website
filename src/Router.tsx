import {Switch} from "wouter";
import {Home} from "lucide-react";

const Router = () => {
  return (
    <Switch>
      <Router path="/" component={Home} />
    </Switch>
  )
}

export default Router