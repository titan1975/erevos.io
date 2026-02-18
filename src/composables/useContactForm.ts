import { ref, reactive } from 'vue'
import axios from 'axios'
import type { ContactForm, ContactFormErrors } from '../types'

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
      // Replace with your actual API endpoint
      await axios.post('/api/contact', formData)

      submitStatus.value = 'success'
      submitMessage.value = 'Thank you! Athena will connect you with our team soon.'

      // Reset form
      formData.name = ''
      formData.email = ''
      formData.subject = ''
      formData.message = ''
      formData.service = ''
      formData.codeSnippet = ''
    } catch (error: any) {
      submitStatus.value = 'error'
      submitMessage.value =
        error.response?.data?.message || 'Something went wrong. Please try again.'
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
