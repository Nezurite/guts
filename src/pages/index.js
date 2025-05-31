import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

export default function Home() {
  return (
    <div className="app flex">
      <Sidebar />
      <Chat />
    </div>
  );
}
