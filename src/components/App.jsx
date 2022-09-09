import { useEffect, useRef, useState } from "react";
import UsersList from "./UsersList";
import Header from "./Header";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
function App() {
  const [ref, setRef] = useState();
  const closeMenu = useRef();

  useEffect(() => {
    setRef(closeMenu.current);
  });
  //
  return (
    <div>
      <div className="container" id="main" ref={closeMenu}>
        <Header close={ref} />
        <AddModal />
        <EditModal />
        <div className="row border rounded">
          <UsersList />
        </div>
      </div>
    </div>
  );
}

export default App;
