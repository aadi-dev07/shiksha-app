
import { SignIn as ClerkSignIn } from "@clerk/clerk-react";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple to-blue-dark">
      <div className="w-full max-w-md p-8">
        <ClerkSignIn 
          appearance={{
            elements: {
              formButtonPrimary: 'bg-purple hover:bg-purple/90 text-white',
              card: 'bg-white shadow-xl rounded-xl'
            }
          }}
          redirectUrl="/dashboard"
        />
      </div>
    </div>
  );
};

export default SignIn;
