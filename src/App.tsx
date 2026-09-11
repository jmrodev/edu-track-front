import { useEffect, useState } from 'react';
import { fetchApi, HealthResponse } from './services/api';
import './App.css';

export function App() {
  const [backendStatus, setBackendStatus] = useState<string>('Conectando al servidor...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchApi<HealthResponse>('/health')
      .then((data) => setBackendStatus(data.message))
      .catch((err: Error) => setError(err.message));
  }, []);

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#1a365d', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
          Bienvenidos a EduTrack — ISFDyT 166
        </h1>
        <h2 style={{ fontSize: '1.25rem', color: '#4a5568', fontWeight: 'normal' }}>
          Escuela Secundaria / Escuela Normal (Tandil)
        </h2>
        <p style={{ fontSize: '1rem', color: '#2b6cb0', marginTop: '0.5rem', fontWeight: 'bold' }}>
          Equipo TECDA 3º
        </p>
      </header>

      <section style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f7fafc' }}>
        <h3 style={{ marginTop: 0, color: '#2d3748' }}>Estado del Sistema</h3>
        {error ? (
          <p style={{ color: '#e53e3e', fontWeight: 'bold' }}>
            ❌ Error de conexión: {error}
          </p>
        ) : (
          <p style={{ color: '#38a169', fontWeight: 'bold' }}>
            ✅ Servidor backend: {backendStatus}
          </p>
        )}
      </section>
    </main>
  );
}

export default App;