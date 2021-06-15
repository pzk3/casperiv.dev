import { LinkIcon } from "./icons/Link";

interface Props {
  slug: string;
}

const HeaderLink = ({ slug }: Props) => {
  return (
    <a href={`#${slug}`}>
      <LinkIcon />
    </a>
  );
};

export default HeaderLink;
