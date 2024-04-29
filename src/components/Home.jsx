import Form from "./Form";
import Navbar from "./Navbar";
import Table from "./Table";
import UpdateForm from "./UpdateForm";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Table></Table>
            <Form></Form>
            <UpdateForm></UpdateForm>
        </div>
    );
};

export default Home;