import { useEffect, useState } from "react";

export function MainUseState() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Vc clicou ${count}`;
  });

  return (
    <div>
      <h1>ola</h1>
      <p>Vc clicou {count} vezes</p>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
