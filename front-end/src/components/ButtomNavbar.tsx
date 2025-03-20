export default function BottomNavbar() {
    return (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-neutral-900 text-white flex justify-around items-center py-3 rounded-md shadow-lg">
        <NavItem label="Home" />
        <NavItem label="Treinos" />
        <NavItem label="Perfil" />
        <NavItem label="Criar Treino" />
      </div>
    );
  }
  
  function NavItem({ label }) {
    return (
      <button className="flex flex-col items-center text-sm px-4 py-2 hover:bg-neutral-800 rounded-sm">
        <span>{label}</span>
      </button>
    );
  }
  