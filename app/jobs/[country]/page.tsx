type PageProps = {
  params: Promise<{
    country: string;
  }>;
};
export default async function CountryJobsPage({ params }: PageProps) {
  const { country } = await params;
  const countryName = country
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Jobs4all
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Jobs in {countryName}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Explore available job opportunities from companies hiring in{" "}
            {countryName}.
          </p>
        </div>
      </div>
    </main>
  );
}
