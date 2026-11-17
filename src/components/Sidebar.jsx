export default function Sidebar() {
  return (
    <aside style={{ width: '200px', background: '#f0f0f0', padding: '16px', minHeight: '400px' }}>
      <h3>Menu</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ padding: '8px 0' }}>🏠 Home</li>
        <li style={{ padding: '8px 0' }}>📝 My Posts</li>
        <li style={{ padding: '8px 0' }}>❤️ Liked</li>
        <li style={{ padding: '8px 0' }}>⚙️ Settings</li>
      </ul>
      <hr />
      <p><b>Team Leader:</b><br />Toch Omot</p>
      <p><b>Members:</b><br />Member 1: Posts<br />Member 3: CreatePost</p>
    </aside>
  );
}
