import NavItem from './libs/NavItem';

const Navigation = () => (
  <nav className="flex space-x-4 bg-gray-800">
    <NavItem href="/characters">
      <a>Characters</a>
    </NavItem>
    <NavItem href="/episodes">
      <a>Episodes</a>
    </NavItem>
  </nav>
);

export default Navigation;
