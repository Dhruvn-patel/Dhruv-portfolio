const SectionTitle = ({ children }: Readonly<{ children: string }>) => {
  return (
    <p className="text-center mx-auto text-2xl/6 sm:text-3xl/6 md:text-4xl/6 font-bold px-4">
      {children}
    </p>
  );
};

export default SectionTitle;
