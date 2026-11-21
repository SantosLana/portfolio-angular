import { useState, useEffect } from 'react';
import API from './api.js';

function Catalogo() {
    const [listaTecnologias, atualizarLista] = useState([]);

    useEffect(() => {
        const carregarDados = async () => {
            try {
                const resultado = await fetch(`${API}/api/tecnologias`);
                const tecnologiasRecebidas = await resultado.json();

                atualizarLista(tecnologiasRecebidas);
            } catch (erro) {
                console.error('Não foi possível carregar as tecnologias:', erro);
            }
        };

        carregarDados();
    }, []);

    return (
        <section className="catalogo">
            <h2>Tecnologias disponíveis</h2>

            <ul>
                {listaTecnologias.map((tecnologia) => (
                    <li key={tecnologia.id}>
                        <strong>{tecnologia.nome}</strong>
                        <span> - {tecnologia.categoria}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Catalogo;
