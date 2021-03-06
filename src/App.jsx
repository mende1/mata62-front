import "./App.css";
import Login from "./pages/Login";
import CadastroUsuario from "./pages/CadastroUsuario";
import CadastroCurso from "./pages/CadastroCurso";
import CadastroInstituicao from "./pages/CadastroInstituicao";
import Instituicoes from "./pages/Instituicoes";
import Cursos from "./pages/Cursos";
import Usuarios from "./pages/Usuarios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ValidarDiploma from "./pages/ValidarDiploma";
import LogSuperitendente from "./pages/LogSuperitendente";
import Log from "./pages/Log";
import Auditoria from "./pages/Auditoria";
import SolicitarValidacao from "./pages/SolicitarValidacao";
import EditarCurso from "./pages/EditarCurso";
import EditarUsuario from "./pages/EditarUsuario";
import EditarInstituicao from "./pages/EditarInstituicao";
import Dashboard from "./pages/Dashboard";
import { Logout } from "./pages/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/cadastrousuario" element={<CadastroUsuario />} />
        <Route path="/editarusuario/:id" element={<EditarUsuario />} />
        <Route path="/cadastrocurso" element={<CadastroCurso />} />
        <Route path="/editarcurso/:id" element={<EditarCurso />} />
        <Route path="/cadastroinstituicao" element={<CadastroInstituicao />} />
        <Route path="/editarinstituicao/:id" element={<EditarInstituicao />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/instituicoes" element={<Instituicoes />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/validardiploma" element={<ValidarDiploma />} />
        <Route path="/logsuperitendente" element={<LogSuperitendente />} />
        <Route path="/log" element={<Log />} />
        <Route path="/auditoria" element={<Auditoria />} />
        <Route path="/solicitarvalidacao" element={<SolicitarValidacao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
