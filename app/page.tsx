import { MyButton } from "./components/button";
import {User} from "./components/user"
import { Products } from "./components/map-function";

export default function Home() {
  return (
    <div>
      <div>
        <User/>
      </div>
      <h1>Hello</h1>
      <MyButton />
      <Products/>
    </div>
  );
}
