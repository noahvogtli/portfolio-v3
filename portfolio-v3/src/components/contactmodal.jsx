import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const dataJs = {
  access_token: "j8wm8ydqo1bwxi8pzgg2bp90",
}

function ContactModal({ open: controlledOpen, onOpenChange }) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const open = typeof controlledOpen === "boolean" ? controlledOpen : internalOpen

  function setOpen(nextOpen) {
    if (onOpenChange) {
      onOpenChange(nextOpen)
      return
    }
    setInternalOpen(nextOpen)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const firstName = String(formData.get("first") ?? "")
    const lastName = String(formData.get("lastname") ?? "")
    const email = String(formData.get("email") ?? "")
    const message = String((formData.get("message") ?? "") + "\n\nReply at: " + email)

    const payload = {
      access_token: dataJs.access_token,
      subject: `Portfolio Contact: ${firstName} ${lastName}`.trim(),
      email,
      text: message,
    }

    const encoded = Object.keys(payload)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(payload[key])}`)
      .join("&")

    const request = new XMLHttpRequest()
    request.open("POST", "https://postmail.invotes.com/send", true)
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    request.onload = function () {
      setSubmitted(true)
    }
    request.send(encoded)
  }

  function handleOpenChange(nextOpen) {
    setOpen(nextOpen)
    if (!nextOpen) {
      setSubmitted(false)
    }
  }

return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-sm">
        {submitted ? (
          <>
            <DialogHeader>
              <DialogTitle>Thank you!</DialogTitle>
              <DialogDescription>
                Your message was submitted successfully. I’ll get back to you soon.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">Close</Button>
              </DialogClose>
            </DialogFooter>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Contact Me</DialogTitle>
              <DialogDescription className='mb-10'>
                Fill out the form below to get in touch.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <FieldGroup className="grid max-w-sm grid-cols-2">
                <Field>
                  <Label htmlFor="firstname-1">First Name</Label>
                  <Input id="firstname-1" name="first" placeholder="First Name" required />
                </Field>
                <Field>
                  <Label htmlFor="lastname-1">Last Name</Label>
                  <Input id="lastname-1" name="lastname" placeholder="Last Name" required />
                </Field>
              </FieldGroup>
              <Field>
                <Label htmlFor="email-1">Email</Label>
                <Input type="email" id="email-1" name="email" placeholder="Email" required />
              </Field>
              <Field>
                <Label htmlFor="message-1">Message</Label>
                <Textarea id="message-1" name="message" placeholder="Message" required className='mb-5 pb-20'/>
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" variant="noah">Send</Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default ContactModal;