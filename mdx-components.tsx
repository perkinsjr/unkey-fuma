import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Callout } from "fumadocs-ui/components/callout";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Tab,
    Tabs,
    ...defaultComponents,
    img: (props) => <ImageZoom {...props} />,
    Callout,
    ...components,
  };
}
