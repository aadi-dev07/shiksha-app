
import { SignUp as ClerkSignUp } from "@clerk/clerk-react";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple to-blue-dark">
      <div className="w-full max-w-md p-8">
        <ClerkSignUp 
          appearance={{
            elements: {
              formButtonPrimary: 'bg-purple hover:bg-purple/90 text-white',
              card: 'bg-white shadow-xl rounded-xl'
            }
          }}
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          afterSignUpUrl="/dashboard"
        />
      </div>
    </div>
  );
};

export default SignUp;
