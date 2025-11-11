'use client'
import { useState } from 'react';
export default function Page(){
  const [status,setStatus]=useState(null);
  async function onSubmit(e){
    e.preventDefault();
    const form=new FormData(e.currentTarget);
    const payload=Object.fromEntries(form.entries());
    const res=await fetch('/api/lead',{method:'POST',body:JSON.stringify(payload)});
    setStatus(res.ok?'Thank you! We will contact you within 24h.':'Something went wrong.');
    if(res.ok) e.currentTarget.reset();
  }
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Request Your Implementation Plan</h1>
      <p className="mt-2 text-gray-600">Fill out the form and our team will respond within 24 hours.</p>
      <form onSubmit={onSubmit} className="card mt-6 grid md:grid-cols-2 gap-4">
        <input name="name" placeholder="Name" className="border p-3 rounded-xl" required/>
        <input name="company" placeholder="Company" className="border p-3 rounded-xl" required/>
        <input name="email" type="email" placeholder="Email" className="border p-3 rounded-xl md:col-span-2" required/>
        <select name="projectType" className="border p-3 rounded-xl">
          <option>AI & Automation</option><option>Website</option><option>Custom App</option><option>Blockchain</option>
        </select>
        <select name="budget" className="border p-3 rounded-xl">
          <option>&lt; $10k</option><option>$10–30k</option><option>$30–100k</option><option>$100k+</option>
        </select>
        <textarea name="message" placeholder="Tell us about your goals" className="border p-3 rounded-xl md:col-span-2" rows={5}></textarea>
        <button className="btn btn-primary md:col-span-2" type="submit">Send Request</button>
        {status && <p className="text-green-600 md:col-span-2">{status}</p>}
      </form>
    </section>
  );
}