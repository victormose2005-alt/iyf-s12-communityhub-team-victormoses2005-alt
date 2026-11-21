export default function Header() {
  return (
    <header style={{ background: '#1a1a2e', color: 'white', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ margin: 0 }}>CommunityHub</h2>
      <nav style={{ display: 'flex', gap: '16px' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Posts</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
      </nav>
      <span>Hi, Toch </span>
    </header>
  );
}
