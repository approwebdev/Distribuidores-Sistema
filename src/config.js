// Configurações da aplicação e variáveis de ambiente
const config = {
  // Supabase
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL || 'https://xtdozoxsbvbitspkuaek.supabase.co',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0ZG96b3hzYnZiaXRzcGt1YWVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzOTAzMjYsImV4cCI6MjA2MDk2NjMyNn0.lGpdOSVVmrMSwJUIJgdikgEN2a0NKL1Pu4F43TDv5-I',
  
  // Google Maps API
  googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyBCuU-wlEg9F4IWhAOyz0iW573ftQzVf6M',
  googleMapsSecret: import.meta.env.VITE_GOOGLE_MAPS_SECRET || 'QglazN17NCfbJJkWK5oRI6Qtm7s=',
  
  // Configurações de distância
  defaultDistance: '50km',
  distanceOptions: ['10km', '25km', '50km', '100km', 'todos'],
  
  // Configurações de API
  isProduction: import.meta.env.PROD
};

// Logs para debug
if (!import.meta.env.PROD) {
  console.log("Configurações carregadas:", {
    supabaseUrl: config.supabaseUrl,
    googleMapsApiKey: config.googleMapsApiKey ? "Definida" : "Não definida"
  });
}

export default config; 