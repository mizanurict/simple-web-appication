import Form from "./Form";
import Navbar from "./Navbar";
import Profile from "./Profile";
import UpdateForm from "./UpdateForm";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Profile></Profile>
            <Form></Form>
            <UpdateForm></UpdateForm>
        </div>
    );
};

export default Home;