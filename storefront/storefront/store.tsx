import { default as Button } from '@mui/material/Button';

export default function StoreModule() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100">
      <h1 className="text-6xl">Storefront</h1>
      <p className="text-xl mt-4">Welcome to the Storefront!</p>
      <Button variant="contained">Sample Button</Button>
    </section>
  );
}
