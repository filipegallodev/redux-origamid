import store from "./store/configureStore.js";
import {
  incrementarTempo,
  reduzirTempo,
  modificarEmail,
} from "./store/aluno.js";
import { completarAula, completarCurso, resetarCurso } from "./store/aulas.js";

function render() {
  const { aluno, aulas } = store.getState();
  const aulasElement = document.getElementById("aulas");
  const alunoElement = document.getElementById("aluno");

  alunoElement.innerText = `${aluno.nome} : ${aluno.email} : ${aluno.diasRestantes}`;
  aulasElement.innerText = aulas.filter(
    (aula) => aula.completa === true
  ).length;
}
render();

store.subscribe(render);

store.dispatch(incrementarTempo());
store.dispatch(incrementarTempo());
store.dispatch(reduzirTempo());
store.dispatch(modificarEmail("gallo@origamid.com"));
store.dispatch(completarAula(2));
store.dispatch(completarCurso());
store.dispatch(resetarCurso());
