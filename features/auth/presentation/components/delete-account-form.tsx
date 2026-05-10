'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  Loader2, 
  Lock, 
  ShieldAlert, 
  ArrowLeft,
  ChevronRight,
  Info
} from 'lucide-react';
import { deleteAccountAction } from '../../application/auth.actions';
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
  FormDescription,
} from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';

const deleteSchema = z.object({
  password: z.string().min(1, 'Password is required to authorize deletion'),
  confirmation: z.string().min(1, 'Confirmation word is required'),
});

type DeleteFormValues = z.infer<typeof deleteSchema>;

export function DeleteAccountForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentDay, setCurrentDay] = useState('');
  const router = useRouter();

  useEffect(() => {
    setCurrentDay(new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date()).toUpperCase());
  }, []);

  const form = useForm<DeleteFormValues>({
    resolver: zodResolver(deleteSchema),
    defaultValues: {
      password: '',
      confirmation: '',
    },
  });

  async function onSubmit(values: DeleteFormValues) {
    setIsLoading(true);
    setError(null);

    const result = await deleteAccountAction(values.password, values.confirmation.toUpperCase());

    if (result.success) {
      router.push('/goodbye');
    } else {
      setError(result.error || 'Failed to delete account');
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="bg-red-50 border border-red-100 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-4 text-red-600">
          <div className="bg-red-100 p-3 rounded-2xl">
            <ShieldAlert className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Delete Account</h1>
            <p className="text-red-500/80 font-medium">This action is irreversible</p>
          </div>
        </div>

        <Alert variant="destructive" className="bg-white/50 border-red-200 text-red-700 rounded-2xl">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle className="font-bold">Warning</AlertTitle>
          <AlertDescription className="text-sm leading-relaxed">
            Deleting your account will permanently remove all your profile information, 
            listed products, order history, and reviews. This data cannot be recovered 
            once the process is complete.
          </AlertDescription>
        </Alert>

        <div className="space-y-4 pt-2">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <Info className="h-4 w-4 text-gray-400" />
            Before you proceed:
          </h3>
          <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
            <li>Review our <Link href="/privacy-policy" className="text-[#0D6EFD] underline hover:text-[#0b5ed7]">Privacy Policy</Link> to understand how we handle data deletion.</li>
            <li>Any pending orders must be completed or cancelled before deletion.</li>
            <li>Consult our <Link href="/terms-conditions" className="text-[#0D6EFD] underline hover:text-[#0b5ed7]">Terms and Conditions</Link> for more details.</li>
          </ul>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-2">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-semibold">Enter Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="pl-12 h-14 rounded-2xl border-gray-200 focus:border-red-500 focus:ring-red-500 transition-all shadow-sm"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormDescription>
                  For security, please enter your current password to authorize this request.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-semibold">
                  Confirmation Word: <span className="text-red-600 font-black">{currentDay}</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={`Type ${currentDay} to confirm`}
                    className="h-14 rounded-2xl border-gray-200 focus:border-red-500 focus:ring-red-500 transition-all shadow-sm font-bold tracking-widest text-center"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                  />
                </FormControl>
                <FormDescription>
                  Type the word above in ALL CAPS to confirm you understand the consequences.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Alert variant="destructive" className="rounded-2xl border-red-200">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Action Denied</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </motion.div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              className="flex-1 h-14 rounded-2xl border-gray-200 text-gray-600 hover:bg-gray-50 font-semibold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Cancel & Keep Account
            </Button>
            <Button
              type="submit"
              disabled={isLoading || form.watch('confirmation') !== currentDay}
              className="flex-[1.5] h-14 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-lg shadow-lg shadow-red-200 transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Deleting Account...
                </>
              ) : (
                'Permanently Delete My Account'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

function AlertCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
