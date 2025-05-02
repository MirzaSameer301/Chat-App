import NoChatSelected from "../components/NoChatSelected";
import Sidebar from "../components/SideBar";
import ChatContainer from "../components/ChatContainer";
import { useChatStore } from "../store/useChatStore.js";

const Home = () => {
  const { selectedUser } = useChatStore();
  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg zshadow-cl w-full max-w-6xl h-[calc(105vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />
            {selectedUser ? <ChatContainer /> : <NoChatSelected />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
