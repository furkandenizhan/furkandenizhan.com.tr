import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import {
  ArchLinuxLogo,
  CodepenLogo,
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  RedditLogo,
  StackOverflowLogo,
  TwitterLogo
} from './icons'

type Contact = {
  user: string
  title: () => JSX.Element
  link: () => JSX.Element
}
const contacts: Contact[] = [
  {
    user: 'contact@furkandenizhan.com.tr',
    title: () => (
      <div className="contact-line contact-line-title text-brand-email">
        <span className="rounded bg-brand-email/10 p-1 text-2xl">
          <Envelope />
        </span>
        <span>Email</span>
      </div>
    ),
    link: () => (
      <div className="contact-line">
        <a
          className="inline-flex items-end gap-px hover:underline"
          href="mailto:contact@furkandenizhan.com.tr"
          target="_blank"
          rel="external"
        >
          <span className="leading-none">Send e-mail</span>
          <ArrowUpRight size="1em" className="text-sm" />
        </a>
      </div>
    )
  },
  {
    user: 'furkandenizhan',
    title: () => (
      <div className="contact-line contact-line-title text-brand-github">
        <span className="rounded bg-brand-github/10 p-1">
          <GithubLogo />
        </span>
        <span>Github</span>
      </div>
    ),
    link: () => (
      <div className="contact-line">
        <a
          className="inline-flex items-end gap-px hover:underline"
          href="https://github.com/furkandenizhan/"
          target="_blank"
          rel="external"
        >
          <span className="leading-none">Open profile</span>
          <ArrowUpRight size="1em" className="text-sm" />
        </a>
      </div>
    )
  },
  {
    user: 'furkandenizhan',
    title: () => (
      <div className="contact-line contact-line-title text-brand-linkedin">
        <span className="rounded bg-brand-linkedin/10 p-1 ">
          <LinkedinLogo />
        </span>
        <span>Linkedin</span>
      </div>
    ),
    link: () => (
      <div className="contact-line">
        <a
          className="inline-flex items-end gap-px hover:underline"
          href="https://www.linkedin.com/in/furkandenizhan/"
          target="_blank"
          rel="external"
        >
          <span className="leading-none">Open profile</span>
          <ArrowUpRight size="1em" className="text-sm" />
        </a>
      </div>
    )
  },
  {
    user: 'furkandenizhan_',
    title: () => (
      <div className="contact-line contact-line-title text-brand-twitter">
        <span className="rounded bg-brand-twitter/10 p-1">
          <TwitterLogo />
        </span>
        <span>Twitter</span>
      </div>
    ),
    link: () => (
      <div className="contact-line">
        <a
          className="inline-flex items-end gap-px hover:underline"
          href="https://twitter.com/furkandenizhan"
          target="_blank"
          rel="external"
        >
          <span className="leading-none">See tweets</span>
          <ArrowUpRight size="1em" className="text-sm" />
        </a>
      </div>
    )
  },

]

export function Contact() {
  return (
    <div className="flex justify-between text-lg md:text-2xl">
      <div className="flex-1">{contacts.map(contact => contact.title())}</div>
      <div className="hidden flex-1 text-neutral-500 lg:block">
        {contacts.map(contact => (
          <div key={contact.user} className="contact-line">
            {contact.user}
          </div>
        ))}
      </div>
      <div>{contacts.map(contact => contact.link())}</div>
    </div>
  )
}
