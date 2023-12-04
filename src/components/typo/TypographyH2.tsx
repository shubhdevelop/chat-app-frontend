type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

export function TypographyH2({ children }: Props) {
  return (
    <h2 className="my-auto scroll-m-20  text-3xl font-semibold tracking-tight first:mt-[15px]">
      {children}
    </h2>
  );
}
