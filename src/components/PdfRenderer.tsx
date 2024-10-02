// 'use client'

// import {
//   ChevronDown,
//   ChevronUp,
//   Loader2,
//   RotateCw,
//   Search,
// } from 'lucide-react'
// import { Document, Page, pdfjs } from 'react-pdf'

// import 'react-pdf/dist/Page/AnnotationLayer.css'
// import 'react-pdf/dist/Page/TextLayer.css'
// import { useToast } from './ui/use-toast'

// import { useResizeDetector } from 'react-resize-detector'
// import { Button } from './ui/button'
// import { Input } from './ui/input'
// import { useState } from 'react'

// import { useForm } from 'react-hook-form'
// import { z } from 'zod'

// import { zodResolver } from '@hookform/resolvers/zod'
// import { cn } from '@/lib/utils'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from './ui/dropdown-menu'

// import SimpleBar from 'simplebar-react'
// import PdfFullscreen from './PdfFullscreen'

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

// interface PdfRendererProps {
//   url: string
// }

const PdfRenderer = () => {
//   const { toast } = useToast()

//   const [numPages, setNumPages] = useState<number>()
//   const [currPage, setCurrPage] = useState<number>(1)
//   const [scale, setScale] = useState<number>(1)
//   const [rotation, setRotation] = useState<number>(0)
//   const [renderedScale, setRenderedScale] = useState<
//     number | null
//   >(null)

//   const isLoading = renderedScale !== scale

//   const CustomPageValidator = z.object({
//     page: z
//       .string()
//       .refine(
//         (num) => Number(num) > 0 && Number(num) <= numPages!
//       ),
//   })

//   type TCustomPageValidator = z.infer<
//     typeof CustomPageValidator
//   >

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//   } = useForm<TCustomPageValidator>({
//     defaultValues: {
//       page: '1',
//     },
//     resolver: zodResolver(CustomPageValidator),
//   })

//   console.log(errors)

//   const { width, ref } = useResizeDetector()

//   const handlePageSubmit = ({
//     page,
//   }: TCustomPageValidator) => {
//     setCurrPage(Number(page))
//     setValue('page', String(page))
//   }

  return (
    <div className='w-full bg-white rounded-md shadow flex flex-col items-center'>
      <div className='h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2'>
        <div className='flex items-center gap-1.5'>
            Top Bar
        </div>
      </div>
    </div>
  )
}

export default PdfRenderer