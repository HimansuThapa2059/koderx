import EditorPanel from "@/components/EditorPanel";
import Header from "@/components/header/Header";
import OutputPanel from "@/components/OutputPanel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto sm:p-2">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EditorPanel />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}
