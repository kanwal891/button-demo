import Button from "@/components/Button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Button Component Test</h1>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Primary Button</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">CREATE NEW COIN</Button>
              <Button variant="primary" disabled>DISABLED</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Secondary Button</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary">EDIT PROFILE</Button>
              <Button variant="secondary" disabled>DISABLED</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Button Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" className="h-8 px-4 text-sm">
                SMALL
              </Button>
              <Button variant="primary">
                DEFAULT
              </Button>
              <Button variant="primary" className="h-12 px-8 text-lg">
                LARGE
              </Button>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-10 text-center text-gray-500 text-sm">
        Button Component Test Assignment
      </footer>
    </div>
  );
};

export default Index;
