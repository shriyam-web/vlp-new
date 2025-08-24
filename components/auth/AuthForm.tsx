'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would typically authenticate with your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      
      toast({
        title: 'Login Successful!',
        description: 'Welcome back to VLP Technologies.',
      });
    } catch (error) {
      toast({
        title: 'Login Failed',
        description: 'Please check your credentials and try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: 'Password Mismatch',
        description: 'Passwords do not match. Please try again.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      // Here you would typically create account with your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      
      toast({
        title: 'Account Created!',
        description: 'Welcome to VLP Technologies. Please check your email for verification.',
      });
    } catch (error) {
      toast({
        title: 'Signup Failed',
        description: 'Failed to create account. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pt-20 lg:pt-24 section-padding bg-gradient-to-br from-blue-900 via-gray-900 to-black min-h-screen flex items-center">
      <div className="container-custom">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome to <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">VLP Technologies</span>
            </h1>
            <p className="text-gray-300">
              Access your client portal to manage projects and communicate with our team.
            </p>
          </div>

          <Card className="bg-white/95 backdrop-blur-md shadow-2xl">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <CardHeader>
                  <CardTitle>Login to Your Account</CardTitle>
                  <CardDescription>
                    Enter your credentials to access your client portal.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="login-email">Email Address</Label>
                      <Input
                        id="login-email"
                        type="email"
                        required
                        value={loginData.email}
                        onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your.email@example.com"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        required
                        value={loginData.password}
                        onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                        placeholder="Enter your password"
                        className="mt-1"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isLoading} 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="spinner w-4 h-4 mr-2" />
                          Logging in...
                        </div>
                      ) : (
                        'Login'
                      )}
                    </Button>
                  </form>
                  
                  <div className="mt-4 text-center">
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                      Forgot your password?
                    </a>
                  </div>
                </CardContent>
              </TabsContent>
              
              <TabsContent value="signup">
                <CardHeader>
                  <CardTitle>Create New Account</CardTitle>
                  <CardDescription>
                    Join VLP Technologies to access our client portal and services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                      <Label htmlFor="signup-name">Full Name</Label>
                      <Input
                        id="signup-name"
                        type="text"
                        required
                        value={signupData.name}
                        onChange={(e) => setSignupData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Your full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="signup-email">Email Address</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        required
                        value={signupData.email}
                        onChange={(e) => setSignupData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your.email@example.com"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="signup-phone">Phone Number</Label>
                      <Input
                        id="signup-phone"
                        type="tel"
                        required
                        value={signupData.phone}
                        onChange={(e) => setSignupData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 XXXXX XXXXX"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        required
                        value={signupData.password}
                        onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))}
                        placeholder="Create a strong password"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                      <Input
                        id="signup-confirm-password"
                        type="password"
                        required
                        value={signupData.confirmPassword}
                        onChange={(e) => setSignupData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        placeholder="Confirm your password"
                        className="mt-1"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isLoading} 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="spinner w-4 h-4 mr-2" />
                          Creating Account...
                        </div>
                      ) : (
                        'Create Account'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-4">Need help getting started?</p>
            <a
              href="https://wa.me/919648974867?text=Hello, I need help with account access"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-400 hover:text-green-300 font-medium"
            >
              <i className="fab fa-whatsapp mr-2" />
              Contact Support on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}