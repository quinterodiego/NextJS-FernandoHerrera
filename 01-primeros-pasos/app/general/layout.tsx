export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <h2>Root Layout</h2>
    {children}
  </div>;
}
