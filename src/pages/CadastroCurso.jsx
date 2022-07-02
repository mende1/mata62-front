import FormCurso from '../components/FormCurso'
import Dashboard from '../components/Dashboard'

function CadastroCurso() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Dashboard />
                <FormCurso />
            </div>
        </div>
    )
}

export default CadastroCurso