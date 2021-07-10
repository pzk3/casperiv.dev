import { LinkIcon } from "@icons/Link";

interface Props {
  slug: string;
}

export const HeaderLink = ({ slug }: Props) => {
  return (
    <a href={`#${slug}`}>
      <LinkIcon />
    </a>
  );
};
