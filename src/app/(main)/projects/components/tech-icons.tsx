import {
  SiTypescript,
  SiReact,
  SiExpo,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiPrisma,
  SiVuedotjs,
  SiMdx,
  SiJavascript
} from 'react-icons/si'

export const techIcons = {
  javascript: () => (
    <SiJavascript className="hover:text-[#F7DF1E]" title="Javascript" />
  ),
  typescript: () => (
    <SiTypescript className="hover:text-[#358EF1]" title="Typescript" />
  ),
  'react-native': () => (
    <SiReact className="hover:text-[#61DBFB]" title="React Native" />
  ),
  expo: () => <SiExpo title="Expo" />,
  reactjs: () => <SiReact className="hover:text-[#61DBFB]" title="React.js" />,
  nextjs: () => <SiNextdotjs title="Next.js" />,
  tailwindcss: () => (
    <SiTailwindcss className="hover:text-[#38BDF8]" title="Tailwind CSS" />
  ),
  vite: () => <SiVite className="hover:text-[#FFC119]" title="Vite" />,
  nodejs: () => (
    <SiNodedotjs className="hover:text-[#66CC33]" title="Node.js" />
  ),
  prisma: () => <SiPrisma className="hover:text-[#4C51BF]" title="Prisma" />,
  vue: () => <SiVuedotjs className="hover:text-[#4FC08D]" title="Vue.js" />,
  mdx: () => <SiMdx className="hover:text-[#1B1F24]" title="MDX" />
}
