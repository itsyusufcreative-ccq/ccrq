export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to FitnessPro
        </h1>
        <p className="text-center text-lg mb-8">
          Your fitness journey starts here
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Track Workouts</h2>
            <p>Monitor your exercise routines and progress</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Set Goals</h2>
            <p>Define and achieve your fitness objectives</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Stay Motivated</h2>
            <p>Get insights and stay on track</p>
          </div>
        </div>
      </div>
    </main>
  )
}
