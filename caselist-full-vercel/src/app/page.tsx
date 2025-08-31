import Link from 'next/link';
export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Caselist</h1>
      <p className="text-muted">Client ↔ Lawyer portal starter</p>
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <Link href="/client/dashboard" className="p-4 border rounded-xl">Client Dashboard</Link>
        <Link href="/lawyer/dashboard" className="p-4 border rounded-xl">Lawyer Dashboard</Link>
        <Link href="/admin/dashboard" className="p-4 border rounded-xl">Admin Dashboard</Link>
      </div>
    </div>
  );
}
