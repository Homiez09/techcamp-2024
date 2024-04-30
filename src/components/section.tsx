'use client'

export default function Section({
    children,
    id,
    className,
  }: Readonly<{
    children: React.ReactNode;
    id: string;
    className?: string;
  }>) {
    return (
        <section id={id} className={`py-20 px-5 items-center text-white ${className}`}>
            {children}
        </section>
    )
}