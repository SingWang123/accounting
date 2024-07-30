"use client";
import React, { useEffect } from 'react';
import { Form } from '../../components/Form';
import { List } from '../../components/List';
import { useAuth } from '../../lib/firebase.';
import { useRouter } from 'next/navigation';


export default function AccountingPage() {
  const {user,loading} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/'); // 如果未登入，重定向到首頁或登入頁面
    }
  }, [user, loading, router]);

  return (
    <div className = "index">
      <Form />
      <List />
    </div>
  );
};
