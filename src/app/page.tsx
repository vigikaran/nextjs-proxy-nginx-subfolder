import styles from "./page.module.css";
import { hello, submitForm  } from '../actions';

export default async function Home() {
  const message = await hello();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{message}</h1>
      </main>
      <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      
      <form action={submitForm}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea 
            id="message" 
            name="message" 
            className="w-full p-2 border rounded" 
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
