import 'bootstrap-icons/font/bootstrap-icons.css';
import dados from './dados.json';

export default function Home() {
    return (
        <>
            <div className="flex bg-violet-50 min-h-screen">

                <div className="w-67 bg-slate-900 text-white flex-col p-4">

                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold ml-3">
                            L
                        </div>

                        <h1 className="text-lg font-bold text-white">
                            Leon
                        </h1>
                    </div>


                    <div className="flex items-center gap-3 text-white m-5 mt-10 text-[20px]">
                        <i className="bi bi-house"></i>
                        <a href="">Visão geral</a>
                    </div>


                    <div className="flex items-center gap-3 text-white m-5 text-[20px]">
                        <i className="bi bi-card-checklist"></i>
                        <a href="">Ordens de serviço</a>
                    </div>


                    <div className="flex items-center gap-3 text-white m-5 text-[20px]">
                        <i className="bi bi-gear"></i>
                        <a href="">Equipamentos</a>
                    </div>


                    <div className="flex items-center gap-3 text-white m-5 text-[20px]">
                        <i className="bi bi-people"></i>
                        <a href="">Técnicos</a>
                    </div>

                </div>


                <div className="flex-1 flex flex-col">

                    <header className="h-[70px] bg-white border-b border-gray-200 px-6">
                        <nav className="h-full flex items-center justify-between">

                            <div>
                                <i className="bi bi-filter-left text-[30px] text-gray-700 cursor-pointer"></i>
                            </div>

                            <div className="flex items-center gap-5">

                                <i className="bi bi-bell text-[21px] text-gray-600 cursor-pointer"></i>

                                <div className="flex items-center gap-3">

                                    <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold">
                                        L
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-gray-800">
                                            Leonardo Pereira
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </nav>
                    </header>


                    <div className="flex justify-between items-center mr-20">

                        <div className="text-black font-bold text-3xl ml-20 mt-10">
                            Olá Leonardo
                        </div>

                        <button className="h-10 w-40 bg-slate-900 mt-11 rounded text-white">
                            + Nova ordem
                        </button>

                    </div>


                    <div className="text-black text-2xl ml-20">
                        Veja o que precisa de atenção hoje
                    </div>


                    <div className="flex flex-wrap gap-6 justify-center mt-12 px-10">

                        <div className="flex h-25 w-90 bg-white rounded-lg shadow-md p-4">

                            <i className="bi bi-card-list text-[40px] mt-2 ms-5 text-blue-500"></i>

                            <span className="text-2xl p-1 text-blue-900 font-semibold mt-4 ml-3">
                                {
                                    dados.ordensServico.filter(
                                        (ordem) => ordem.status === "aberta"
                                    ).length
                                }
                            </span>

                            <div className="text-black font-bold text-[15px] mt-7 ms-4">
                                Ordens abertas
                            </div>

                        </div>


                        <div className="flex h-25 w-90 bg-white rounded-lg shadow-md p-4">

                            <i className="bi bi-exclamation-circle text-[40px] mt-2 ms-5 text-red-400"></i>

                            <span className="text-2xl p-1 text-red-900 font-semibold mt-4 ml-3">
                                {
                                    dados.ordensServico.filter(
                                        (ordem) => ordem.status === "vencida"
                                    ).length
                                }
                            </span>

                            <div className="text-black font-bold text-[15px] mt-7 ms-4">
                                Vencidas
                            </div>

                        </div>


                        <div className="flex h-25 w-90 bg-white rounded-lg shadow-md p-4">

                            <i className="bi bi-clipboard-check text-[40px] mt-2 ms-5 text-yellow-300"></i>

                            <span className="text-2xl p-1 text-yellow-400 font-semibold mt-4 ml-3">
                                {
                                    dados.ordensServico.filter(
                                        (ordem) => ordem.status === "parado"
                                    ).length
                                }
                            </span>

                            <div className="text-black font-bold text-[15px] mt-7 ms-4">
                                Equipamentos parados
                            </div>

                        </div>


                        <div className="flex h-25 w-90 bg-white rounded-lg shadow-md p-4">

                            <i className="bi bi-check2-circle text-[40px] mt-2 ms-5 text-green-300"></i>

                            <span className="text-2xl p-1 text-green-400 font-semibold mt-4 ml-3">
                                {
                                    dados.ordensServico.filter(
                                        (ordem) => ordem.status === "concluida"
                                    ).length
                                }
                            </span>

                            <div className="text-black font-bold text-[15px] mt-7 ms-4">
                                Equipamentos concluídos
                            </div>

                        </div>

                    </div>


                    <div className="border border-cinza mt-10 p-10">

                        <h1 className="text-black">
                            Ordens que exigem atenção
                        </h1>


                        <div className="flex gap-4 mt-6">

                            <input
                                placeholder="Buscar ordem, equipamento ou técnico"
                                className="border border-purple-800 p-2 w-90 rounded-lg text-black"
                            />

                            <select
                                name=""
                                id=""
                                className="p-3 border border-purple-800 rounded-lg text-black"
                            >
                                <option value="" disabled>
                                    Todos os status
                                </option>

                                <option value="vencida">
                                    Vencida
                                </option>

                                <option value="em_andamento">
                                    Em andamento
                                </option>

                                <option value="aberta">
                                    Aberta
                                </option>

                                <option value="planejada">
                                    Planejada
                                </option>

                                <option value="concluida">
                                    Concluída
                                </option>
                            </select>


                            <select
                                name=""
                                id=""
                                className="p-3 border border-purple-800 rounded-lg text-black"
                            >
                                <option value="" disabled>
                                    Todos os status
                                </option>

                                <option value="urgente">
                                    Urgente
                                </option>

                                <option value="alta">
                                    Alta
                                </option>

                                <option value="preventiva">
                                    Preventiva
                                </option>

                                <option value="media">
                                    Media
                                </option>
                            </select>

                        </div>


                        <div className="mt-10">

                            <div className="mt-10">

                                <table className="w-full border-collapse overflow-hidden rounded-xl shadow-sm">

                                    <thead>

                                        <tr className="bg-purple-800">

                                            <th className="p-3">
                                                <input
                                                    type="checkbox"
                                                    className="w-5 h-5"
                                                />
                                            </th>

                                            <th className="p-3 text-left">
                                                OS
                                            </th>

                                            <th className="p-3 text-left">
                                                Descrição
                                            </th>

                                            <th className="p-3 text-left">
                                                Equipamento
                                            </th>

                                            <th className="p-3 text-left">
                                                Prioridade
                                            </th>

                                            <th className="p-3 text-left">
                                                Técnico
                                            </th>

                                            <th className="p-3 text-left">
                                                Vencimento
                                            </th>

                                            <th className="p-3 text-left">
                                                Status
                                            </th>

                                        </tr>

                                    </thead>


                                    <tbody>

                                        {dados.ordensServico.map((ordem) => {

                                            const equipamento = dados.equipamentos.find(
                                                (equipamento) =>
                                                    equipamento.id === ordem.equipamentoId
                                            );

                                            return (

                                                <tr
                                                    key={ordem.id}
                                                    className="hover:bg-gray-50"
                                                >

                                                    <td className="p-3 text-center">
                                                        <input
                                                            type="checkbox"
                                                            className="w-5 h-5"
                                                        />
                                                    </td>


                                                    <td className="p-3 text-black">
                                                        {ordem.codigo}
                                                    </td>


                                                    <td className="p-3 text-black">
                                                        {ordem.descricao}
                                                    </td>


                                                    <td className="p-3">

                                                        <div>

                                                            <strong className="text-black">
                                                                {equipamento?.codigo}
                                                            </strong>

                                                            <p className="text-sm text-black">
                                                                {equipamento?.nome}
                                                            </p>

                                                        </div>

                                                    </td>


                                                    <td className="p-3 capitalize text-black">
                                                        {ordem.prioridade}
                                                    </td>


                                                    <td className="p-3 text-black">
                                                        {ordem.tecnico}
                                                    </td>


                                                    <td className="p-3 text-black">
                                                        {ordem.vencimento}
                                                    </td>


                                                    <td className="p-3 capitalize text-black">
                                                        {ordem.status}
                                                    </td>

                                                </tr>

                                            );

                                        })}

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}