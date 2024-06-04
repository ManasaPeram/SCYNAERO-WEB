
'use client';

import { Textarea } from "@/components/ui/textarea";
import { Input } from "../../components/ui/input";
import { Switch } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    console.log(result);
    // You can add further logic to handle the response here
  };

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8 ">
      <div className="mx-auto max-w-2xl text-center ">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground ">Please feel free to ask anything </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20 ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="mt-2.5 ">
            <Input type="text" id="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
          </div>
          <div className="mt-2.5 ">
            <Input type="text" id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
          </div>
          <div className="sm:col-span-2 ">
            <div className="mt-2.5 ">
              <Input type="text" id="company" value={formData.company} onChange={handleChange} placeholder="Company" />
            </div>
          </div>
          <div className="sm:col-span-2 ">
            <div className="mt-2.5 ">
              <Input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
            </div>
          </div>
          <div className="sm:col-span-2 ">
            <div className="mt-2.5 ">
              <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Type your Message Here..." />
            </div>
          </div>
          <Switch.Group as="div">
            <div>
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-primary ' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 '
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5 ' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600 ">
              By selecting this, you agree to our {' '}
              <a href="#" className="font-semibold text-primary">
                privacy &nbsp; policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
          <div>
            <Button type="submit" className="flex w-full items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 ">
              Let's talk <TbArrowUpRight className="w-5 h-5 ml-2"/>
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
