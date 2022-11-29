import { PortableText } from "@portabletext/react";
import { Button } from "components/Button";
import { urlForImage } from "lib/sanity";

const components = {
  types: {
    image: ({ value }) => <img src={urlForImage(value)} />,
  },
  marks: {
    button: ({ text, value }) => {
      const { url } = value;
      return (
        <Button as="a" href={url} style="primary" size="lg">
          {text}
        </Button>
      );
    },
  },
};

const RenderRichText = ({ data }) => {
  return <PortableText value={data} components={components} />;
};

export default RenderRichText;
