"use client"

import React, { useEffect, useState } from 'react' 
import { useDispatch } from 'react-redux' 
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import AdminJobsTable from '@/components/admin/AdminJobsTable'
import UseGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { useRouter } from 'next/navigation'
import { setSearchJobByText } from '@/redux/jobSlice'

const Page = () => {
  UseGetAllAdminJobs();
  const [input, setInput] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);
  return (
    <div>
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <Input
            className="w-fit"
            placeholder="Filter by name, role"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => router.push("/admin/job/create")}>New Jobs</Button>
        </div>
        <AdminJobsTable />
      </div>
    </div>
  )
}

export default Page