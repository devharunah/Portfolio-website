/**
 * The H monogram: a heavy H inside a square frame, drawn as plain geometry so it
 * stays crisp at any size and follows the theme via currentColor.
 */
export function Logo({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden fill="none">
      <rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="2" />
      <path d="M9 7h4.5v6.75h5V7H23v18h-4.5v-7.25h-5V25H9z" fill="currentColor" />
    </svg>
  );
}
