import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import emoji from 'remark-emoji';
import wikiMarkdown from './src/wiki-markdown.mjs';
import { unified } from '@astrojs/markdown-remark';

export default defineConfig({
  site: 'https://wiki.hakermany.com',
  trailingSlash: 'always',
  integrations: [starlight({
    title: 'HAKERMANY',
    description: 'A shared field guide to security, engineering and automation.',
    favicon: '/favicon.svg',
    defaultLocale: 'root',
    locales: { root: { label: 'English', lang: 'en' } },
    customCss: ['./src/styles/custom.css'],
    components: { Head: './src/components/Head.astro', SiteTitle: './src/components/SiteTitle.astro' },
    editLink: { baseUrl: 'https://github.com/hakermany-wiki/hakermany-wiki.github.io/edit/main/' },
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/hakermany-wiki/hakermany-wiki.github.io' }],
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
    sidebar: [
      { label: 'Start here', items: [{ label: 'Welcome', slug: '' }, { label: 'Knowledge map', slug: 'about' }] },
      { label: 'Offensive Security', items: [
        { label: 'Overview', slug: 'offensive-security/overview' },
        { label: 'Reconnaissance', slug: 'offensive-security/tactics/reconnaissance' },
        { label: 'Resources', slug: 'offensive-security/resources' },
        { label: 'Domains', slug: 'offensive-security/domains', badge: { text: 'Draft', variant: 'note' } },
        { label: 'Tactics', slug: 'offensive-security/tactics', badge: { text: 'Draft', variant: 'note' } },
      ] },
      { label: 'Defensive Operations', collapsed: true, items: [{ autogenerate: { directory: 'defensive-operations' } }] },
      { label: 'Governance, Risk & Compliance', collapsed: true, items: [{ autogenerate: { directory: 'grc' } }] },
      { label: 'Engineering & Architecture', collapsed: true, items: [{ autogenerate: { directory: 'engineering-architecture' } }] },
      { label: 'Automation', collapsed: true, items: [{ autogenerate: { directory: 'automation' } }] },
      { label: 'Contributing', items: [{ label: 'Edit this wiki', slug: 'contributing' }, { label: 'Legacy Markdown guide', slug: 'markdown-cheatsheet' }] },
    ],
  })],
  markdown: { processor: unified({ remarkPlugins: [emoji, wikiMarkdown] }) },
  redirects: {
    '/home': '/',
    '/offensive-security/tactics/reconnaisance': '/offensive-security/tactics/reconnaissance/',
  },
});
