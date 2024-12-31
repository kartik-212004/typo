from reportlab.pdfgen import canvas

# Create a new PDF file
pdf_file = canvas.Canvas('BTech_Math_Question_Paper.pdf')

# Add text to the PDF
pdf_file.setFont('Helvetica', 12)
pdf_file.drawString(100, 750, 'BTech 2nd Year Mathematics Question Paper')
# ... (Add other content here)

# Save and close the PDF file
pdf_file.save()
