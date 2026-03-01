import { ref, reactive } from 'vue'
import type { ContactForm, ContactFormErrors } from '../types'

const WEB3FORMS_ACCESS_KEY = 'd3e0ff2a-4c08-43cd-b465-6b677e050986'

export function useContactForm() {
  const formData = reactive<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: '',
    codeSnippet: '',
  })

  const errors = reactive<ContactFormErrors>({})
  const isSubmitting = ref<boolean>(false)
  const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
  const submitMessage = ref<string>('')

  const validateForm = (): boolean => {
    let isValid = true
    errors.name = ''
    errors.email = ''
    errors.subject = ''
    errors.message = ''

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
      isValid = false
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      errors.email = 'Email is required'
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email'
      isValid = false
    }

    // Subject validation
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required'
      isValid = false
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
      isValid = false
    }

    return isValid
  }

  const submitForm = async (): Promise<void> => {
    if (!validateForm()) return

    isSubmitting.value = true
    submitStatus.value = 'idle'
    submitMessage.value = ''

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          service: formData.service || 'Not specified',
        }),
      })

      const result = await response.json()

      if (result.success) {
        submitStatus.value = 'success'
        submitMessage.value = 'Thank you! We received your message and will get back to you soon.'

        // Reset form
        formData.name = ''
        formData.email = ''
        formData.subject = ''
        formData.message = ''
        formData.service = ''
        formData.codeSnippet = ''
      } else {
        throw new Error(result.message || 'Submission failed')
      }
    } catch (error: any) {
      submitStatus.value = 'error'
      submitMessage.value = 'Something went wrong. Please try again.'
    } finally {
      isSubmitting.value = false
    }
  }

  const resetForm = (): void => {
    formData.name = ''
    formData.email = ''
    formData.subject = ''
    formData.message = ''
    formData.service = ''
    formData.codeSnippet = ''

    errors.name = ''
    errors.email = ''
    errors.subject = ''
    errors.message = ''

    submitStatus.value = 'idle'
    submitMessage.value = ''
  }

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    submitMessage,
    submitForm,
    resetForm,
    validateForm,
  }
}
