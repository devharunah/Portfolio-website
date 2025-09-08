import { TextReveal } from '@/components/ui/text-reveal';
import { cn } from '@/lib/utils';
import { Geist } from 'next/font/google';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  weight: '400',
});

export default function TextRevealLetters() {
  return (
    <TextReveal
      className={cn(
        `bg-white from-foreground to-primary via-white bg-clip-text text-6xl max-w-md tracking-tight font-bold text-transparent dark:bg-gradient-to-b`,
        geist.className,
      )}
      from="bottom"
      split="letter"
    >
The Art of Code, 
The Science of Building
    </TextReveal>
  );
}
