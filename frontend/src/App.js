import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import Form from "./components/Form.js"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "./components/Grid.js";

const Container = styled.div`
 width: 100%;
 max-width: 800px;
 margin-top: 20px;]
 display: flex;
 flex-direction: cloumn;
 align-items: center;
 gap: 10px;
`;

const Title = styled.h2``;


function App() {

    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    const getUsers = async () => {
        try {
            const res = await axios.get("http://localhost:8800");
            setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
        } catch (error) {
            toast.error(error);
        }
    }

    useEffect(() => {
        getUsers();
    }, [setUsers]);

    return (
        <>
            <Container>
                <Title>Usuários</Title>
                <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
                <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
            </Container>
            <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
            <GlobalStyle />
        </>
        
    );
}

export default App;