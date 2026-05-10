'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  School as SchoolIcon, 
  Shield, 
  ShieldAlert,
  LogOut, 
  ArrowLeft,
  Calendar,
  Loader2,
  MapPin
} from 'lucide-react';
import { getCurrentUserAction, logoutAction } from '@/features/auth/application/auth.actions';
import { getSchoolsAction } from '@/features/schools/application/schools.actions';
import { Profile } from '@/features/auth/domain/types';
import { School } from '@/features/schools/domain/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ProfilePage() {
  const [user, setUser] = useState<Profile | null>(null);
  const [school, setSchool] = useState<School | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadData() {
      const userResult = await getCurrentUserAction();
      if (userResult.success && userResult.data) {
        setUser(userResult.data);
        
        // Load school details
        const schoolsResult = await getSchoolsAction();
        if (schoolsResult.success && schoolsResult.data) {
          const userSchool = schoolsResult.data.find(s => s.id === userResult.data?.school_id);
          if (userSchool) setSchool(userSchool);
        }
      } else {
        router.push('/auth');
      }
      setLoading(false);
    }
    loadData();
  }, [router]);

  const handleLogout = async () => {
    await logoutAction();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-[#0D6EFD]" />
          <p className="text-gray-500 font-medium">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const initials = `${user.firstname?.[0] || ''}${user.lastname?.[0] || ''}`.toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 pb-12 font-montserrat">
      {/* Profile Header Background */}
      <div className="h-48 md:h-64 bg-gradient-to-r from-[#0D6EFD] to-[#005bb0] relative">
        <Link href="/" className="absolute top-6 left-6 z-10">
          <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <main className="max-w-5xl mx-auto px-4 -mt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Avatar & Basic Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-1"
          >
            <Card className="shadow-xl border-none rounded-3xl overflow-hidden">
              <CardContent className="pt-12 pb-8 flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 ring-4 ring-white shadow-lg -mt-6 mb-6">
                  <AvatarImage src={user.avatar_url || ''} />
                  <AvatarFallback className="text-3xl bg-gray-100 text-[#0D6EFD]">{initials}</AvatarFallback>
                </Avatar>
                
                <h2 className="text-2xl font-bold text-gray-900">{user.firstname} {user.lastname}</h2>
                <p className="text-[#0D6EFD] font-medium mb-4">@{user.username}</p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {user.roles.map((role) => (
                    <Badge key={role} variant="outline" className={`capitalize px-3 py-1 rounded-full ${
                      role === 'seller' ? 'bg-orange-50 text-orange-600 border-orange-200' : 'bg-blue-50 text-blue-600 border-blue-200'
                    }`}>
                      {role}
                    </Badge>
                  ))}
                </div>

                <div className="w-full pt-6 border-t border-gray-100 space-y-4 text-left">
                  <div className="flex items-center text-gray-600 gap-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-sm truncate">{user.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600 gap-3">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Joined {new Date(user.created_at).toLocaleDateString()}</span>
                  </div>
                </div>

                <Button 
                  onClick={handleLogout}
                  variant="destructive" 
                  className="w-full mt-8 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 border-none transition-colors"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column: Detailed Info & Activities */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="shadow-xl border-none rounded-3xl overflow-hidden">
                <CardHeader className="bg-white border-b border-gray-50 pb-4">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <SchoolIcon className="h-5 w-5 text-[#0D6EFD]" />
                    University Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-8">
                  {school ? (
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                      <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-md ring-1 ring-gray-100">
                        <Image 
                          src={school.logo_url} 
                          alt={school.name} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 space-y-4 text-center md:text-left">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{school.name}</h3>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mt-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">Campus location primary</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No university details found.</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Danger Zone */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="shadow-xl border-none rounded-3xl overflow-hidden border-red-100 bg-red-50/30">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl flex items-center gap-2 text-red-600">
                    <ShieldAlert className="h-5 w-5" />
                    Danger Zone
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/60 p-6 rounded-2xl border border-red-100">
                    <div className="text-center md:text-left">
                      <h4 className="font-bold text-gray-900">Delete Account</h4>
                      <p className="text-sm text-gray-500">Permanently remove your account and all associated data.</p>
                    </div>
                    <Link href="/profile/delete-account">
                      <Button variant="destructive" className="bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all font-bold">
                        Delete My Account
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Placeholder for other profile sections */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="shadow-xl border-none rounded-3xl overflow-hidden border-dashed border-2 bg-gray-50/50">
                <CardContent className="py-12 text-center">
                  <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Shield className="h-8 w-8 text-gray-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-400">Activity Log & Settings</h3>
                  <p className="text-gray-400 text-sm max-w-xs mx-auto mt-2">
                    More profile features like order history and shop management are coming soon!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
