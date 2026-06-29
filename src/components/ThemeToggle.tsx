'use client';

import { useEffect, useRef, useState } from 'react';
import { Sun, Moon, Monitor, Check } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import type { Theme } from '@/lib/theme';

const options: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
];

type ThemeToggleProps = {
  variant?: 'navbar' | 'footer';
};

export default function ThemeToggle({ variant = 'navbar' }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const current = options.find((o) => o.value === theme) ?? options[2];
  const Icon = current.icon;

  const triggerClass =
    variant === 'footer'
      ? 'flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border-default)] bg-[var(--card-bg)] text-[var(--foreground)] hover:border-cyan-500/40 hover:text-cyan-500 transition-colors text-sm font-medium'
      : 'theme-toggle-btn flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-semibold shadow-sm transition-all';

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={triggerClass}
        aria-label={`Theme: ${current.label}. Click to change.`}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <Icon className="w-4 h-4 shrink-0" />
        <span className="whitespace-nowrap">{current.label}</span>
      </button>
      {open && (
        <div
          role="listbox"
          aria-label="Theme options"
          className="absolute right-0 top-full mt-2 py-1.5 w-40 rounded-xl border border-[var(--border-default)] bg-[var(--background-elevated)] shadow-2xl z-[60]"
        >
          {options.map(({ value, label, icon: OptionIcon }) => (
            <button
              key={value}
              type="button"
              role="option"
              aria-selected={theme === value}
              onClick={() => {
                setTheme(value);
                setOpen(false);
              }}
              className={`flex items-center justify-between gap-2 w-full px-3 py-2.5 text-sm transition-colors ${
                theme === value
                  ? 'text-cyan-500 bg-cyan-500/10 font-semibold'
                  : 'text-[var(--foreground)] hover:text-cyan-500 hover:bg-cyan-500/5'
              }`}
            >
              <span className="flex items-center gap-2">
                <OptionIcon className="w-4 h-4" />
                {label}
              </span>
              {theme === value && <Check className="w-4 h-4 shrink-0" />}
            </button>
          ))}
          <div className="mx-3 mt-1.5 pt-1.5 border-t border-[var(--border-subtle)] text-[10px] text-[var(--foreground-muted)] px-1 pb-0.5">
            Active: {resolvedTheme === 'dark' ? 'Dark' : 'Light'}
          </div>
        </div>
      )}
    </div>
  );
}
