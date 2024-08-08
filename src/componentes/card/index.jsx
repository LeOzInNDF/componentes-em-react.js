import estilos from './Card.module.css'

export default function Card() {
  return(
    <div className={estilos.container_card}>
    <h1>Componentes</h1>
          <p>Facilita em manter partes menores funcionando corretamente.</p>
          <p>Você pode reutilizá-lo, ou seja, menos código para se escrever.</p>
        </div>
  );
};