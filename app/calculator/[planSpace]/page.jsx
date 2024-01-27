import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      page
      <Link href="/calculator/#plan-spaces">
        <button>Back</button>
      </Link>
    </div>
  )
}

export default page
