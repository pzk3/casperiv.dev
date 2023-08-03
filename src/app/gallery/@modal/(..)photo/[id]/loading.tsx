import { Modal } from "~/components/modal/modal";

export const revalidate = 600; // 10 minutes

export default async function ImageModalPage() {
  return (
    <Modal open>
      <div className="w-64 h-9 shadow-sm bg-accent/30 animate-pulse rounded-md mb-3" />
      <div className="min-w-[900px] h-[500px] shadow-sm bg-accent/30 animate-pulse rounded-md" />
    </Modal>
  );
}
