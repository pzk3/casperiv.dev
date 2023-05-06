interface GalleryLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function GalleryLayout(props: GalleryLayoutProps) {
  return (
    <>
      {props.modal}
      {props.children}
    </>
  );
}
