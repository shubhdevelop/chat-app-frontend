type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
  className?: string;
};

export function TypographyH2({ children, className }: Props) {
  return (
    <h2
      className={`my-auto scroll-m-20  text-3xl font-semibold tracking-tight first:mt-[15px] ${className}`}
    >
      {children}
    </h2>
  );
}

export function TypographyP({ children, className }: Props) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-4 ${className}`}>
      {children}
    </p>
  );
}
