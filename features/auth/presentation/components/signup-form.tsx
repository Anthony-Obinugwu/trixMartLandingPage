'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Mail, Lock, User, UserCircle, School as SchoolIcon, AlertCircle, CheckCircle2 } from 'lucide-react';
import { signupAction } from '../../application/auth.actions';
import { getSchoolsAction } from '@/features/schools/application/schools.actions';
import { School } from '@/features/schools/domain/types';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SignupPayload } from '../../domain/types';

const signupSchema = z.object({
  firstname: z.string().min(2, 'First name must be at least 2 characters'),
  lastname: z.string().min(2, 'Last name must be at least 2 characters'),
  username: z.string().min(3, 'Username must be at least 3 characters').regex(/^[a-z0-9_]+$/, 'Username can only contain lowercase letters, numbers, and underscores'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  school_id: z.string().uuid('Please select your university'),
  role: z.enum(['buyer', 'seller']),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export function SignupForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [schools, setSchools] = useState<School[]>([]);
  const [isLoadingSchools, setIsLoadingSchools] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialRole = (searchParams.get('role') as 'buyer' | 'seller') || 'buyer';

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      school_id: '',
      role: initialRole,
    },
  });

  useEffect(() => {
    if (initialRole) {
      form.setValue('role', initialRole);
    }
  }, [initialRole, form]);

  useEffect(() => {
    async function loadSchools() {
      const result = await getSchoolsAction();
      if (result.success && result.data) {
        setSchools(result.data);
      } else {
        console.error('Failed to load schools');
      }
      setIsLoadingSchools(false);
    }
    loadSchools();
  }, []);

  async function onSubmit(values: SignupPayload) {
    setIsLoading(true);
    setError(null);

    const result = await signupAction(values);

    if (result.success) {
      router.push('/form-submitted');
    } else {
      setError(result.error || 'Failed to create account');
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Create an account</h1>
        <p className="text-gray-500">Join the Trix Mart community on your campus</p>
      </div>

      {error && (
        <Alert variant="destructive" className="animate-in fade-in slide-in-from-top-4 duration-300">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Signup Failed</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <Label className="text-base font-semibold">I want to join as a:</Label>
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <Tabs
                  value={field.value}
                  onValueChange={field.onChange}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-2 h-14 p-1 bg-gray-100 rounded-xl">
                    <TabsTrigger
                      value="buyer"
                      className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#0D6EFD] data-[state=active]:shadow-sm transition-all"
                    >
                      Buyer
                    </TabsTrigger>
                    <TabsTrigger
                      value="seller"
                      className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-[#FF7A00] data-[state=active]:shadow-sm transition-all"
                    >
                      Seller
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        placeholder="John"
                        className="pl-10 h-12 rounded-xl border-gray-200 focus:border-[#0D6EFD]"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        placeholder="Doe"
                        className="pl-10 h-12 rounded-xl border-gray-200 focus:border-[#0D6EFD]"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <div className="relative">
                    <UserCircle className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="johndoe_24"
                      className="pl-10 h-12 rounded-xl border-gray-200 focus:border-[#0D6EFD]"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="school_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>University</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12 rounded-xl border-gray-200">
                      <div className="flex items-center">
                        <SchoolIcon className="mr-2 h-5 w-5 text-gray-400" />
                        <SelectValue placeholder={isLoadingSchools ? "Loading universities..." : "Select your university"} />
                      </div>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="rounded-xl">
                    {schools.map((school) => (
                      <SelectItem key={school.id} value={school.id}>
                        {school.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="name@university.edu"
                      className="pl-10 h-12 rounded-xl border-gray-200 focus:border-[#0D6EFD]"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 h-12 rounded-xl border-gray-200 focus:border-[#0D6EFD]"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className={`w-full h-12 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 ${form.watch('role') === 'buyer'
                ? 'bg-[#0D6EFD] hover:bg-[#0b5ed7] text-white'
                : 'bg-[#FF7A00] hover:bg-[#e67000] text-white'
              }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Creating account...
              </>
            ) : (
              'Create Account'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
