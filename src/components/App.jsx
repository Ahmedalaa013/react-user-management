import UsersList from "./UsersList";
import Header from "./Header";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
function App() {
  return (
    <div>
      <div className="container">
        <Header />
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
