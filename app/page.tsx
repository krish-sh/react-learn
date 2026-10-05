import { MyButton } from "./components/button";
import {User} from "./components/user"

export default function Home() {
  return (
    <div>
      <div>
        <User/>
      </div>
      <h1>Hello</h1>
      <MyButton />
    </div>
  );
}
