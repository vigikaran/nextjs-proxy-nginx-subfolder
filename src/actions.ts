'use server';

export async function hello() {
  return 'Hello from Server Action!';
}

export async function submitForm(formData: FormData): Promise<void> {

  console.log('Form submission:', formData);

}