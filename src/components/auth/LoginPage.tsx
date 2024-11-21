import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">EntrepreneurHub Portal</h1>
          <p className="text-indigo-200 mt-2">Access your entrepreneurial journey</p>
        </div>
        <LoginForm />
        <p className="text-center mt-8 text-sm text-indigo-200">
          By signing in, you agree to our{' '}
          <a href="#" className="underline hover:text-white">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="underline hover:text-white">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}