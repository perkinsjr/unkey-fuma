import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Steps, Step } from "fumadocs-ui/components/steps";
import { Callout } from "fumadocs-ui/components/callout";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Tab,
    Tabs,
    Steps,
    Step,
    ...defaultComponents,
    Callout,
    ...components,
  };
}
