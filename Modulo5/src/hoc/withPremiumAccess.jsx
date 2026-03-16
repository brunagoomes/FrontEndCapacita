export function withPremiumAccess(WrappedComponent) {
  return function PremiumComponent(props) {
    const isPremium = false; // Mude para true para liberar as estatísticas

    if (!isPremium) {
      return (
        <div style={{ padding: '40px', textAlign: 'center', border: '2px dashed orange', borderRadius: '15px', marginTop: '20px' }}>
          <h2>Conteúdo Premium 👑</h2>
          <p>As estatísticas detalhadas estão bloqueadas para sua conta gratuita.</p>
          <button style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '5px', border: 'none', backgroundColor: 'orange', color: 'white' }}>
            Fazer Upgrade Agora
          </button>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}