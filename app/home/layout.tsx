import BottomTab from "@/components/navigation/BottomTab";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">{children}</div>
      <BottomTab />
    </div>
  );
}   