"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

function CoursePreview({params}) {
    
    useEffect(()=>{
        
    },[])

    const getCourseInfoById=()=>{
        
    }
    return (
        <div class = 'grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
            {/* Title Video, Description */}
            <div className='col-span-2 bg-white p-3'>
                <CourseVideoDescription/>
            </div>

            {/*Course Content */}
            <div>

            </div>
        </div>
    )
}

export default CoursePreview