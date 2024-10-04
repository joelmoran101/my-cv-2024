import { useRef } from 'react'
import { Button } from "@/components/ui/button"
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import EnhancedCVTemplate from '@/components/enhanced-cv-template'

export default function CVPDFGenerator() {
  const cvRef = useRef(null)

  const generatePDF = async () => {
    if (cvRef.current) {
      const canvas = await html2canvas(cvRef.current)
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save('YourName_CV.pdf')
    }
  }

  return (
    <div>
      <div ref={cvRef}>
        {/* Insert your CV component here */}
        EnhancedCVTemplate()
      </div>
      <Button onClick={generatePDF}>Generate PDF</Button>
    </div>
  )
}