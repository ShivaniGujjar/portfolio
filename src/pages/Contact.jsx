import React, { useState, useEffect } from 'react';
import { HiOutlineEnvelope, HiOutlineCheck, HiOutlineArrowUpRight } from 'react-icons/hi2';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

// Get a free key at https://web3forms.com (enter your email, they send you the key).
// Put it in a .env file as VITE_WEB3FORMS_KEY=xxxxxxxx  (the key is safe to expose in frontend code).
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const topics = [
  {
    id: 'portfolio',
    label: 'A portfolio website',
    placeholder:
      "e.g. I'm a video editor and want a site that shows my reels. I like how … looks.",
  },
  {
    id: 'job',
    label: 'A full-time role',
    placeholder: "e.g. We're hiring a fullstack developer. Here's the role and the stack…",
  },
  {
    id: 'other',
    label: 'Something else',
    placeholder: 'Say hi, ask a question, or share an idea…',
  },
];

const inputClass =
  'w-full bg-black/[0.03] dark:bg-black/20 border border-black/[0.09] dark:border-white/[0.08] focus:border-[#00C2FF]/50 rounded-xl px-4 py-3 text-[13px] text-black dark:text-white placeholder-black/25 dark:placeholder-white/25 outline-none transition-colors disabled:opacity-60';
const labelClass = 'text-xs text-black/50 dark:text-white/50 block mb-2';
const socialClass =
  'p-3 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.09] dark:border-white/[0.08] rounded-full text-black/45 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-colors duration-200';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'shivanigujjar.dev@gmail.com';

  const [name, setName] = useState('');
  const [replyTo, setReplyTo] = useState('');
  const [message, setMessage] = useState('');
  const [topic, setTopic] = useState(null);
  const [pkg, setPkg] = useState('');
  const [botcheck, setBotcheck] = useState(false); // hidden spam trap
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // "Choose Starter / Standard / Premium" on the Freelance page lands here pre-selected.
  useEffect(() => {
    const onSelect = (e) => {
      setTopic('portfolio');
      setPkg(e.detail);
      setStatus((s) => (s === 'sent' ? 'idle' : s));
    };
    window.addEventListener('select-package', onSelect);
    return () => window.removeEventListener('select-package', onSelect);
  }, []);

  const currentTopic = topics.find((t) => t.id === topic);
  const placeholder =
    currentTopic?.placeholder || 'Tell me a little about what you have in mind…';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const topicLabel = currentTopic?.label || 'General';
    const subject = `New message from ${name} · ${topicLabel}${pkg ? ` (${pkg})` : ''}`;

    try {
      if (!ACCESS_KEY) throw new Error('Missing VITE_WEB3FORMS_KEY');
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject,
          from_name: 'Portfolio website',
          name,
          email: replyTo,
          topic: topicLabel,
          package: pkg || 'n/a',
          message,
          botcheck,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Send failed');
      setStatus('sent');
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
    }
  };

  const reset = () => {
    setName('');
    setReplyTo('');
    setMessage('');
    setTopic(null);
    setPkg('');
    setStatus('idle');
  };

  const sending = status === 'sending';

  return (
    <section id="contact" className="w-full relative bg-[#FAFAF9] dark:bg-[#050507] py-20 sm:py-28 border-t border-black/[0.06] dark:border-white/[0.05] overflow-hidden">

      {/* One soft glow, same restraint as the hero — not doubled, not centered */}
      <div className="absolute bottom-0 right-0 w-[36vw] h-[36vw] bg-[#FF6C37]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 relative z-10">

        {/* Header — heading only */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-black/90 dark:text-white/95">
            Let's <span className="text-[#00C2FF] dark:text-[#00C2FF]">talk</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT: statement + direct contact */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-black/90 dark:text-white/95 tracking-tight leading-snug mb-4">
                Got a project in mind, or looking for a <span className="text-[#FF6C37] dark:text-[#FF6C37]">fullstack engineer</span>?
              </h3>

              <p className="text-[13px] sm:text-sm text-black/45 dark:text-white/50 leading-relaxed mb-8">
                I'm open to full-time roles and freelance work right now. Tell me
                what you're working on. I read every message myself and reply
                as soon as I can.
              </p>

              

              {/* Social — rounded-full circles, consistent with the repo-link icon on project cards */}
              <div>
                <span className="text-xs text-black/40 dark:text-white/40 mb-3 block">
                  Elsewhere
                </span>
                <div className="flex items-center gap-2.5">
                  <a href="https://github.com/ShivaniGujjar" target="_blank" rel="noreferrer" className={socialClass} title="GitHub">
                    <FiGithub size={17} />
                  </a>
                  <a href="https://www.linkedin.com/in/shivani-gujjar-b20bb9228/?isSelfProfile=true" target="_blank" rel="noreferrer" className={socialClass} title="LinkedIn">
                    <FiLinkedin size={17} />
                  </a>
                  <a href="https://x.com/Inavish_Buttar" target="_blank" rel="noreferrer" className={socialClass} title="Twitter">
                    <FiTwitter size={17} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className={socialClass} title="Instagram">
                    <FiInstagram size={17} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: form — same glass panel as About/Capabilities cards */}
          <div className="lg:col-span-7 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.09] dark:border-white/[0.08] backdrop-blur-md rounded-2xl p-6 sm:p-8 transition-colors duration-300 hover:border-black/[0.15] dark:hover:border-white/[0.15]">

            {status === 'sent' ? (
              <div className="py-8 sm:py-12 text-center" role="status" aria-live="polite">
                <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF]">
                  <HiOutlineCheck size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold tracking-tight text-black/90 dark:text-white/95">
                  Thanks{name ? `, ${name.split(' ')[0]}` : ''}. Your message is in.
                </h4>
                <p className="mt-3 mx-auto max-w-sm text-[13px] text-black/50 dark:text-white/50 leading-relaxed">
                  I'll read it and write back to <span className="text-black/80 dark:text-white/80">{replyTo}</span> soon.
                  Check your spam folder if you don't hear from me.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 text-xs text-black/50 dark:text-white/50 hover:text-[#00C2FF] dark:hover:text-[#00C2FF] underline underline-offset-4 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label htmlFor="c-name" className={labelClass}>First, what should I call you?</label>
                  <input
                    id="c-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={sending}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="c-email" className={labelClass}>Where can I reply?</label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={replyTo}
                    onChange={(e) => setReplyTo(e.target.value)}
                    disabled={sending}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <span className={labelClass}>What's this about? <span className="text-black/30 dark:text-white/30">(optional)</span></span>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => {
                      const active = topic === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          aria-pressed={active}
                          disabled={sending}
                          onClick={() => {
                            setTopic(active ? null : t.id);
                            if (t.id !== 'portfolio') setPkg('');
                          }}
                          className={`px-3.5 py-1.5 rounded-full border text-[12px] transition-colors duration-200 cursor-pointer ${
                            active
                              ? 'border-[#00C2FF]/50 bg-[#00C2FF]/10 text-[#00A8DD] dark:text-[#00C2FF]'
                              : 'border-black/[0.09] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.03] text-black/55 dark:text-white/60 hover:border-black/20 dark:hover:border-white/20'
                          }`}
                        >
                          {t.label}
                        </button>
                      );
                    })}
                  </div>

                  {pkg && (
                    <p className="mt-3 flex items-center gap-2 text-[12px] text-black/50 dark:text-white/50">
                      <HiOutlineCheck size={13} className="text-[#00C2FF]" />
                      You picked the <span className="text-black/80 dark:text-white/80">{pkg}</span> package.
                      <button
                        type="button"
                        onClick={() => setPkg('')}
                        className="underline underline-offset-4 hover:text-[#00C2FF] transition-colors cursor-pointer"
                      >
                        Change
                      </button>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="c-message" className={labelClass}>Tell me a bit about it</label>
                  <textarea
                    id="c-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={sending}
                    placeholder={placeholder}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Spam trap: invisible to people, bots tick it */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  checked={botcheck}
                  onChange={(e) => setBotcheck(e.target.checked)}
                />

                {status === 'error' && (
                  <p
                    className="text-[12px] leading-relaxed text-[#FF6C37] bg-[#FF6C37]/[0.07] border border-[#FF6C37]/20 rounded-xl px-4 py-3"
                    role="alert"
                  >
                    That didn't go through, sorry. Your message is still here, so you can try
                    again, or email me at{' '}
                    <button type="button" onClick={handleCopy} className="underline underline-offset-4 cursor-pointer">
                      {copied ? 'copied!' : email}
                    </button>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-black text-white dark:bg-white dark:text-black hover:bg-[#00C2FF] hover:text-black text-sm font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer group disabled:opacity-70 disabled:cursor-wait"
                >
                  <span>{sending ? 'Sending…' : 'Send message'}</span>
                  {!sending && (
                    <HiOutlineArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;