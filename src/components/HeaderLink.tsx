import LinkIcon from "./icons/Link";

interface Props {
  slug: string;
}

const HeaderLink: React.FC<Props> = ({ slug }) => {
  return (
    <a href={`#${slug}`}>
      <LinkIcon />
    </a>
  );
};

export default HeaderLink;
