import { useState } from 'react';

function Contador() {
  const [contagem, setContagem] = useState(0);

  return (
    <div>
      <p>Contador: {contagem}</p>
      <button onClick={() => setContagem(contagem + 1)}>
        Incrementar
      </button>
    </div>
  );
}
